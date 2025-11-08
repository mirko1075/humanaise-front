import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = path.resolve('src/imgs/logo.png');
const outDir = path.resolve('public');
const bgColor = '#1e40af'; // site theme color (blue/purple)

if (!fs.existsSync(input)) {
  console.error('Input logo not found:', input);
  process.exit(1);
}

(async () => {
  try {
    const image = sharp(input);
    const meta = await image.metadata();
    const width = meta.width || 0;
    const height = meta.height || 0;
  const min = Math.max(1, Math.min(width, height));
  console.log('Image meta:', { width, height, min });
    // center crop (keeps previous behaviour)
    const leftCenter = Math.floor((width - min) / 2);
    const top = Math.floor((height - min) / 2);
    const cropCenter = image.extract({ left: leftCenter, top, width: min, height: min });

    const sizes = [192, 32, 16];
    await Promise.all(sizes.map(async (size) => {
      const out = path.join(outDir, `favicon-${size}.png`);
      await cropCenter
        .resize(size, size, { fit: 'cover' })
        .flatten({ background: bgColor })
        .png({ quality: 90 })
        .toFile(out);
      console.log('Wrote', out);
    }));

    // also write a default public/favicon.png (32px)
    const defaultOut = path.join(outDir, 'favicon.png');
    await cropCenter
      .resize(32, 32, { fit: 'cover' })
      .flatten({ background: bgColor })
      .png({ quality: 90 })
      .toFile(defaultOut);
    console.log('Wrote', defaultOut);

  // left-biased crop: focus more on the left side where the brain icon usually sits
  const leftBrain = Math.max(0, Math.floor(width * 0.12)); // bias 12% from left
  const topBrain = Math.floor((height - min) / 2);

    // compute a safe square size that fits inside the image from leftBrain/topBrain
    let extractW = Math.min(min, width - leftBrain, height - topBrain);
    extractW = Math.max(0, Math.floor(extractW));
    console.log('Brain crop params:', { leftBrain, topBrain, extractW });

    if (extractW > 0) {
      const cropBrain = image.extract({ left: leftBrain, top: topBrain, width: extractW, height: extractW });

      const brainSizes = [192, 32, 16];
      for (const size of brainSizes) {
        const out = path.join(outDir, `favicon-brain-${size}.png`);
        try {
          // create a fresh sharp pipeline per output to avoid reusing extracted pipeline
          const fresh = sharp(input).extract({ left: leftBrain, top: topBrain, width: extractW, height: extractW });
          // increase clarity: apply contrast-like linear and a small sharpen
          await fresh
            .resize(size, size, { fit: 'cover' })
            .flatten({ background: bgColor })
            .linear(1.05, -6) // slight contrast/brightness tweak
            .sharpen(0.8)
            .png({ quality: 92 })
            .toFile(out);
          console.log('Wrote', out);
        } catch (e) {
          console.warn('Skipping brain output', out, 'due to error:', e.message || e);
        }
      }

      const defaultBrain = path.join(outDir, 'favicon-brain.png');
      try {
        const freshDefault = sharp(input).extract({ left: leftBrain, top: topBrain, width: extractW, height: extractW });
        await freshDefault
          .resize(32, 32, { fit: 'cover' })
          .flatten({ background: bgColor })
          .linear(1.05, -6)
          .sharpen(0.8)
          .png({ quality: 92 })
          .toFile(defaultBrain);
        console.log('Wrote', defaultBrain);
      } catch (e) {
        console.warn('Skipping brain default output', defaultBrain, 'due to error:', e.message || e);
      }

      // TIGHT crop: smaller square focused only on brain shape (60% of extractW)
      const tightSize = Math.max(8, Math.floor(extractW * 0.60));
      const tightLeft = Math.min(width - tightSize, leftBrain + Math.floor(extractW * 0.06));
      const tightTop = Math.max(0, topBrain + Math.floor((extractW - tightSize) / 2));
      if (tightSize > 10) {
        const tightBrain = image.extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize });
        for (const size of brainSizes) {
          const out = path.join(outDir, `favicon-brain-tight-${size}.png`);
          try {
            await sharp(input)
              .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
              .resize(size, size, { fit: 'cover' })
              .flatten({ background: bgColor })
              .linear(1.06, -8)
              .sharpen(1.2)
              .png({ quality: 95 })
              .toFile(out);
            console.log('Wrote', out);
          } catch (e) {
            console.warn('Skipping tight brain output', out, 'due to error:', e.message || e);
          }
        }
        const tightDefault = path.join(outDir, 'favicon-brain-tight.png');
        try {
          await sharp(input)
            .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
            .resize(32, 32, { fit: 'cover' })
            .flatten({ background: bgColor })
            .linear(1.06, -8)
            .sharpen(1.2)
            .png({ quality: 95 })
            .toFile(tightDefault);
          console.log('Wrote', tightDefault);
        } catch (e) {
          console.warn('Skipping tight default', tightDefault, 'due to error:', e.message || e);
        }
      }
    } else {
      console.warn('Skipping brain crop: computed extract area is invalid or zero');
    }

    console.log('Favicons generated successfully.');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();

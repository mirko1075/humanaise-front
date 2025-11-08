import fs from 'fs';
import path from 'path';
import pngToIco from 'png-to-ico';

const outDir = path.resolve('public');
const files = [
  path.join(outDir, 'favicon-brain-48.png'),
  path.join(outDir, 'favicon-brain-32.png'),
  path.join(outDir, 'favicon-brain-16.png')
].filter(f => fs.existsSync(f));

(async () => {
  if (!files.length) {
    console.error('No PNG inputs found for ICO:', files);
    process.exit(1);
  }
  try {
    const buffer = await pngToIco(files);
    fs.writeFileSync(path.join(outDir, 'favicon.ico'), buffer);
    console.log('Wrote', path.join(outDir, 'favicon.ico'));
  } catch (err) {
    console.error('Error building ICO:', err);
    process.exit(1);
  }
})();

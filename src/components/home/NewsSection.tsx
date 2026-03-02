import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { fadeInUp, scrollViewport } from '../../utils/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import type { Language } from '../../types/language';
import { getNewsItems } from '../../utils/news';

const newsDateFormatters: Record<Language, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }),
  it: new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }),
  es: new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }),
  fr: new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }),
};

function formatNewsDate(date: string, language: Language) {
  return newsDateFormatters[language].format(new Date(`${date}T00:00:00Z`));
}

function getNewsYear(date: string) {
  return date.slice(0, 4);
}

type NewsContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'paragraph'; text: string };

function parseContentBlocks(content: string): NewsContentBlock[] {
  return content
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length === 1 && lines[0].endsWith(':')) {
        return { type: 'heading', text: lines[0].slice(0, -1) };
      }

      if (lines.every((line) => line.startsWith('• '))) {
        return {
          type: 'list',
          items: lines.map((line) => line.replace(/^•\s*/, '')),
        };
      }

      return {
        type: 'paragraph',
        text: lines.join(' '),
      };
    });
}

export function NewsSection() {
  const { language } = useLanguage();
  const t = useTranslation();
  const newsItems = getNewsItems(language);

  return (
    <section
      id="news"
      className="bg-gradient-to-b from-slate-950 via-primary-900 to-slate-900 pt-24 pb-20"
    >
      <Container className="max-w-5xl">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary-300">
            {t.news.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">
            {t.news.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
            {t.news.subtitle}
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-primary-700/45 bg-[linear-gradient(180deg,rgba(3,105,161,0.18),rgba(2,6,23,0.92))] shadow-[0_32px_80px_-48px_rgba(14,165,233,0.45)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

          <div
            className="news-scrollbar max-h-[560px] overflow-y-auto scroll-smooth px-4 py-5 sm:px-8 sm:py-7"
            aria-label={t.news.feedAriaLabel}
          >
            <div
              className="relative"
            >
              <div className="pointer-events-none absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-primary-400/0 via-primary-300/80 to-primary-400/0 sm:left-[10.625rem]" />
              {newsItems.map((item) => (
                <article key={item.id} className="relative py-5 first:pt-1 last:pb-1 sm:py-7">
                  <div className="absolute left-5 top-11 z-10 h-3.5 w-3.5 rounded-full border-4 border-slate-950 bg-primary-300 shadow-[0_0_0_6px_rgba(14,165,233,0.16)] sm:left-[10.25rem]" />

                  <div className="grid gap-4 pl-11 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-8 sm:pl-0">
                    <div className="sm:pr-5 sm:text-right">
                      <span className="inline-flex rounded-full border border-primary-400/40 bg-primary-400/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary-100">
                        {getNewsYear(item.date)}
                      </span>
                      <p className="mt-3 text-sm font-medium text-primary-200/80">
                        <time dateTime={item.date}>{formatNewsDate(item.date, language)}</time>
                      </p>
                      <div className="mt-3 text-sm leading-6 text-primary-100/85">
                        <span className="mr-1 text-primary-200/60">{t.news.clientLabel}:</span>
                        {item.client.website ? (
                          <a
                            href={item.client.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-primary-50 transition-colors duration-200 hover:text-primary-200 hover:underline"
                          >
                            {item.client.name}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        ) : (
                          <span className="text-primary-50">{item.client.name}</span>
                        )}
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-primary-700/55 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(8,47,73,0.9))] p-5 shadow-[0_20px_50px_-30px_rgba(2,132,199,0.45)] transition-colors duration-300 hover:border-primary-400/55 sm:p-7">
                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold leading-tight text-slate-50 sm:text-[1.85rem]">
                            {item.title}
                          </h3>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-primary-500/30 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {item.metrics.map((metric) => (
                          <div
                            key={`${item.id}-${metric.label}`}
                            className="rounded-2xl border border-primary-800/80 bg-slate-950/80 px-4 py-4"
                          >
                            <p className="text-2xl font-semibold tracking-tight text-primary-200">
                              {metric.value}
                            </p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100/80">
                              {metric.label}
                            </p>
                            {metric.detail ? (
                              <p className="mt-2 text-sm leading-6 text-slate-300">
                                {metric.detail}
                              </p>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 space-y-4">
                        {parseContentBlocks(item.content).map((block, blockIndex) => {
                          if (block.type === 'heading') {
                            return (
                              <p
                                key={`${item.id}-heading-${blockIndex}`}
                                className="pt-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary-200"
                              >
                                {block.text}
                              </p>
                            );
                          }

                          if (block.type === 'list') {
                            return (
                              <ul
                                key={`${item.id}-list-${blockIndex}`}
                                className="space-y-3 rounded-2xl border border-primary-800/80 bg-slate-950/75 px-4 py-4 sm:px-5"
                              >
                                {block.items.map((listItem, listItemIndex) => (
                                  <li
                                    key={`${item.id}-list-${blockIndex}-${listItemIndex}`}
                                    className="flex gap-3 text-base leading-7 text-slate-100"
                                  >
                                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-300" />
                                    <span>{listItem}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                          }

                          return (
                            <p
                              key={`${item.id}-paragraph-${blockIndex}`}
                              className="text-base leading-7 text-slate-100/90 sm:text-[1.05rem]"
                            >
                              {block.text}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

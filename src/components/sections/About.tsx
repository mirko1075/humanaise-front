import { Container } from '../ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

export function About() {
    const t = useTranslation();
  
    
  return (
    <section id="about" className="py-20 bg-primary-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{t.about.journey.title}</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-primary-200 mb-6">
            {t.about.journey.description}<br></br><br></br>
              {t.about.company.founder.story}
            </p>
            <p className="text-primary-200 mb-6">
            {t.about.company.founder.story_2}
            </p>
            <p className="text-primary-200">
            {t.about.company.founder.story_3}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Timeline from '../components/Timeline.jsx';
import { education } from '../data/portfolioData.js';

const timelineItems = education.map((edu) => ({
  key: edu.school + edu.period,
  logoLabel: edu.logoLabel,
  title: `${edu.degree}, ${edu.field}`,
  org: edu.affiliation ? `${edu.school} (${edu.affiliation})` : edu.school,
  period: edu.period,
  location: edu.location,
}));

const EducationPage = () => (
  <section id="education" className="section" aria-labelledby="education-title">
    <div className="section-inner">
      <p className="section-eyebrow">Foundation</p>
      <h2 id="education-title" className="section-title">Education</h2>
      <Timeline items={timelineItems} />
    </div>
  </section>
);

export default EducationPage;

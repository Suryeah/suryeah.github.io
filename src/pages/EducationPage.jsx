import Timeline from '../components/Timeline.jsx';

const educationList = [
  {
    school: 'Vector India Org',
    degree: 'Certification',
    field: 'Advanced Embedded Systems',
    period: 'Jul 2019',
    location: 'Chennai, Tamil Nadu, India',
    summary: 'Completed advanced embedded systems training focused on RTOS-based development and practical firmware engineering.',
    highlights: [
      'Built hands-on fluency with embedded C, RTOS concepts, and low-level debugging.',
      'Strengthened system design skills for embedded product development.',
    ],
    coursework: ['RTOS', 'Embedded C', 'Firmware Debugging'],
    logoLabel: 'VI',
  },
  {
    school: 'Coimbatore Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Mechatronics, Robotics, and Automation Engineering',
    period: '2013 - 2017',
    location: 'Coimbatore, Tamil Nadu, India',
    summary: 'Built a strong foundation in control systems, embedded design, robotics, and practical automation engineering.',
    highlights: [
      'Capstone and lab-heavy coursework centered on sensors, control loops, and automation fundamentals.',
      'Hands-on development exposure spanning electronics integration and firmware problem-solving.',
      'Built discipline in system-level thinking across mechanical, electrical, and software interfaces.',
    ],
    coursework: ['Control Systems', 'Microcontrollers', 'Industrial Automation', 'Robotics', 'Instrumentation'],
    logoLabel: 'CIET',
  },
];

const timelineItems = educationList.map((edu) => ({
  key: edu.school + edu.period,
  logoLabel: edu.logoLabel,
  title: `${edu.degree}, ${edu.field}`,
  org: edu.school,
  period: edu.period,
  location: edu.location,
  summary: edu.summary,
  bullets: edu.highlights,
  tags: edu.coursework,
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

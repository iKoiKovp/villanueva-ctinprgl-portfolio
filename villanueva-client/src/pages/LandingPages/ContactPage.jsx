const contactDetails = [
  {
    label: 'Email',
    value: 'iko.vill@gmail.com',
    href: 'mailto:iko.vill@gmail.com',
    icon: '@',
  },
  {
    label: 'Phone',
    value: '0995 187 1101',
    href: 'tel:+639951871101',
    icon: '☎',
  },
  {
    label: 'Address',
    value: 'Purok 13 Unit 4, Brgy. Commonwealth, Quezon City, Metro Manila, Philippines',
    href: 'https://maps.google.com/?q=Purok+13+Unit+4+Commonwealth+Quezon+City+Metro+Manila+Philippines',
    icon: '⌖',
  },
];

export const ContactPage = () => {
  return (
    <div className="portfolio-page contact-page">
      <section className="contact-page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s create something meaningful.</h1>
        <p>
          I’m open to front-end development opportunities, project collaborations, and conversations about new ideas.
        </p>
      </section>

      <section className="section-shell contact-details-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Choose the way you want to connect.</h2>
          </div>
          <p>Use the contact details below to send an email, call me, or view the location.</p>
        </div>

        <div className="contact-details-grid">
          {contactDetails.map((detail) => (
            <a className="contact-detail-card" href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined} key={detail.label}>
              <span className="contact-detail-card__icon" aria-hidden="true">{detail.icon}</span>
              <p>{detail.label}</p>
              <strong>{detail.value}</strong>
              <span className="contact-detail-card__action">Open contact <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>

        <div className="contact-message">
          <p className="eyebrow">Send a message</p>
          <h2>Have a project in mind?</h2>
          <p>Start with an email and share the idea, timeline, or challenge you would like to discuss.</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

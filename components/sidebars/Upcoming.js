import Link from 'next/link';

export default () => (
  <Link href="/contact?message=Training enquiry">
    <a className="sidebar_section sidebar_section_green">
      <h6>Book Today</h6>
      <p>
        Get your team up to speed and book these workshops for your company,
        today.
      </p>
    </a>
  </Link>
);

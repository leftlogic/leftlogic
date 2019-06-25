import Link from 'next/link';

export default () => (
  <footer className="section">
    <div className="inner">
      <div className="copyright">
        <p>
          <strong>
            © 2006—{new Date().getFullYear()} Left Logic Ltd. All rights
            reserved.
          </strong>
        </p>
        <p>Registered Company No. 05926047</p>
        <p>VAT Registered: GB993126695</p>
      </div>
      <div className="contact">
        <p>
          <strong>
            <a href="mailto:info@leftlogic.com">info@leftlogic.com</a>
          </strong>
          <strong>+44 (0) 1273 557744</strong>
          <Link href="/privacy">
            <a>Privacy statement</a>
          </Link>
        </p>
        <p>
          <small>Call times: 9.30am - 5.30pm UK timezone</small>
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </footer>
);

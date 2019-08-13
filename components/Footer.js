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
          <Link href="/contact">
            <a>Email us</a>
          </Link>
          &nbsp;&bull;&nbsp;
          <Link href="/privacy">
            <a>Privacy statement</a>
          </Link>
        </p>
        <p>
          <small>Response times: 9.30am - 5.30pm UK timezone</small>
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </footer>
);

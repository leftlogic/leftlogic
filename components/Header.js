import Link from 'next/link';
import ActiveLink from './ActiveLink';

const menu = {
  Home: '/',
  Training: '/training',
  // 'Event Management': '/event-management',
  About: '/about',
  Contact: '/contact',
  // Contact: 'mailto:info@leftlogic.com',
};

const alt = {
  'Event Management': 'Event Mgt',
};

export default ({ heading = false }) => (
  <header>
    <div className="overlay section">
      <div className="inner">
        <Link href="/">
          <a className="logo">
            <img src="/static/img/logo.png" alt="Left Logic" />
          </a>
        </Link>
        <nav>
          <ul>
            {Object.entries(menu).map(([title, href]) => (
              <li key={title}>
                <ActiveLink activeClassName="selected" href={href}>
                  <a>
                    {alt[title] ? (
                      <>
                        <span className="narrow">{alt[title]}</span>
                        <span className="wide">{title}</span>
                      </>
                    ) : (
                      title
                    )}
                  </a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="clearfix" />
        {heading && (
          <div id="heading">
            <h1>{heading}</h1>
          </div>
        )}
      </div>
    </div>
  </header>
);

import { withRouter } from 'next/router';
import HomeLayout from './HomeLayout';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import WorkWithUs from './WorkWithUs';
import Newsletter from './sidebars/Newsletter';
import Terminal from './sidebars/Terminal';
import Upcoming from './sidebars/Upcoming';

const Sidebars = {
  Newsletter,
  Terminal,
  Upcoming,
};

// import ReactGA from 'react-ga';

const Layout = ({
  router,
  title = 'Left Logic',
  sidebars = [],
  heading,
  children,
}) => {
  const id = router.pathname.substring(1) || 'index';

  if (id === 'index') {
    return <HomeLayout {...{ children, title, heading }} />;
  }

  return (
    <div>
      <Head title={title} />
      <Header heading={heading} />
      <main id={`${id}-page`}>
        <div className="section">
          <div className="inner">
            <div id="content">{children}</div>
            <div id="sidebar">
              {sidebars
                .map(sidebar => {
                  if (typeof sidebar === 'string') {
                    return { Sidebar: Sidebars[sidebar], name: sidebar };
                  }
                  return { Sidebar: sidebar, name: 'Custom' };
                })
                .map(({ Sidebar, name }) => <Sidebar key={name} />)}
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <WorkWithUs />
        <Footer />
      </main>
    </div>
  );
};

export default withRouter(Layout);

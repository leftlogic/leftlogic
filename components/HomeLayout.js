import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import WorkWithUs from './WorkWithUs';

// import ReactGA from 'react-ga';

const HomeLayout = ({ title = 'Left Logic', heading, children }) => {
  return (
    <div>
      <Head title={title} />
      <Header heading={heading} />
      <div className="heading">
        <div className="heading_inner">Our Projects</div>
      </div>
      <main id="index-page">
        {children}
        <WorkWithUs />
        <Footer />
      </main>
    </div>
  );
};

export default HomeLayout;

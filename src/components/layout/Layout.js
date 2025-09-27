import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
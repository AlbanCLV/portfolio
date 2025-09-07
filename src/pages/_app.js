
import '../components/common/Navbar.module.scss';
import Navbar from '../components/common/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{
        paddingTop: '60px',
        background: '#121212',
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
        left: 0,
        right: 0
      }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

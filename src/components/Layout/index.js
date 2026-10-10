import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import './index.scss';
import AppFooter from '../AppFooter';

const Layout = () => (
  <div className="App">
    <div className="desktop-portfolio">
      <Sidebar />
      <div className="page"><Outlet /></div>
      <AppFooter />
    </div>
    <div className="mobile-portfolio">
      <main>
        <section id="mobile-home"><Home /></section>
        <section id="mobile-about"><h2 className="mobile-section-heading">About Me</h2><About /></section>
        <section id="mobile-projects"><h2 className="mobile-section-heading">Projects</h2><Projects /></section>
        <section id="mobile-contact"><Contact /></section>
      </main>
      <AppFooter />
    </div>
  </div>
);

export default Layout;

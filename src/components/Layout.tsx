import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Spotlight from './Spotlight';

export default function Layout() {
  return (
    <div className="app-shell relative min-h-screen overflow-x-hidden">
      <Spotlight />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

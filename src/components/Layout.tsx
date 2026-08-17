import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Spotlight from './Spotlight';
import Preloader from './Preloader';
import PixelClouds from './editorial/PixelClouds';
import PixelMascot from './editorial/PixelMascot';
import ScrollProgress from '../motion/ScrollProgress';
import { useIntroDelay } from '../hooks/useIntroDelay';

export default function Layout() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const introDelay = useIntroDelay();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell relative min-h-screen">
      <Preloader />
      <ScrollProgress />
      <Spotlight />
      <PixelClouds />
      {isHome ? <PixelMascot delay={introDelay + 0.35} scrollWalk /> : null}
      <div className="relative z-10">
        <Navigation />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }}
              transition={{ duration: reduced ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

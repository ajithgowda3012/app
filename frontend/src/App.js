import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Home from "@/pages/Home";
import SurfLessons from "@/pages/SurfLessons";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { initAnalytics, trackEvent } from "@/lib/analytics";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const lenis = window.__lenis;
    if (hash) {
      const timer = setTimeout(() => {
        if (lenis) lenis.scrollTo(hash, { offset: -88 });
        else document.querySelector(hash)?.scrollIntoView();
      }, 120);
      return () => clearTimeout(timer);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  useEffect(() => {
    trackEvent("page_view", { page_path: pathname });
  }, [pathname]);
  return null;
};

function App() {
  useSmoothScroll();
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/surf-lessons" element={<SurfLessons />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import { Routes, Route, useLocation } from 'react-router-dom';
import CaseStudyFWM from './components/CaseStudyFWM';
import CaseStudyWishlist from './components/CaseStudyWishlist';
import CaseStudyPlaylists from './components/CaseStudyPlaylists';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/flow-with-megmo" element={<CaseStudyFWM />} />
          <Route path="/wishlist" element={<CaseStudyWishlist />} />
          <Route path="/playlist-palette" element={<CaseStudyPlaylists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

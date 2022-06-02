import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import projectData from "./content/content";
import CaseStudy from "./components/CaseStudy";

function App() {
  const location = useLocation();

  const caseStudyRoutes = projectData.map((project) => {
    return (
      <Route
        key={project.caseStudyUrl}
        path={`/${project.caseStudyUrl}`}
        element={<CaseStudy project={project} />}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {caseStudyRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

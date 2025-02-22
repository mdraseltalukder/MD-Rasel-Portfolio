import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
// import Review from "./components/Review";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Footer from "./components/Footer";
import GsapAnimation from "./components/GsapAnimation";
const App = () => {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    if (showPage) {
      const tl = gsap.timeline();

      tl.from("#gsap", {
        opacity: 0,
        duration: 1,
      });
      tl.to("#gsap", {
        opacity: 1,
        duration: 1.5,
      });
      tl.to(".gsap-animation", {
        opacity: 0,
        delay: 3,
        duration: 1,
        onComplete: () => {
          setShowPage(false);
        },
      });

      return () => {
        tl.kill(); // Cleanup GSAP animations when component unmounts
      };
    }
  }, [showPage]);

  useEffect(() => {
    if (!showPage) {
      const htl = gsap.timeline();
      htl.fromTo(
        "#hero1",
        {
          opacity: 0,
          scale: 0,
          x: -200,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          x: 0,
          ease: "power2.out",
        }
      );
      htl.fromTo(
        "#hero2",
        {
          opacity: 0,
          scale: 1,
          x: 200,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );
      return () => {
        htl.kill();
      };
    }
  }, [showPage]);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <ExperienceSection />
        {/* <Review /> */}
        <Contact />
        <GsapAnimation showPage={showPage} setShowPage={setShowPage} />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;

// useGSAP(() => {
//     const elements = gsap.utils.toArray(".");

//     elements.forEach((element) => {
//       gsap.to(element, {
//         scrollTrigger: {
//           trigger: element,
//           start: "-100 bottom",
//           end: "bottom 80%",
//           scrub: true,
//           scale:0,
//         },
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//       });
//     });
//   });

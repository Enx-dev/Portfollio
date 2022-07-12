import {
  HeaderSection,
  SkillsSection,
  ProjectSection,
  ContactSection,
  Navbar,
  Footer,
} from "./Components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Animation from "./animation";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const end = () => {
    return "+=" + document.querySelector(".App").offsetWidth;
  };
  // useEffect(() => {
  //   gsap.utils.toArray(".section").forEach((section, i) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //     });
  //   });
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <Animation />
    </div>
  );
}

export default App;

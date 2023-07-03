import Navbar from "./components/navBar/navbar";
import Mainpage from "./components/mainPage/mainPage";
import SubHero from "./components/sub-hero-section/subHero";
import AppSection from "./components/app-section/app-section";
import QaSection from "./components/QAsection/question-section";

function App() {
  return (
    <>
      <Navbar />
      <Mainpage />
      <SubHero />
      <AppSection />
      <QaSection />
    </>
  );
}

export default App;

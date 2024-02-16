import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quanta from "./components/Quanta";
import QuantaServices from "./components/QuantaServices";
import OurServices from "./components/OurServices";
import AboutHbk from "./components/AboutHbk";
import Careers from "./components/Careers";
import News from "./components/News";
import JoinOurTeam from "./components/JoinOurTeam";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
        
        <Hero />
        <Quanta />
        <QuantaServices />
        <AboutHbk />
        <OurServices />
        <Careers />
        <JoinOurTeam />
        <News />
       
    </div>
  );
}

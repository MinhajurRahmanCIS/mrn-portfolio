import Banner from "../components/Home/Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Skills/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;
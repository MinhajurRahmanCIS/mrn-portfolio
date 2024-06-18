import my from "../../assets/mine.png";

const Banner = () => {
    return (
        <div id="home" className="hero bg-base-200 p-20">
            <div className="hero-content flex-col lg:flex-row">
            <img src={my} className="w-full lg:w-1/3 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi, I am Md. Minhajur Rahman</h1>
                    <p className="py-6 text-justify">A dedicated web developer currently in my final year at Daffodil International University. With a strong proficiency in the MERN stack (MongoDB, Express.js, React.js, and Node.js), I excel in creating dynamic and responsive web applications.
                        My journey in web development has been marked by a commitment to clean, maintainable code and delivering intuitive user experiences. I thrive on solving complex problems and continuously seek to expand my knowledge and skills in the ever-evolving tech landscape.</p>
                    <div className="flex justify-center sm:justify-start">
                    <a href="https://drive.google.com/file/d/1Srw0EJGD2FrpH5vBBwVNwlcUT_vO1Ncc/view" 
                    className="btn btn-neutral w-full sm:w-fit">Download Resume</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;

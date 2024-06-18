import p1 from "./../assets/p1.jpg";
import p2 from "./../assets/p2.jpeg";
import p3 from "./../assets/p3.jpeg";
import p4 from "./../assets/p4.jpeg";
import p5 from "./../assets/p5.jpeg";
const Projects = () => {
    return (
        <div id="projects" className="max-w-[1440px] mx-auto p-10">
            <h1 className="text-5xl text-center font-bold py-10">Projects</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card card-compact bg-base-100 shadow-xl border hover:bg-zinc-300 hover:text-black">
                    <figure><img className="h-[300px] w-full" src={p1} alt="Shoes" /></figure>
                    <div className="card-body mx-10">
                        <h2 className="card-title">The Adidas</h2>
                        <p>A Shoes Management Site</p>
                        <div className="card-actions justify-between">
                            <a href="https://the-adidas.web.app" className="btn btn-neutral">Live Site</a>
                            <a href="https://github.com/MinhajurRahmanCIS/the-adidas-client" className="btn btn-neutral">Githib Link</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border hover:bg-zinc-300 hover:text-black">
                    <figure><img className="h-[300px] w-full" src={p2} alt="Shoes" /></figure>
                    <div className="card-body mx-10">
                    <h2 className="card-title">Food Review</h2>
                    <p>Where You Can give food review!</p>
                        <div className="card-actions justify-between">
                            <a href="https://foodie-service-client.web.app" className="btn btn-neutral">Live Site</a>
                            <a href="https://github.com/MinhajurRahmanCIS/foodie-service-client-side" className="btn btn-neutral">Githib Link</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border hover:bg-zinc-300 hover:text-black">
                    <figure><img className="h-[300px] w-full" src={p3} alt="Shoes" /></figure>
                    <div className="card-body mx-10">
                    <h2 className="card-title">Coders</h2>
                    <p>This Course Buying Site. Where You Can buy courses</p>
                        <div className="card-actions justify-between">
                            <a href="https://coders-52ee5.web.app" className="btn btn-neutral">Live Site</a>
                            <a href="https://github.com/MinhajurRahmanCIS/coders-course-client-side" className="btn btn-neutral">Githib Link</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border hover:bg-zinc-300 hover:text-black">
                    <figure><img className="h-[300px] w-full" src={p4} alt="Shoes" /></figure>
                    <div className="card-body mx-10">
                    <h2 className="card-title">Coders</h2>
                    <p>This Course Buying Site. Where You Can buy courses</p>
                        <div className="card-actions justify-between">
                            <a href="https://luminous-puffpuff-e5bfd7.netlify.app/" className="btn btn-neutral">Live Site</a>
                            <a href="https://github.com/MinhajurRahmanCIS/Q-for-Quiz" className="btn btn-neutral">Githib Link</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border hover:bg-zinc-300 hover:text-black">
                    <figure><img className="h-[300px] w-full" src={p5} alt="Shoes" /></figure>
                    <div className="card-body mx-10">
                    <h2 className="card-title">Coders</h2>
                    <p>This Course Buying Site. Where You Can buy courses</p>
                        <div className="card-actions justify-between">
                            <a href="https://deluxe-pie-f234ed.netlify.app" className="btn btn-neutral">Live Site</a>
                            <a href="https://github.com/MinhajurRahmanCIS/first-react-project-ultra-active-club" className="btn btn-neutral">Githib Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

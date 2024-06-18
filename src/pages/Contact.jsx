import contact from "../assets/contact.png";
import linedIn from "../assets/linkedin.png";
import gitHub from "../assets/github.png";
import toast from "react-hot-toast";

const Contact = () => {

    const handelSendMail = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.success("Thanks For Your Valuable Message💖")
    };

    return (
        <div id="contact" className="bg-base-200 py-20">
            <div className="grid sm:grid-col-1 md:grid-col-2 max-w-[1440px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={contact} className="sm:w-3/4 md:w-1/2"/>
                    <form onSubmit={handelSendMail} className="card-body p-10">
                        <h1 className="text-5xl font-bold text-center">Contact</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                placeholder="Write Message"
                                name="message"
                                className="textarea textarea-bordered textarea-lg w-full"
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
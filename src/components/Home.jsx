import Card from "./Card"
import "./Home.css"

export default function Home(){
    return(
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h1>Innovative IT Solutions</h1>
                    <p>
                        We build modern software, web applications and
                        digital experiences that help businesses grow.
                    </p>
                    <button className="hero-btn">Get Started</button>
                </div>
            </section>


            {/* Jumbotron */}
            <section className="jumbotron">
                <h2>Welcome to Our IT Company</h2>
                <p>
                    We specialize in web development, cloud solutions,
                    enterprise software and digital transformation.
                    Our team delivers high-quality technology solutions
                    for startups and enterprises.
                </p>
            </section>


            {/* Services / Cards */}
            <section className="services">
                <h2>Our Services</h2>

                <div className="card-container">
                    <Card title="Web Development" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod modi minima enim quasi nemo, aut"></Card> <Card title="WEb Design" des=", harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card> <Card title = "Data Analysis" des="dummy , harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card>
                </div>
            </section>


            {/* Testimonials */}
            <section className="testimonials">

                <h2>What Our Clients Say</h2>

                <div className="testimonial-box">

                    <div className="testimonial">
                        <p>
                            "Amazing development team! They delivered our
                            project on time and exceeded expectations."
                        </p>
                        <h4>- Sarah Johnson</h4>
                    </div>

                    <div className="testimonial">
                        <p>
                            "Professional IT solutions with great support.
                            Highly recommended for startups."
                        </p>
                        <h4>- Michael Lee</h4>
                    </div>

                    <div className="testimonial">
                        <p>
                            "Their web development services helped our
                            business grow rapidly."
                        </p>
                        <h4>- David Brown</h4>
                    </div>

                </div>

            </section>

        </div>
    )
}
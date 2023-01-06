import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";
import { HiDownload } from "react-icons/hi";
import "./about.css";
const About = () => {
    return (
        <>
            <section id="about">
                <div className="container about_container">
                    <div className="about_left">
                        <div className="about_portrait">
                            <img src={AboutImage} alt="About Image" />
                        </div>
                    </div>
                    <div className="about_right">
                        <h2 style={{ textAlign: 'center' }}>About Me</h2>
                        <div className="about_cards">
                            {
                                data.map(item => {
                                    return (
                                        <>
                                       <Card key={item.id} className="about_card">
                                        <span className="about_cardicon">{item.icon}</span>
                                        <h5>{item.title}</h5>
                                        <small>{item.desc}</small>
                                    </Card>
                                        </>
                                    )
                                   
                                })
                            }

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.Ut enim ad minim veniam  et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.
                        </p>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <a href="#" download className='btn primary'>Download CV <HiDownload/></a>
                        </div>

                    </div>
                    
               </div>
        </section>
        </>
    );
}

export default About;
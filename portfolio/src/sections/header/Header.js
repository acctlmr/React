import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";
const Header = () => {
    
    return (
        <header id="header">
            <div className="container header_container">
                <div className="header_profile">
                    <img src={HeaderImage} alt="Header_portfolio"/>
                </div>
                <h3>John Doe</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et dolore magna aliqua.</p>
                <div className="header_cta">
                    <a href="#contact" style={{backgroundColor:"rgb(98, 177, 255)",color:"white",padding:"0.8rem",borderRadius:"1rem"}}>Let's Connect</a>
                    <a href="#portfolio" style={{ backgroundColor: "green",color:"white",padding:"0.8rem",borderRadius:"1rem" }}>My Work</a>
                </div>
                <div className="header_socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                    }

                </div>
           </div>
        </header>
    );
}

export default Header;
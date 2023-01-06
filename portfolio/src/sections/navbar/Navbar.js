import data from "./data";
import "./navbar.css";
const NavBar = () => {
    
    return (
        <>
            <nav>
                <div className="container nav_container">
                    <a href="index.html" className="nav_logo"></a>
                    <ul className="nav_menu">
                        {
                            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                        }
                    </ul>
                    <button></button>
                </div>
        </nav>
        </>
    );
}

export default NavBar;
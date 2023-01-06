import { links,socials } from './data';
import "./footer.css";
const Footer = () => {
    
    return (
        <>
            <footer>
                <div className='container footer'>
<ul className='nav_menu'>
    {
        links.map(mylink=>
        <li key={mylink.id}><a href={mylink.link}>{mylink.title}</a></li>)
    }

</ul>

<div className='footer_socials'>
    {
        socials.map(social=><a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
    }
</div>
                </div>

                <div>
                    <div className='footer_copyright'>
                        <small>2023 &copy; All Right Reserved.</small>
                    </div>
                </div>
            </footer>
        
        </>
    );
}

export default Footer;
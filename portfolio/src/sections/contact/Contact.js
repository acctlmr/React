import contacts from "./data";
import "./contact.css";
const Contact = () => {
    
    return (
        <>
            <section id="contact">
                <h2>Get in touch</h2>
                <p>
                    Contact with me via any of the links below
                </p>
                <div className="container contact_container">
                    {
                        contacts.map(contact=> <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
                    }
                </div>
            </section>
        </>
    );
}

export default Contact;
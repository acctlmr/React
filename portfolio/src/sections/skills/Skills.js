import data from "./data";
import Card from "../../components/Card";
import "./skills.css";

const Skills = () =>{
    return (
        <>
        <section id="skills">
            <h2>My Skills</h2>
            <div className="container skills_container">
            {
                data.map(item=>(
                    <Card key={item.id} className="skill">
                        <div className="skill_icon">{item.icon}</div>
                        <div className="skill_details">
                            <h4>{item.title}</h4>
                        </div>
                    </Card>
                ))
            }
            </div>
        </section>

        </>
    )
}
export default Skills;
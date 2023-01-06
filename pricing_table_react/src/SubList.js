import { useState,useEffect } from "react";
import Sub from "./Sub";
const SubList = () => {
    const [basic, setBasic] = useState(299.99);
    const [pro, setPro] = useState(359.99);
    const [master, setMaster] = useState(699.99);

    const [yearly, setYearly] = useState(false);

    const handleClick = () => {
        setYearly(!yearly);
    }

    //Calc Percentage 
    const calcPercentage = (num, per) => {
        return ((num * 12) / 100) * per;
    };

    useEffect(() => {
        if (yearly) {
            setBasic(calcPercentage(basic, 70).toFixed(0));
            setPro(calcPercentage(pro, 70).toFixed(0));
            setMaster(calcPercentage(master, 70).toFixed(0));
        } else {
            setBasic(299.99);
            setPro(359.99);
            setMaster(699.99);
        }

    }, [yearly]);


    return (
        <>
            <section className="main">
                <div className="container centerall">
                    <div className="title">
                        <h2>Pricing</h2>
                        <div className="--line"></div>

                        <div className="flexcenter my-2">
                            <p>Monthly</p>
                            <div className="mx-2">
                                <span className={yearly?"toggle-btn toggled":"toggle-btn"} onClick={handleClick}>
                                <div className={yearly?"ball move":"ball"}></div>
                                </span>
                            </div>
                            <p>Yearly</p>
                        </div>
                    </div>

                    <div className="sub-plans">
                        <Sub plan={"Basic"} price={basic} theme={"theme1"} isBasic={true} yearly={yearly} onBuy={()=>alert(basic)} />
                        <Sub plan={"Pro"} theme={"theme2"} price={pro} isPro={true} yearly={yearly} onBuy={()=>alert(pro)} />
                        <Sub plan={"Master"} theme={"theme3"} price={master} isMaster={true} yearly={yearly} onBuy={()=>alert(master)} />

                    </div>
                </div>
        </section>
        </>
    );
}

export default SubList;
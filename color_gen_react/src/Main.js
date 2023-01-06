import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

const Main = () => {
    
    const [color, setColor] = useState('');
    const [list, setList] = useState(new Values('#f14035').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        //setList(color);
        let colors = new Values(color).all(10);
        setList(colors);
        //console.log(list);
    }

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f14035' />
                    <button className="btn" type="submit">Submit</button>
                </form>
                
            </section>
            
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <>
                            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
                        </>
                )
            })}
            </section>
        </>
    );
}

export default Main;
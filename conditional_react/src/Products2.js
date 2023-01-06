import { useState } from 'react';

const Products2 = (props) => {
    
    const [items, setItems] = useState([
        { pCode: 1, pName: "Rice" },
        { pCode: 2, pName: "Apple" },
        { pCode: 3, pName: "Biscuits" },
        { pCode: 4, pName: "Oil" },
        { pCode: 5, pName: "Cabbage" }
        
    ]);

    return (
        
        props.isAdmin ? items.map((item) => {
            
            return (
                <li>{item.pName}</li>
            )
        })
            :
            <h1>No Data Found</h1>
        
    )
};

export default Products2;
import { useState } from 'react';

const Products3 = (props) => {
    
    const [items, setItems] = useState([
        { pCode: 1, pName: "Orange" },
        { pCode: 2, pName: "Apple" },
        { pCode: 3, pName: "Biscuits" },
        { pCode: 4, pName: "Oil" },
        { pCode: 5, pName: "Cabbage" }
        
    ]);

    const prodItems = (
        items.map((item) => {
        return (
            <li>{item.pName}</li>
        )
        })
    )
    return (
       // props.isAdmin?prodItems:<h1>No Data Found</h1>
        <div>
            <h1>Using Logical Operator</h1>
            {props.isAdmin && prodItems}
        </div>
    )
};

export default Products3;
import { useState } from 'react';

const Products4 = ({ isAdmin }) => {
    const [items, setItems] = useState([
        { pCode: 1, pName: "Orange" },
        { pCode: 2, pName: "Apple" },
        { pCode: 3, pName: "Biscuits" },
        { pCode: 4, pName: "Oil" },
        { pCode: 5, pName: "Cabbage" }
        
    ]);
    
    const prodItems = (items.map((item) => {
        return (
            <li>{item.pName}</li>
        )
    }));

    switch (isAdmin) {
        
        case true: return prodItems;
            break;
        case false: return <h1>No Data Found</h1>
            break;
        default: return null;
    }
};

export default Products4;
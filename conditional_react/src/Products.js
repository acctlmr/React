import { useState } from "react";

const Products = (props) => {
    
    const [items, setItems] = useState([
        { pCode: 1, pName: "Rice" },
        { pCode: 2, pName: "Apple" },
        { pCode: 3, pName: "Biscuits" },
        { pCode: 4, pName: "Oil" },
        { pCode: 5, pName: "Cabbage" }
        
    ]);

    if (props.isAdmin) {
        
        return (
            <>
                {items.map((item) => {
                    return (
                        <div key={item.pCode}>
                            <ul>
                                <li>{item.pName}</li>
                            </ul>
                            
                        </div>
                    )
                })}
            </>
        )
    } else {
        return (
            <>
                <h1>No Data Found</h1>
            </>
        )
    }


};

export default Products;
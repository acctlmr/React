const Categories = ({categories,filterItems}) => {
    
    const capitalize = (c) => {
        return c.charAt(0).toUpperCase() + c.slice(1);
    }
    return (
        <>
            <div className="flexcenter">
                {categories.map((category, index) => {
                    return (
                        <>
                            <button type="button" className="btn1" key={index} onClick={() => filterItems(category)}>

                                {/* {category.toUpperCase()} */}

                            {capitalize(category)}
                            
                            </button>
                        
                        </>
                    );
                })}
                
        </div>
        </>
    );
}

export default Categories;
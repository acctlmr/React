const Product = ({title,price,img}) => {
    
    return (
        <>
            <div className="product card">
                <img src={img} alt="product" />
                
                <div className="bgprimary centerall">
                    <h3 className="text-light">{title}</h3>

                    <div className="flex-between width100">
                        <p className="text-light">{price}</p>
                        <button href="#" className="btn btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Product;
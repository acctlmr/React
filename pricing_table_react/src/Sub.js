const Sub = ({plan,price,theme,yearly,isBasic,isPro,isMaster,onBuy}) => {
    
    return (
        <>
            <div className="price-box --card">
                <div className={`box --p2 ${theme}`}>
                    <p className="--text-light">{plan}</p>
                    <h4 className="--text-light">
                        <span>₹</span>
                        <span className="basic">{price}</span>
                        {yearly && (
                            <p className="--text-light">
                            <del>30% Off</del>
                        </p>

                        )}
                    </h4>
                </div>
                {isPro && (<p className="--text-light">Everything in Basic,plus</p>)}
                {isMaster && (<p className="--text-light">Everything in Pro,plus</p>)}

                <div className="features">
                    <ul>
                        {/* <h1>Basic Plan</h1> */}
                     {isBasic && (<li>Unlimited Pages</li>)}   
                      {isBasic && (<li>Unlimited Bandwidth</li>)}  
                       {isBasic && (<li>500GB Storage</li>)} 

                        {/* <h1>Pro Plan</h1> */}
                       {isPro && (<li>10 Backups</li>)}   
                       {isPro && (<li>Email Support</li>)} 
                        {isPro && (<li>GitHub Tool</li>)}

                         {/* <h1>Master Plan</h1> */}
                        {isMaster && (<li>20 Backups</li>)}
                        {isMaster && (<li>Push Notifications</li>)}
                        {isMaster && (<li>Priority Support</li>)}
                    </ul>
                     <button className={`btn ${theme}`} onClick={onBuy}>Buy Now</button>

                </div>
            </div>
        
        </>
    );
}

export default Sub;
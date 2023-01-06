const Book = ({img,title,author}) => {
    

    const clickHandler = (e) => {
        console.log(e.target);
        alert('Hello Event');
    }
    return (
        <>
        
            <article className="book" onMouseOver={() => { console.log(title); }}>
                <img src={img} />
                
                <h2 onClick={()=>console.log(title)}>{title}</h2>
                <h3>{author}</h3>
                <div className="btn">
                    <button type="button" onClick={clickHandler}>Click Here</button>
                </div>
                

        </article>
        </>
    )
}

export default Book;
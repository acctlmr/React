import { data } from "./books";
import SpecificBook from "./Book";
function BookList() {
    return (
        <>
            <section className="booklist">
                {data.map((book) => {
                    return (
                        <>
                          <SpecificBook key={book.id} {...book}></SpecificBook>
                        </>
                   )
               })} 
            </section>
        
        </>
    )
}

export default BookList;
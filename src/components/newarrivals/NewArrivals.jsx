import Cart from "./Cart";
import "./arrival.css"
function NewArrivals(){
    return(
        <>
        <section className="newArrivals"> 
            <div className="container">
                <div className="heading-arrivals">
                    <div className="arrLeft">
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                    <h2>New Arrivals </h2>
                    </div>
                    <div className="arrRight">
                    <span>View all</span>
                    <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>
                <Cart/>
            </div>
        </section>
        </>
    )
}
export default NewArrivals;
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./shop.css"
function Shop(){
    return(
        <>
        <section className="shop">
             <div className="container">
                <Catg/>
                <div className="contentWidth">
                    <div className="heading">
                        <div className="heading-left"><h2>Mobile Phones</h2></div>
                        <div className="heading-right">
                            <span>View all</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <div className="product-content">
                        <ShopCart/>
                    </div>
                </div>

             </div>
        </section>
        </>
    )
}
export default Shop;
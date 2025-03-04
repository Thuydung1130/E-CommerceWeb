import "./Top.css"
import TopCart from "./TopCart";
function TopCate(){
    return(
        <>
        <section className="topCate">
            <div className="container">
                <div className="heading">
                    <div className="heading_left">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h2>Top Categories</h2>
                    </div>
                    <div className="heading_right">
                        <p>View all</p>
                        <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>
                <TopCart/>
            </div>
        </section>
        </>
    )
}
export default TopCate;
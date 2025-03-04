import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/Shop/Shop";
import TopCate from "../components/Top/TopCate";
import "./page.css"
function Pages({productItems}){
    console.log(productItems);
    return(
        <>
        <Home/>
        <FlashDeals productItems={productItems}/>
        <TopCate/>
        <NewArrivals/>
        <Shop/>
        </>
    )
}
export default Pages;
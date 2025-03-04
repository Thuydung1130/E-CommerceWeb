import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import "./page.css"
function Pages({productItems}){
    console.log(productItems);
    return(
        <>
        <Home/>
        <FlashDeals productItems={productItems}/>
        </>
    )
}
export default Pages;
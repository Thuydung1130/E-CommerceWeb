import FlashCard from "./FlashCard";

function FlashDeals({productItems}) {
    //console.log(productItems);
    return (
        <>
            <section className="flash_background">
                <div className="container">
                    <div className="flash_head">
                        <i class="fa-solid fa-bolt"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard productItems={productItems}/>
                </div>
            </section>
        </>
    )
}
export default FlashDeals;
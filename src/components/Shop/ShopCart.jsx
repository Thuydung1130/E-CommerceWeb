
import Sdata from "./Sdata"
function ShopCart() {

    const { shopItems } = Sdata;
    console.log(shopItems);
    return (
        <>
            {shopItems.map((item, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="flash_box" key={index}>
                            <div className="flash_product">
                                <div className="pro_img">
                                    <span className="discount">{item.discount}% Off</span>
                                    <div className="img"><img src={item.cover} alt="" /></div>
                                    <div className="product_like">
                                        <label htmlFor="">0</label> <br />
                                        <i class="fa-regular fa-heart" ></i>
                                    </div>
                                </div>
                                <div className="product_details">
                                    <h3>{item.name}</h3>
                                    <div className="rate">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{item.price}.00</h4>
                                        <button>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default ShopCart
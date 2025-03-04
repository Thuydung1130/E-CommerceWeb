import { useState } from "react";
import Slider from "react-slick";
const PrevArrow =(props)=>{
    const {onClick}=props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
            <i class="fa-solid fa-arrow-left"></i>
            </button>
        </div>
    )
}
const NextArrow =(props)=>{
    const {onClick}=props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
            <i class="fa-solid fa-arrow-right"></i>
            
            </button>
        </div>
    )
}
function FlashCard({ productItems} ) {
    
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
    //console.log(productItems)
    return (
        <>
        <Slider {...settings}>
            {productItems&&productItems.map((productItem,index) => {
                return (
                    <>
                        <div className="flash_box" key={index}>
                            <div className="flash_product">
                                <div className="pro_img">
                                    <span className="discount">{productItem.discount}% Off</span>
                                    <div className="img"><img src={productItem.cover} alt="" /></div>
                                    <div className="product_like">
                                        <label htmlFor="">0</label> <br />
                                        <i class="fa-regular fa-heart" ></i>
                                    </div>
                                </div>
                                <div className="product_details">
                                    <h3>{productItem.name}</h3>
                                    <div className="rate">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{productItem.price}.00</h4>
                                        <button>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </Slider>
        </>
    )
}
export default FlashCard;
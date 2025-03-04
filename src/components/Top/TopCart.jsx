import Tdata from "./TData";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function TopCart(){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
    return(
        <>
        <Slider {...settings}>
            {Tdata.map((item,index)=>{
                return(
                    <>
                    <div className="product-top" key={index}>
                        <div className="name-top">
                            <span className="tleft">{item.para}</span>
                            <span className="tright">{item.desc}</span>
                        </div>
                        <div className="img">
                            <img src={item.cover} alt="" />
                        </div>
                    </div>
                    </>
                )
            })}
            </Slider>
        </>
    )
}
export default TopCart;
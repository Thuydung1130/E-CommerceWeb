import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SlideCard(){
    
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          appendDoys: (dots)=>{
            return <ul style={{margin: "0px"}}>{dots}</ul>
          }
        }
    return(
        <>
        <Slider {...settings}>
            {
                Sdata.map((item,index)=>{
                    return(
                        <>
                        <div className="boxSlide" key={index}>
                            <div className="contentLeft">
                                <h1 className="ctTitle">{item.title}</h1>
                                <p>{item.desc}</p>
                                <button>Visit Collections</button>
                            </div>
                            <div className="contentRight">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </Slider>
        </>
    )
}
export default SlideCard;
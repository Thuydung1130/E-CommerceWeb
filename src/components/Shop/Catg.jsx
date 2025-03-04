function Catg(){
    const data = [
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Apple",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Samasung",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Oppo",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Vivo",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Redimi",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Sony",
        },
      ]
    return(
        <>
            <div className="category">
                <div className="chead">
                    <h1 className="brands">Brands</h1>
                    <h1 className="shops">Shops</h1>
                </div>
                {data.map((item,index)=>{
                    return(
                        <div className="box" key={index}>
                            <img src={item.cateImg} alt="" />
                            <span>{item.cateName}</span>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}
export default Catg;
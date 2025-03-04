import Ndata from "./Ndata";
function Cart(){
    return(
        <>
        <div className="product">
            {Ndata.map((item,index)=>{
                return(
                    <div className="box" key={index}>
                        <div className="img">
                            <img src={item.cover} alt="" />
                        </div>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Cart;
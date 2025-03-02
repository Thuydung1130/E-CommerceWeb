function Head(){
    return(
        <>
            <div className="head">
                <div className="container">
                    <div className="head_contact">
                        <div className="head_phone">
                        <i class="fa-solid fa-phone"></i>
                        <label htmlFor="">+983 596 205</label>
                        </div>
                        <div className="head_email">
                        <i class="fa-solid fa-envelope"></i>
                        <label htmlFor="">Bonnik@gmail.com</label>
                        </div>

                    </div>
                    <div className="head_right">
                        <label htmlFor="">Theme FAQ's</label>
                        <label htmlFor="">Need help</label>
                        <div className="country">
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">EN</label>
                        </div>
                        <div className="country">
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">USD</label>
                        </div>
                    </div>
                </div>            
            </div>
        </>
    )
}
export default Head
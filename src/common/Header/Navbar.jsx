import { useState } from "react";
import {NavLink} from "react-router-dom";
function Navbar() {
    const [Menu,setMenu]=useState(true);
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="categrories">
                    <i class="fa-solid fa-cart-shopping cart"></i>
                        <p>Categories</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="navlink">
                        <ul className={Menu? "flex":"flex-none"}>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/pages">Pages</NavLink>
                            </li>
                            <li>
                            <NavLink to="/user">User Account</NavLink>
                            </li>
                            <li>
                            <NavLink to="/vendor">Vendor Account</NavLink>
                            </li>
                            <li>
                            <NavLink to="/track">Track My Order</NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <button onClick={()=>setMenu(!Menu)} className={Menu? "menu":"close"}>
                                {
                                    Menu? <><i class="fa-solid fa-bars "></i></> :<><i class="fa-solid fa-xmark"></i></>
                                }
                         </button>
                        </ul>
                        
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar
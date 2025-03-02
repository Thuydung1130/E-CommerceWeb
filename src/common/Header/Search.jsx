import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import Navbar from "./Navbar";
function Search() {
    return (
        <>
            <section className="search">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />

                    </div>
                    <div className="search_box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search and hit enter" />
                        <span>All Category</span>
                    </div>
                    <div className="icon">
                        <i class="fa-solid fa-user"></i>
                        <NavLink to="/cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>0</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Search;
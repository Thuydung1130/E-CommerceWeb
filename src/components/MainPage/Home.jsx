import Categories from "./Categories";
import SlideCard from "./SlideCard";
import "./Home.css"
import Slider from "./Slider";
function Home(){
    return(
        <>
        <section className="home">
            <div className="container">
                <Categories/>
                <Slider/>
            </div>
        </section>
        
        </>
    )
}
export default Home;

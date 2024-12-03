import ProductList from "../ProductList/ProductList";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="pt-2">
            <Hero></Hero>
            <ProductList></ProductList>
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet-async";
import ProductList from "../ProductList/ProductList";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="pt-2">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero></Hero>
      <ProductList></ProductList>
    </div>
  );
};

export default Home;

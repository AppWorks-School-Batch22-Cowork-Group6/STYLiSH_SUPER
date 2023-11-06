import Carousel from "./Carousel";
import FilterMenu from "./FilterMenu";
import Products from "./Products";
import SortMenu from "./SortMenu";

function Home() {
  return (
    <>
      <Carousel />
      <SortMenu />
      <FilterMenu />
      <Products />
    </>
  );
}

export default Home;

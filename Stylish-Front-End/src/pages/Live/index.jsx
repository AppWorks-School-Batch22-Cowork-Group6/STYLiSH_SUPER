import ProductList from "./ProductList";
import TestingStream from "./TestingStream";
import Video from "./Video";
import Wrapper from "./Wrapper";

const Live = () => {
  return (
    <>
      <Wrapper>
        <Video />
        <ProductList />
      </Wrapper>
      <TestingStream />
    </>
  );
};

export default Live;

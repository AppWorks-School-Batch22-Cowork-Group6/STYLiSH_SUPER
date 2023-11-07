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
      <div className="mx-auto flex w-[960px] flex-col items-center justify-center gap-3">
        <h1 className="mt-3 text-xl text-default">PoLien Testing</h1>
        <TestingStream />
      </div>
    </>
  );
};

export default Live;

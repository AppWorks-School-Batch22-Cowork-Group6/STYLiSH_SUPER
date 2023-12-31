import { useContext, useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
import ProductContext from "../../context/productContext";
import api from "../../utils/api";
import recommend from "../../utils/recommend";
import Recommend from "./Recommend";
import Button from "./Recommend/Button";
import Container from "./Recommend/Container";
import Heading from "./Recommend/Heading";
import Thumbnail from "./Recommend/Thumbnail";

function Products() {
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const sliderRef = useRef(null);
  const { urlToFetch } = useContext(ProductContext);
  const { jwtToken } = useContext(AuthContext);
  const initialSearchUrl = "https://www.joazen.website/api/products/search";

  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category") || "all";

  useEffect(() => {
    let nextPaging = 0;
    let isFetching = false;

    async function fetchProducts() {
      isFetching = true;
      setIsLoading(true);

      let response = "";

      if (urlToFetch && urlToFetch !== initialSearchUrl) {
        response = await api.getParticularProducts(urlToFetch, nextPaging);
      } else {
        response = keyword
          ? await api.searchProducts(keyword, nextPaging)
          : await api.getProducts(category, nextPaging);
      }

      if (nextPaging === 0) {
        setProducts(response.data);
      } else {
        setProducts((prev) => [...prev, ...response.data]);
      }
      nextPaging = response.next_paging;
      isFetching = false;

      setIsLoading(false);
    }

    async function scrollHandler() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 60
      ) {
        // const category = searchParams.get("category") || "all";
        // if (category === "all") return;
        if (!nextPaging) return;
        if (isFetching) return;

        fetchProducts();
      }
    }

    async function fetchRecommendation() {
      const response = await api.getRecommendation();
      setRecommendations(response.data);
    }

    fetchProducts();
    fetchRecommendation();

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [keyword, category, urlToFetch, jwtToken]);

  return (
    <Wrapper>
      {products.map(({ id, main_image, colors, title, price }, index) => {
        return (
          <Product key={id} to={`/products/${id}`} id={index}>
            <ProductImage src={main_image} />
            <ProductColors>
              {colors.map(({ code }, index, arr) => {
                if (index > 0) {
                  if (code === arr[index - 1].code) {
                    return;
                  }
                }
                return (
                  <ProductColor $colorCode={code} key={`${code}-${index}`} />
                );
              })}
            </ProductColors>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>TWD.{price}</ProductPrice>
          </Product>
        );
      })}
      {(category !== "all" || keyword) && (
        <Recommend isProductPage={false}>
          <Button
            position="left"
            onMoveToPrev={() => recommend.moveToPreviousSlide(sliderRef)}
          />
          <Heading text="大家都在買" />
          <Container ref={sliderRef}>
            {recommendations.map(({ main_image, colors, title, id }, index) => {
              return (
                <Thumbnail
                  key={index}
                  image={main_image}
                  colors={colors}
                  title={title}
                  id={id}
                />
              );
            })}
          </Container>
          <Button
            position="right"
            onMoveToNext={() => recommend.moveToNextSlide(sliderRef)}
          />
        </Recommend>
      )}
      {isLoading && <Loading type="spinningBubbles" color="#313538" />}
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 46px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 1279px) {
    padding: 15px 21px 6px;
  }
`;

const Product = styled(Link)`
  width: calc((100% - 120px) / 3);
  margin: 0 20px 50px;
  flex-shrink: 0;
  text-decoration: none;
  order: ${(props) => props.id};

  @media screen and (max-width: 1279px) {
    width: calc((100% - 12px) / 2);
    margin: 0 3px 24px;
  }
`;

const ProductImage = styled.img`
  width: 360px;
  height: 480px;
  object-fit: cover;
  vertical-align: middle;

  @media screen and (max-width: 1279px) {
    aspect-ratio: 3/4;
    width: 100%;
    height: unset;
  }
`;

const ProductColors = styled.div`
  margin-top: 20px;
  display: flex;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
  }
`;

const ProductColor = styled.div`
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px 1px #bbbbbb;
  border: 1px solid lightgray;
  background-color: ${(props) => props.$colorCode};

  @media screen and (max-width: 1279px) {
    width: 12px;
    height: 12px;
  }

  & + & {
    margin-left: 10px;

    @media screen and (max-width: 1279px) {
      margin-left: 6px;
    }
  }
`;

const ProductTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`;

const ProductPrice = styled.div`
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`;

const Loading = styled(ReactLoading)`
  margin: 0 auto;
`;

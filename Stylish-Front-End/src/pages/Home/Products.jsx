import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../utils/api';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0 46px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    padding: 15px 21px 6px;
  }
`;

const Product = styled(Link)`
  width: calc((100% - 120px) / 3);
  margin: 0 20px 50px;
  flex-shrink: 0;
  text-decoration: none;

  @media screen and (max-width: 1279px) {
    width: calc((100% - 12px) / 2);
    margin: 0 3px 24px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  vertical-align: middle;
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

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');
  const category = searchParams.get('category') || 'all';

  useEffect(() => {
    let nextPaging = 0;
    let isFetching = false;

    async function fetchProducts() {
      isFetching = true;
      setIsLoading(true);
      const response = keyword
        ? await api.searchProducts(keyword, nextPaging)
        : await api.getProducts(category, nextPaging);
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
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const category = searchParams.get('category') || 'all';
        if (category === 'all') return;
        if (nextPaging === undefined) return;
        if (isFetching) return;

        fetchProducts();
      }
    }

    fetchProducts();

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [keyword, category]);

  return (
    <Wrapper>
      { products.map(({ id, main_image, colors, title, price }, index) => {
        return (
          <>
            <Product key={ id } to={ `/products/${id}` }>
              <ProductImage src={ main_image } />
              <ProductColors>
                { colors.map(({ code }) => (
                  <ProductColor $colorCode={ `#${code}` } key={ code } />
                )) }
              </ProductColors>
              <ProductTitle>{ title }</ProductTitle>
              <ProductPrice>TWD.{ price }</ProductPrice>
            </Product>
            { index === (products.length / 2 - 2) &&
              <div className="w-full h-[200px] pt-2 px-3 pb-3 bg-gray-300 rounded-md mb-4 xl:hidden">
                <div className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  <span className="text-xl">大家都在買</span>
                </div>
              </div> }
          </>

        );
      }) }
      { isLoading && <Loading type="spinningBubbles" color="#313538" /> }
    </Wrapper>
  );
}

export default Products;

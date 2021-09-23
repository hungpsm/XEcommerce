import productAPI from "api/productAPI"; // use API from axios to fetchData
import Pagination from "components/PaginationBasic/PaginationBasic";
import ProductList from "components/ProductList/ProductList";
import React, { useEffect, useState } from "react";

import "components/Home/Home.scss"; // use Scss to design
import { ProgressBar } from "react-bootstrap";

function Home() {
  //Demo useState
  const [isLoading, setIsLoading] = useState("");
  const [productList, setProductList] = useState({ data: [] });
  const initialState = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
    { number: 6, active: false },
  ];

  const [pages, setPages] = useState([...initialState]);

  //Demo useEffect
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const pageIndex = pages.find((p) => p.active === true).number || 1;
        const params = {
          _page: pageIndex,
          _limit: 12,
        };

        const response = await productAPI.getAll(params);

        setProductList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    //Demo timeout for everyone. In production mode, remove setTimeout
    // setTimeout(() => {
    //   fetchProductList();
    // }, 3000);

    fetchProductList();

    //Demo scroll technique
    window.scrollTo(0, 0);

    return () => {
      console.log("Cleanup data");
    };
  }, [pages, isLoading]);

  //Demo props event from parent to child

  const handleOnChange = (e) => {
    setIsLoading(true);

    setPages(
      pages.map((page) =>
        page.number === e.number
          ? { ...page, active: true }
          : { ...page, active: false }
      )
    );
  };

  return (
    <div className="prod">
      {/* Demo isLoading to show progressBar  */}
      {isLoading && (
        <div>
          <ProgressBar animated now={99} />
          {/* <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> */}
        </div>
      )}

      {/* Demo props to children  */}
      <div className="product">
        <ProductList props={productList} />
      </div>

      {/* Demo pagination  */}

      <div className="product-pagination">
        <Pagination
          props={isLoading ? [] : pages}
          itemOnChange={handleOnChange}
          disabled={isLoading}
        ></Pagination>
      </div>
    </div>
  );
}

export default Home;

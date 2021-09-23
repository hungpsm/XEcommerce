import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationBasic(props) {
  const { props: pages } = { ...props };

  return (
    <div className="pagination">
      <Pagination>
        { (pages.length > 0) &&
          pages.map((page) => (
            <Pagination.Item
              key={page.number}
              active={page.active === true}
              onClick={() => props.itemOnChange(page)}
            >
              {page.number}
            </Pagination.Item>
          ))}
      </Pagination>
    </div>
  );
}

export default PaginationBasic;

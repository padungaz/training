import "./Pagination.scss";

function Pagination() {
  return (
    <div className="Pagination">
      <button className="Pagination__previous">{"<"}</button>
      <div className="Pagination__number">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button className="Pagination__next">{">"}</button>
    </div>
  );
}

export default Pagination;

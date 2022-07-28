import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <button className="footer__previous">{"<"}</button>
      <div className="footer__number">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button className="footer__next">{">"}</button>
    </div>
  );
}

export default Footer;

import React from "react";
import productStore from "../../stores/ProductStore";
import { observer } from "mobx-react";

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <button type="button" onClick={productStore.openModal}>
        Open Cart
      </button>
    </div>
  );
}

export default observer(Header);

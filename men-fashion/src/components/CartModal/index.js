import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@material-ui/core";
import productStore from "../../stores/ProductStore";
import { observer } from "mobx-react";

CartModal.propTypes = {};

function CartModal(props) {
  return (
    <div>
      <Modal
        open={productStore.openCartPopup}
        onClose={productStore.closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h2>This is modal</h2>
      </Modal>
    </div>
  );
}

export default observer(CartModal);

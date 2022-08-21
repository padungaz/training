import { makeAutoObservable } from "mobx";

class Products {
  openCartPopup = false;
  fetchCarts = false;

  constructor() {
    makeAutoObservable(this);
  }
  openModal = () => {
    this.openCartPopup = true;
  };

  closeModal = () => {
    this.openCartPopup = false;
  };

  reFetchCarts = () => {
    console.log("carts: ", this.fetchCarts);
    this.fetchCarts = !this.fetchCarts;
  };
}

const productStore = new Products();

export default productStore;

import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import CreateForm from "./components/CreateForm";

import "./App.css";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;

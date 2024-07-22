import { useEffect, useState } from "react";
import './App.css'
import { Product } from "./components/Product";
import axios, { AxiosError } from "axios";
import { IProduct } from "./models";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { Navigation } from "./components/Navigation";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function getProducts() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts();

  }, [])

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product)
  }
  return (
    <div className="conteiner">
      {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className="btn-add" onClick={()=>setModal(true)}>+</button>

      {products.map(product =>
        <Product product={product} key={product.id} />
      )}

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

    </div>
  );
}

export default App;

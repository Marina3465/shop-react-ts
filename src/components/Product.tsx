import { useState } from "react"
import { IProduct } from "../models"
import './Product.css'

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    return (
        <div className="conteiner-product">
            <center>
                <img src={product.image} alt="" />
            </center>
            <hr />
            <h2>{product.title}</h2>
            <p style={{ fontWeight: 700 }}>${product.price}</p>
            <button className="btn-show" onClick={() => setDetails(prev => !prev)}>{details ? 'Hide' : 'Show'} details</button>

            {details && <div>
                <p>{product.description}</p>
                <p>{product?.rating?.rate}</p>
            </div>}

        </div>
    )

}
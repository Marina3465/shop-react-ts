import { useState } from 'react';
import './CreateProducts.css'
import axios from 'axios';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const ProductData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 5,
        count: 50
    }
}

interface CreateProductProps{
    onCreate: (product: IProduct)=> void
}

export function CreateProduct({onCreate}: CreateProductProps) {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        ProductData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData);
        onCreate(response.data);
    }
    
    return (
        <form onSubmit={submitHandler} className='c-modal'>
            <input
                type="text"
                className="input-text"
                placeholder="Enter product title..."
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            {error && <ErrorMessage error={error} />}
            <button className='btn-create'>Create</button>
        </form>
    );
}



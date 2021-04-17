import React,{useState,useEffect} from 'react'
import { commerce } from './lib/commerce';
import {Products,Navbar,Cart} from "./components";
export const App = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts =async()=>{
        const {data} =await commerce.products.list();
        setProducts(data);
    }
    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[]);
    const fetchCart=async()=>{
        setCart(await commerce.cart.retrieve());
    }
    const HandleAddToCart=async(productId,quanitiy)=>{
        const item =await commerce.cart.add(productId,quanitiy);
        setCart(item.cart);
    }
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={HandleAddToCart}/> */}
            <Cart cart={cart}/>
        </div>
    )
}
export default App;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

const ProductDetail = () => {

  let dispatch = useDispatch();
  let params = useParams();

  let item = useSelector(
    (store)=>store.ProductSection.products
  ).find(
    (item)=>item.id === params.id
  );

  return ( <div style={{display:''}}>
    <h1 
      style={{  textAlign:'center'}}
    >
      Title = {item.title}
    </h1>

    <h1 
      style={{  textAlign:'center'}}
    >
      Price = {item.price}
    </h1>
    
    <img 
      src={item.img} 
      alt='..'
      style={{
        display:'block',
        margin:'auto',
        width:'200px'
      }}
    />
    <pre></pre>

    <button 
      style={{display:'block',margin:'auto',padding:'10px 20px',background:'black', color:'wheat', }}
      onClick={()=>{

        dispatch({
          type:'ADD_TO_CART',
          payload:item
        });
        toast.success("Item added to cart!");
      }}
    >
      Add to Cart
    </button>
    <br />
    <button
      style={{display:'block',margin:'auto',padding:'10px 20px',background:'black', color:'wheat', }}
    >
      <Link to='/checkout'>Checkout</Link>
    </button>
    <pre></pre>
    <pre></pre>
  </div>)
}

export default ProductDetail;
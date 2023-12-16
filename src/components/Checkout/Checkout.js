import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

let orders = useSelector(store=>store.ProductSection.orders);

let total = 0;

const  orderNow = ()=>{
    alert("yahan server ka coed ayega")
}

  return (
    <div>
        <table>
            {
                orders.map((item)=>{
                    total += item.price;
                    return <tr>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                })
            }
            <tr>
                <td>Bill Of All Items in The Cart</td>
                <td>{total}</td>
                <td>
                    <button onClick={orderNow}>
                        Order Now
                    </button>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Checkout
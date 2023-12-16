
import { useSelector } from 'react-redux';
import { Card } from '../card/card';

export const Home = () => {

    let productSection =  useSelector(
        (store) => store.ProductSection
    )

  return (
    <div  className='flex'>
        {
            productSection.products.filter( 
                (product)=>product.title.includes(productSection.searched) 
            ).map((product)=>{
                return <Card key={product.id} a1={product} />
            })
        }
    </div>
  )
}

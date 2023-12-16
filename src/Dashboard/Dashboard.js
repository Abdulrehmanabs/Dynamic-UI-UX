
import { useSelector} from 'react-redux';
import { Card } from '../components/card/card';


const Dashboard = () => {

  let user = useSelector(store => store.authSection.loggedUser);

  let productSection = useSelector(store => store.ProductSection);
  let userProducts = useSelector(
    store => store.ProductSection.products
  ).filter(
    product => product.owner === user.id
  );

  return (
    <div className='flex'>
      {
        userProducts.filter( 
          (product)=>product.title.includes(productSection.searched) 
        ).map((product) => {
          return <>
            <Card a1={product}></Card>
          </>
        })
      }
    </div>
  )
}

export default Dashboard
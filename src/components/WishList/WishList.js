
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../card/card';

export const WishList = () => {

    let dispatch = useDispatch();
    let products = useSelector(store => store.ProductSection.products);

    return (
        <div  className='flex'>
            {
                products.filter(product => product.liked).map((product) => {
                    return <Card a1={product}>
                        <button
                            onClick={(eve) => {
                                eve.preventDefault();

                                dispatch({
                                    type: "TOGGLE_LIKED_BTN",
                                    id: product.id
                                })
                            }}
                        >
                            Remove From WishList
                        </button>
                    </Card>
                })
            }
        </div>
    )
}

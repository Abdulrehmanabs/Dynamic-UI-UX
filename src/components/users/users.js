
import { useDispatch, useSelector } from 'react-redux'

export const Users = () => {

    let dispatch = useDispatch();
    let users = useSelector(store=>store.authSection).users

    let products = useSelector(store=>store.ProductSection).products

  return (
    <div>
        <table>
            {
                users.map((user)=>{

                    let cproducts =  products.filter(product=>product.owner === user.id);

                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.id}</td>
                        <td onClick={()=>{

                            dispatch({
                                type:"USER_DELETE",
                                payload:user.id,
                            });

                        }}>
                            <button>Delete</button>
                        </td>
                        <td>
                            <ul>
                                Products Of This User =
                                {
                                    
                                    cproducts.map((product)=>{
                                        return <li 
                                            style={{
                                                display:'inline',
                                                marginInline:'10px',
                                                border:'1px solid',
                                                paddingInline:'10px'
                                            }}>
                                            {product.title}
                                        </li>
                                    })
                                }
                                { cproducts[0] !== undefined ? 
                                    <span>{' '} ...</span> : 
                                    <span> {' '+ user.name } Does't Created Anything</span> 
                                }
                            </ul>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}


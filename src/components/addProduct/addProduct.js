
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';

import {toast} from 'react-toastify'
import { v4 } from 'uuid';

export const AddProduct = () => {

    let user = useSelector(store=>store.authSection.loggedUser);


    let {register, handleSubmit} = useForm();
    let dispatch = useDispatch();

    const addProduct = (data)=>{
        data.img = URL.createObjectURL(data.file[0]);
        data.id = v4();
        data.owner = user.id;

        dispatch({
            type:"ADD_PRODUCT",
            payload:data
        });

        toast.success("Product Created Of " + user.name );
    }

  return (
    <div>
        <form onSubmit={handleSubmit(addProduct)}>
            <input {...register('title')} type="text" /> <br/>
            <input {...register('price')} type="number" /> <br/>
            <input {...register('file')} type="file" /> <br/>
            <button>Create Product</button>
        </form>
    </div>
  )
}

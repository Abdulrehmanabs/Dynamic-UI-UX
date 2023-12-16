
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {toast} from 'react-toastify'
import { v4 } from 'uuid';

export const AddProduct = () => {

    let move = useNavigate();

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
        move('/dashboard')
    }

  return (
    <div>
        <form 
            onSubmit={handleSubmit(addProduct)}
            style={{margin:'auto',textAlign:'center'}}
        >
            <h1>Create Product's</h1>
            <input 
                {...register('title')} 
                type="text" 
                placeholder='Product Title'
                style={{margin:'auto',width:'30%'}}
            /> 
            <pre></pre>
            <input 
                {...register('price')} 
                type="number" 
                placeholder='Product Price' 
                style={{margin:'auto',width:'30%'}}/> 
            <pre></pre>
            <input 
                {...register('file')} 
                type="file" 
                style={{
                    cursor:'pointer'
                }}
            /> 
            <pre></pre>
            <button 
                type='submit'
                style={{
                    background:'black',
                    padding:'10px 20px',
                    cursor:'pointer',
                    fontSize:'1.5rem',
                    fontWeight:'600',
                    borderRadius:'10px',
                    color:'wheat'
                }}
            >Create Product</button>
        </form>
    </div>
  )
}

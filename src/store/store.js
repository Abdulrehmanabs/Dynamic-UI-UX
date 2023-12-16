
import { createStore, combineReducers } from "redux";
import { v4  } from 'uuid';

let initialProducts = {
    orders:[],
    searched:'',
    products:[
    {
        id:v4(),
        owner: 'ID>abs@gmail-14354f4-4575-4ef0',
        title:"Hoodie",
        img:"https://static-01.daraz.pk/p/f46450927140f42aa46f47a35a1b254c.png_300x0q75.webp",
        price:2500
    },
    {
        id:v4(),
        owner: 'ID>abs@gmail-14354f4-4575-4ef0',
        title:"Zipper",
        img:"https://static-01.daraz.pk/p/7aaaefa6f26cd6ec95d1e076ef2a48ff.jpg_300x0q75.webp",
        price:1250
    },
    {
        id:v4(),
        owner: 'ID>abs@gmail-14354f4-4575-4ef0',
        title:"Pant",
        img:"https://static-01.daraz.pk/p/8edd441f3566c98f0a527ce2cd396e4d.jpg_300x0q75.webp",
        price:640
    },
    {
        id:v4(),
        owner: 'ID>abs@gmail-14354f4-4575-4ef0',
        title:"Zipper Hoodies",
        img:"https://static-01.daraz.pk/p/11fbc59331f01f27d41e7f695d7abd1a.png_300x0q75.webp",
        price:4599
    },
]
};

function ProductSection(olData = initialProducts, newData){

    try{
        olData = {
            ...olData,
            products:[...olData.products]
        };

        if(newData.type === 'ADD_PRODUCT'){
            olData.products.push(newData.payload);
        }else if(newData.type === 'SEARCH_PRODUCT'){
            olData.searched = newData.payload;
        }else if(newData.type === 'TOGGLE_LIKED_BTN'){
            
            let item = olData.products.find(product=>product.id === newData.id);
            item.liked = !item.liked;
            
        }else if(newData.type === 'ADD_TO_CART'){
            olData.orders.push(newData.payload);
        }
    }catch(errror){
        console.log(errror.message)
    }

    return olData;
}

let initialAuthData = {
    users:[
        {
            name:'abs@gmail.com',
            password:'abs@gmail',
            id: 'ID>abs@gmail-14354f4-4575-4ef0', 
            // it will create random id 
            // necause of this id cannot be matched in dashbord 
            // id shoud be same
        }
    ],
    loggedUser:null,
}

function authSection( olData=initialAuthData, newData){
    olData = {...olData};

    if(newData.type === 'USER_CREATED'){
        olData.users.push(newData.payload);
    }else if(newData.type === 'USER_LOGIN_HOGYA'){
        olData.loggedUser = newData.payload;
    }else if(newData.type === 'USER_LOGGED_OUT'){
        olData.loggedUser = null;
    }else if(newData.type === 'USER_DELETE'){
        
        let userDel = olData.users.findIndex((user)=> user.id === newData.payload);
        if(userDel !== -1){
            olData.users.splice(userDel, 1);
        }
    }

    return olData;
}

let allSections = combineReducers({ProductSection, authSection})
export let store = createStore(allSections);
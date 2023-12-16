
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export const Header = () => {

  let dispatch = useDispatch();
  let sendData = useDispatch();
  let loggedUser = useSelector(store => store.authSection.loggedUser);

  return (
    <nav>
      <div className="nav-wrapper">
        
        <Link to='/' className="brand-logo" style={{marginLeft:'20px'}}>
          ABS
        </Link>
        
        {loggedUser ? 
          <span className='logo-name hide-on-med-and-down' style={{marginLeft:'100px'}}>
            Welcome, <strong><b>{loggedUser.name} </b></strong> 
          </span> 
        : null}
        
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        
          <li>
            <form onSubmit={(eve)=>eve.preventDefault()}>
              <input type='search' id='search'  style={{width:'min-content'}} />
              <label 
                htmlFor='search'
                style={{cursor:'pointer'}}
                onClick={(evt) => {
                  sendData({
                    type: "SEARCH_PRODUCT",
                    payload: document.getElementById('search').value
                    // payload: evt.target.value
                  })
                }} 
              >
                <button type='submit'>Search</button>
              </label>
            </form>
          </li>

          <li>
            <Link to='/wishlist'>Wishlist</Link>
          </li>

          {!loggedUser ?
            <li>
              <Link to='/login'
                onClick={() => { M.Modal.init(document.getElementById('modal1'), {}).open() }}
              >Login</Link>
            </li>
            : null}

          {!loggedUser ?
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          : null}

          {loggedUser ?
            <li>
              <Link to='/add-product'>Add Product</Link>
            </li>
          : null}

          {loggedUser ?
            <li>
              <Link to='/users'>Users</Link>
            </li>
          : null}

          {loggedUser ?
            <li>
              <Link onClick={() => {
                dispatch({
                  type: "USER_LOGGED_OUT"
                })
              }} to='/'>Logout</Link>
            </li>
          : null }

        </ul>
      </div>
    </nav>

  )
}

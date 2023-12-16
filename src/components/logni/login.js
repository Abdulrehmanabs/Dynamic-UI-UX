
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css'

export const Login = () => {

  let move = useNavigate();

  let users = useSelector(store => store.authSection.users);
  let products = useSelector(store => store.ProductSection.products);

  let dispatch = useDispatch();
  let { register, handleSubmit } = useForm();

  const saveUser = (data) => {
    let userMilgya = users.find(
      (user) => user.name === data.name && user.password === data.password
    )

    let productMilgya = products.find(
      (item) => item.owner
    )

    if (userMilgya && productMilgya) {
      move('/dashboard');
      dispatch({
        type: "USER_LOGIN_HOGYA",
        payload: userMilgya
      })
    }else{
      move('/');
      alert('Please First SignUp Then Login to Get Access for Dashboard');
    }
    console.log(data);
  }

  return (
    <main className='modal' id='modal1'>
      <center>
        <div className="section" />
        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section" />
        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE"
            }}
          >
            <form onSubmit={handleSubmit(saveUser)} className="col s12" method="post">
              <div className="row">
                <div className="col s12"></div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    {...register('name')}
                    className="validate"
                    type="email"
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    {...register('password')}
                  />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <label style={{ float: "right" }}>
                  <Link className="pink-text" to="/">
                    <b>Forgot Password?</b>
                  </Link>
                </label>
              </div>
              <br />
              <center>
                <div className="row">
                  <button
                    onClick={() => { M.Modal.init(document.getElementById('modal1'), {}).close() }}
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  >
                    Login
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <Link to="/signup">Create Account</Link>
      </center>
      <div className="section" />
      <div className="section" />
    </main>

  )
}

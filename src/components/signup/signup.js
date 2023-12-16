
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { v4 } from 'uuid';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

  let dispatch = useDispatch();
  let move = useNavigate()
  let { register, handleSubmit } = useForm();

  const saveUser = (data) => {

    data.id = v4();
    dispatch({
      type: "USER_CREATED",
      payload: data
    })
    console.log(data);
    move('/')
    M.Modal.init(document.getElementById('modal1'), {}).open()

  }

  return (
    <main>
      <center>
        <div className="section" />
        <h5 className="indigo-text">Please, SignUp For Advance Features</h5>
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
            <form onSubmit={handleSubmit(saveUser)} className="col s12">
              {/* <div className="row">
            <div className="col s12"></div>
          </div> */}
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
              </div>
              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  >
                    Sign Up
                  </button>
                </div>
              </center>

            </form>
          </div>
        </div>
      </center>
      <div className="section" />
      <div className="section" />
    </main>

  )
}

import AuthLayout from '../../layouts/AuthLayout'
import { NavLink } from 'react-router-dom'
import MailImg from '../../../assets/images/mail.png'
import LockImg from "../../../assets/images/lock.png";

const Login = () => {
  return (
    <AuthLayout title='Login'>
        <div className='mt-5'>
            <form className='row'>
                <div className="col-12 mb-4">
                    <div className='w-100 inp-group d-flex align-items-center'>
                        <img src={MailImg} alt="" />
                        <input type="email" placeholder='Email' />
                    </div>
                </div>
                <div className="col-12">
                    <div className='w-100 inp-group d-flex align-items-center'>
                        <img src={LockImg} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-between mt-2 mb-5">
                    <div className=''>
                        <input type="checkbox" name="" id="" />
                        <label className='rem-label ms-2'>Remember me</label>
                    </div>
                    <NavLink className='forgot-link' to="/">Forgot Password?</NavLink>
                </div>
                <div className="col-12">
                    <button className='w-100 auth-btn'>Login</button>
                </div>
            </form>
            <div className='mt-5 text-center auth-form-footer'>
                <p>Don't have an account yet? <NavLink to="/signup">Sign Up</NavLink></p>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Login
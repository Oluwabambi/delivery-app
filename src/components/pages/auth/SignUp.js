import AuthLayout from '../../layouts/AuthLayout';
import { NavLink } from "react-router-dom";
import MailImg from "../../../assets/images/mail.png";
import LockImg from "../../../assets/images/lock.png";

const SignUp = () => {
  return (
    <AuthLayout title='Signup'>
        <div className='mt-5'>
            <form className='row'>
              <div className="col-12 mb-4">
                    <div className='w-100 inp-group d-flex align-items-center'>
                        <img src={MailImg} alt="" />
                        <input type="email" placeholder='Email' />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <div className='w-100 inp-group d-flex align-items-center'>
                        <img src={LockImg} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <div className='w-100 inp-group d-flex align-items-center'>
                        <img src={LockImg} alt="" />
                        <input type="password" placeholder='Confirm password' />
                    </div>
                </div>
                <div className="col-12 mt-2 mb-3 d-flex">
                  <input type="checkbox" name="" id="" />
                  <label className='sign-label ms-2'>Creating an account means you agree to the <NavLink>Terms and Conditions</NavLink> and our <NavLink>Privacy Policy</NavLink></label>
                </div>
                <div className="col-12">
                    <button className='w-100 auth-btn'>Sign up</button>
                </div>
            </form>
            <div className='mt-3 text-center auth-form-footer'>
                <p>Already have an account <NavLink to="/login">Log in</NavLink></p>
            </div>
        </div>
    </AuthLayout>
  )
}

export default SignUp
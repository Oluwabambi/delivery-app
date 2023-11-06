import AuthImg from '../../assets/images/logo.png';

const AuthLayout = ({ children, title }) => {
  return (
    <div className='auth-contain'>
        <div className="auth-form d-flex justify-content-center">
            <div className='auth-form-content'>
                <div className="auth-form-head d-flex flex-column align-items-center">
                    <img src={AuthImg} alt="" />
                    <h3>{title === 'Login' ? "Welcome" : "Get Started"}</h3>
                    <div className='d-flex align-items-center mt-4 w-100'>
                        <span className='auth-form-line'></span>
                        <p className='auth-form-title mb-0'>{title === 'Login' ? "Login to access your dashboard" : "Sign up to create an account"}</p>
                        <span className='auth-form-line'></span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout
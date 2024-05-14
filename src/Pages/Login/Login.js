import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Title/useTitle';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { login, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    useTitle("Login");

    const handleLogin = (data) => {
        login(data.email, data.password)
            .then(result => {
                alert("Login Successful");
                navigate(from, { replace: true });
                reset();
            })
            .catch(error => {
                alert(error.message)
            })
    }

    const handleGoogleLogIn = () =>{
        signInWithGoogle(googleProvider)
        .then((result) => {
            navigate(from, { replace: true });
        })
        .catch((error) => {
            alert(error);
        });
    }

    return (
        <div className="hero bg-base-200 pb-10 lg:pb-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/j40tgwp/Mobile-login-bro-1.png" alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <p className='text-3xl text-center font-semibold'>Login</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} required />
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>
                            <input className='btn btn-outline w-full max-w-xs my-3' type="submit" value="Login" />
                            <p>Don't have any account? <Link className='text-primary underline' to="/register">Register here</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex justify-center text-3xl'>
                            <button onClick={handleGoogleLogIn} className='mr-5'><FcGoogle /></button>
                            <button><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Title/useTitle';

const Register = () => {

    const { createUser, updateUser, signInWithGoogle, signInWithFb } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    useTitle("Register");


    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                updateUser({
                    displayName: data.name
                })
                    .then(() => {
                        window.location.pathname="/"
                    })
                    .catch(err => alert(err))
                alert("Registration successful");
                reset();
            })
            .catch(err => alert(err))
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle(googleProvider)
        .then(() => {
            window.location.pathname="/"
        })
        .catch((error) => {
            alert(error);
        });
    }

    return (
        <div className="hero bg-base-200 pb-10 lg:pb-0">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/Tt1jRmh/Mobile-login-pana-1.png" alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <p className='text-3xl text-center font-semibold'>Register</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" {...register("name")} />

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} required />
                            <input className='btn btn-outline btn-success w-full max-w-xs my-3' type="submit" value="Register" />
                            <p>Already have any account? <Link className='text-primary underline' to="/login">Please Login</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex justify-center text-3xl'>
                            <button onClick={handleGoogleSignIn} className='mr-5'><FcGoogle /></button>
                            <button><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; 
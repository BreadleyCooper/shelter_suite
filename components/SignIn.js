import React from "react";

export default function SignIn() {
    return (
        <div className="signInContainer flex justify-center items-center min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl max-h-fit">
                
                <div className="card-body items-center text-center">
                <h2 className="card-title">Welcome to Shelter Suite.</h2>

                    <h2 className="card-title font-bold">Sign in to your account:</h2>
                    {/* Email Address Input */}
                    <form className="min-w-full flex flex-col items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            
                        </div>
                        {/* Password Input */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary my-5 justify-self-center">Sign In</button>
                        </div>
                    </form>
                    <a className="font-normal hover:font-bold" href="">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}
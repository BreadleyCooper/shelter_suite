import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebaseConfig"
import { useRouter } from "next/router";

export default function SignIn() {

    const router = useRouter()

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [signInError, setSignInError] = React.useState("")

    const auth = getAuth(app)
    
    const signInEmailPassword = async (event) => {
        event.preventDefault()
        try{const userCredential = await signInWithEmailAndPassword(auth, email, password)
            router.push("/index")

        }
    catch(error){
        console.log(error, "ERROR CODE =>", error.code)
        setSignInError(error.code)
    }
}
        

    


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
                            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            
                        </div>
                        {/* Password Input */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* Conditional rendering of error message */}
                        {signInError === "auth/wrong-password" && (
                            <p className="text-red-500 text-sm">Wrong Email or Password</p>
                        )}
                        <div className="card-actions">
                            <button onClick={signInEmailPassword} className="btn btn-primary my-5 justify-self-center">Sign In</button>
                        </div>
                    </form>
                    <a className="font-normal hover:font-bold" href="">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import callApi from "./CallApi"
import Loading from "./Loading"
import { Helmet } from "react-helmet"
import CallApi from "./CallApi"

export default function Login(props) {
    

    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState({
        id: "",
        message: ""
    })
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const submitLogin = () => {
        if (credentials.email.split("@").length !== 2) {
            setFormError({
                id: "email",
                message: "Enter a valid email"
            })
            return
            
        } else if (credentials.password.length < 1) {
            setFormError({
                id: "password",
                message: "Enter your password"
            })
            return
        }

        setLoading(true)
        callApi("/login", "POST", credentials).then((res) => {
            if (res.message === "user does not exist") {
                window.location.replace("/signup")
            } else if (res.message === "invalid password") {
                setFormError({
                    id: "password",
                    message: "Invalid password"
                })
            } else if (res.message === "invalid request") {
                setFormError({
                    id: "password",
                    message: "Try again later"
                })
            } else if (res.code === "ok") {
                window.location.replace("/main")

            } else {
                setFormError({
                    id: "password",
                    message: "Try again later"
                })
            }
            setLoading(false)
        })





    }







    return (
        <>

        <section className="relative">
        {(loading) && (
            <Loading />
        )}
        <Navbar />



<div className="hero w-full min-h-[80vh]">

    <div className="hero-content">

        <div className="border-2 px-8 py-10 border-base-300">
            <p className="font-1 text-2xl font-bold">Login</p>


            <div className="mt-4 p-2 bg-base-300 font-3 font-semibold flex flex-col gap-2">
                <div>

                <input id="email" maxLength="100" value={credentials.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})} className="input input-lg input-neutral" placeholder="Email:" />
                {(formError.id === "email") && (
                            <p className="text-error font-3">{formError.message}</p>
                        )}
                </div>
                <div>
                <input id="password" type="password" maxLength="20" value={credentials.password} className="input input-neutral input-lg" placeholder="Password:" onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
                
                {(formError.id === "password") && (
                            <p className="text-error font-3">{formError.message}</p>
                        )}
                </div>
                
                <div className="btn btn-primary btn-lg" onClick={submitLogin}>
                    <p className="text-lg">Log In</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
<path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>

                </div>
            </div>
            <div className="text-center font-1">
                <a className="link" href="/forgotPassword">Forgot Password</a>
                <div className="mt-4 text-center">
                <p className="">Don't have an account?</p>
                <a className="link" href="/signup">Signup</a>
                </div>
                
            </div>
           




        </div>

    </div>



</div>

<div className="bg-base-300">
    <Footer />
</div>


        </section>
       








        </>
    )
}
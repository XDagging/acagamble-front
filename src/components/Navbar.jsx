import React from "react"
import { FaBars } from "react-icons/fa";



export default function Navbar(props) {





    return (
        
        <>


        <div className="navbar sticky top-0 left-0 w-full p-5 bg-base-300 z-10 border-b-2 border-base-100" data-theme="forest">
            <div className="flex-1">
                <a href="/" className="btn btn-primary btn-ghost btn-lg">
                    <p className="font-1 text-4xl font-bold flex flex-row items-center gap-2">AcaGamble</p>
                </a>
               
            </div>

            <div className="flex-0 sm:block hidden">
                <div className="w-full font-3 text-2xl flex flex-row gap-4 items-center justify-items-center"> 
                    {/* <div className="btn btn-ghost">
                        <p>About us</p>
                    </div> */}
                    <a className="btn btn-ghost" href="/terms">
                        <p className="font-bold text-lg">Terms of Service</p>
                    </a>
                    <a href="/privacy" className="btn btn-ghost">
                        <p className="font-bold text-lg">Privacy Policy</p>
                    </a>

                    
                    <a href="/login" className="btn btn-primary font-1 text-lg btn-outline">
                        <p>Login</p>
                    </a>
                    <a href="/signup" className="btn btn-accent font-1 text-lg">
                        <p>Signup</p>
                    </a>
            
                 
                    
                </div>
            </div>

            <div className="flex-0 sm:hidden block">
                <div class="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex="0" role="button" class="btn m-1"><FaBars /></div>
                        <ul tabIndex="0" class="dropdown-content gap-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {/* <li className=""><a className="font-2 font-bold">About Us</a></li> */}
                            {/* <li className=""><a className="font-2 font-bold">What we do</a></li> */}
                            {/* <li className=""><a className="font-2 font-bold">Pricing</a></li> */}

                            <li className=""><a href="/login" className="font-1 font-bold   hover:bg-primary  border-2 border-primary">Login</a></li>
                            <li className=""><a href="/signup" className="font-1 font-bold   hover:bg-accent border-2 border-accent">Signup</a></li>
                        </ul>
                    </div>
            </div>
        </div>



        




        </>
    )
}



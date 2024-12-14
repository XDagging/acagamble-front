import React, {useState} from "react";
import Navbar from "./Navbar"
import Loading from "./Loading"
import CallApi from "./CallApi"

export default function Signup(props) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")

    const [studentId, setStudentId] = useState('')
    const [password, setPassword] = useState("")

    const makeUser = () => {
        setLoading(true)
        CallApi("/signup","POST", {
            email: email,
            password: password,
            studentId: studentId,
        }).then((res) => {
            window.location.replace("/main")
        })



    }

    return (
        <>

        <Navbar />
        {(loading) && (
            <Loading />
        )}

        <div className="hero min-h-[50vh]">

            <div className="hero-content">

                <div className="p-4 bg-base-300 rounded-sm min-w-96 h-full"> 
                    <div>
                    <h3 className="text-lg text-center">Make your AcaGamble Account</h3>
                    
                    
                    <div className="mt-4 bg-base-100 join join-vertical w-full p-1 rounded-lg gap-1">
                    <input placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="input-lg text-center border-2 rounded-lg input-primary input-md font-bold join-item" >

</input>
                        <input placeholder="Student ID:" value={studentId} onChange={(e) => {setStudentId(e.target.value)}} className="input-lg text-center border-2 rounded-lg input-neutral input-md font-bold join-item" >

                        </input>
                        <input placeholder="Student Password:" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="input-lg text-center border-2 input-neutral input-md font-bold join-item" >

                        </input>

                        <button className="btn btn-lg btn-primary rounded-t-none" onClick={makeUser}>
                            Create Account
                        </button>
                        
                        



                    </div>
                    </div>

                    <div className="text-center text-sm">   

                        Forgot Password? 

                        
                    </div>
                    
                     
                </div>
            </div>
            
            


            




        </div>
        
        
        </>

    )
}
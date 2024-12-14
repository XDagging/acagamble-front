import React, {useContext, useState} from "react";
import {UserContext} from "./Contexts"



export default function Bet(props) {

    const currentUser = useContext(UserContext)
    const [period, setPeriod] = useState(1);
    const [grade, setGrade] = useState("A")
    const [wagerAmount, setWagerAmount] = useState(0)

    return (

        <>
        
        
        <div className="">
            <div className="m-2 p-3 rounded-lg bg-base-300">
                <p className="font-1 font-bold text-2xl">Create your bet</p>
            </div>



           
            <div className="m-2 p-3 rounded-lg bg-base-200 flex flex-col gap-2">
                <div className="bg-base-100 p-4 text-left">

                    <p className="font-1">What period is the class you want to gamble on?</p>
                    <select value={period} onChange={(e) => setPeriod(e.target.value)} className="select select-primary mt-2 font-1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>




                </div>
                <div className="bg-base-100 p-4 text-left">

                    <p className="font-1">Grade you want to gamble to:</p>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)} className="select select-primary mt-2 font-1">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
                <div className="bg-base-100 p-4 text-left">

                    <p className="font-1">Token Wager Amount:</p>
                    <p className="font-2 text-sm text-error">You have {currentUser.tokens} tokens</p>
                    <input value={wagerAmount} onChange={(e) => setWagerAmount(e.target.value)} className="input input-primary mt-2" placeholder="400" max={currentUser.tokens} maxLength={currentUser.tokens.length} />
                </div>
                <div className="ml-2 mr-auto">
                    <button className="btn font-2 btn-primary">
                        Create Wager 
                    </button>
                </div>


            </div>
        </div>
        
        
        
        </>
    )
}
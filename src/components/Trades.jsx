import React, {useContext} from "react";
import {UserContext} from "./Contexts";







export default function Trades(props) {

    const currentUser = useContext(UserContext)
    const betOffers = currentUser.bets




    return (

        <>
            <div className="m-2 p-3 rounded-lg bg-base-300">
                    <p className="font-1 font-bold text-2xl">Manage Previous Bets</p>
                    
                </div>



            <div className="m-2 p-2 rounded-lg bg-base-200">

            <div className="min-h-[50vh] m-2 rounded-lg bg-base-300 grid grid-cols-3 items-center justify-items-center gap-2 p-2">
                    {betOffers.map((item,i) => (
                        <div key={i} className="bg-neutral w-full h-full rounded-md relative">

                            
                            <div className="w-full p-4 bg-base-100">
                            </div>

                            <div className="p-4 text-left font-1">
                                
                                <p className="font-1 text-lg">{item.name}</p>
                                <p>GPA: {item.gpa}</p>
                                <p>Current Percentage: {item.gamble.currentPercentage}</p>
                                <p>School: {item.school}</p>
                                
                                
                                
                                
                                <div className="bg-base-300 p-2 w-full mt-2 font-2">
                                    Max Win: {item.tokens} tokens
                                    <p className="text-sm p-2 bg-base-100 rounded-sm mt-2">You win if {item.name} gets less than an A in {item.gamble.class}</p>
                                    



                                </div>
                                {/* {new Date(item.expires).toDateString().split(" ")[0] + " "+ new Date(item.expires).toDateString().split(" ")[1] +" "+ new Date(item.expires).toDateString().split(" ")[2]} */}
                                <p className="absolute bottom-2 left-2">Expires: 12/30/24</p>
                            </div>
                            

                        </div>



                    ))}

                </div>

            </div>


        </>
    )
}
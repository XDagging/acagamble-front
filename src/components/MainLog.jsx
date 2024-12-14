import React, {useContext, useEffect} from "react"
import { FaInbox, FaCog, FaBug, FaHeart, FaMoneyCheck, } from "react-icons/fa";
import {UserContext }from "./Contexts"




function MainLog(props) {

    const currentUser = useContext(UserContext)

    



    return (


        <>

        <div className="sticky top-0 left-0 sm:w-[20vw] w-full bg-base-300 min-w-fit min-h-screen">
    
            <div className="w-full h-full min-h-screen p-2 flex flex-col gap-2 relative">

                <div className="bg-base-100 rounded-lg p-4">
                    <div className="avatar placeholder">
                        <div className="w-20 rounded-full bg-base-300">
                        {/* add the [0 here later] */}
                            {(currentUser.name) && (
                                
                                <p className="font-1 text-3xl">{currentUser.name.substring(0,1)}</p>
                            )}
                            


                        </div>

                    </div>
                    <p className="font-2 font-extrabold text-lg">{currentUser.name}</p>



                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                    <p className="font-1 text-lg font-semibold">Quick Actions</p>


                    <div className="flex flex-col gap-2 w-full mt-2">
                        <div className="">



                        
                            
                        </div>
                        <div className="">



                            <div className="flex flex-row gap-2 p-4 bg-base-300 select-none cursor-pointer hover:bg-accent transition-all rounded-lg" onClick={() => {
                                const whiteSpace =Array(Math.floor(Math.random()*100)).fill(" ")
                                let initialString = "Feed"
                                whiteSpace.map((value) => {
                                    initialString += value
                                })
                                props.setMenu(initialString)
                                }}>
                               
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
</svg>

                                <p className="font-1 font-bold">Feed</p>
                            </div>
                            
                        </div>
                        {/* <div className=""> */}



                            {/* <div className="flex flex-row gap-2 p-4 bg-base-300 select-none cursor-pointer hover:bg-accent transition-all rounded-lg" onClick={() => {
                                const whiteSpace =Array(Math.floor(Math.random()*100)).fill(" ")
                                let initialString = "Settings"
                                whiteSpace.map((value) => {
                                    initialString += value
                                })
                                props.setMenu(initialString)
                                }}>
                               
                                <FaCog className="text-lg mt-1" />
                                <p className="font-1 font-bold">Settings</p>
                            </div> */}
                            
                        {/* </div> */}
                        <div className="">



                            <div className="flex flex-row gap-2 p-4 bg-base-300 select-none cursor-pointer hover:bg-accent transition-all rounded-lg" onClick={(e) => {
                                const whiteSpace =Array(Math.floor(Math.random()*100)).fill(" ")
                                let initialString = "Trades"
                                whiteSpace.map((value) => {
                                    initialString += value
                                })
                                
                                props.setMenu(initialString)
                            }}>
                                <FaMoneyCheck className="text-lg mt-1" />
                                <p className="font-1 font-bold">Concurrent Trades</p>
                            </div>
                            
                        </div>

                        <div className="">



                            <div className="flex flex-row gap-2 p-4 bg-base-300 select-none cursor-pointer hover:bg-accent transition-all rounded-lg" onClick={(e) => {
                                const whiteSpace =Array(Math.floor(Math.random()*100)).fill(" ")
                                let initialString = "Bet"
                                whiteSpace.map((value) => {
                                    initialString += value
                                })
                                
                                props.setMenu(initialString);
                            }}>
                                <FaMoneyCheck className="text-lg mt-1" />
                                <p className="font-1 font-bold">Create your bet</p>
                            </div>
                            
                        </div>
                        
                        <div className="">



                            {/* <div className="flex flex-row gap-2 p-4 bg-base-300 select-none cursor-pointer hover:bg-accent transition-all rounded-lg">
                                <FaFlag className="text-lg mt-1" />
                                <p className="font-1 font-bold">Report User</p>
                            </div> */}
                            
                        </div>

                    </div>

                    
                </div>
                <div className="absolute p-2 bg-neutral w-full bottom-0 left-0 h-[10vh]">
                    <p className="font-1 text-2xl font-bold">AcaGamble</p>
                    <p className="font-2 font-semibold">A Hernandez Production</p>

                </div>
            </div>

        </div>


        



        </>
    )
}



export default MainLog
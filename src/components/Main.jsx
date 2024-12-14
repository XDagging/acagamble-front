import React, {useState, useContext, useEffect} from "react";

import CallApi from "./CallApi"
import MainLog from "./MainLog"
import {UserContext, EndpointContext} from "./Contexts"
import { FiDivideCircle } from "react-icons/fi";
import Bet from "./Bet"

import Trades from "./Trades"

export default function Main(props) {
    const EXPIRES = 1239012309120930;
    const [currentUser,setCurrentUser] = useState("");
    const [betOffers, setBetOffers] = useState();






    const [currentNav, setCurrentNav] = useState("Feed")


    const setMenu = (newPlace) => {
        setCurrentNav(newPlace)
    }
    
    useEffect(() => {
        

        // Current User

        CallApi("/getUser","GET").then((res) => {
            if (res.code === "err") {
                window.location.replace("/login")
            } else {
                let user = res.message
                user.bets = []
                setCurrentUser(res.message)
            }
        })


        // {"name":"Sebastian Hernandez-Tavares","studentId":"146475","schedule":[{"courseName":"AP Language
        //     and Comp A","grade":89,"period":1,"courseTeacher":"Alexis Phares"},{"courseName":"Hon Health Education
        //     B","grade":84.27,"period":2,"courseTeacher":"Lorraine Goldstein"},{"courseName":"French
        //     5A","grade":83.44,"period":3,"courseTeacher":"Ryan Martinez"},{"courseName":"AP AB Calculus
        //     A","grade":85.43,"period":4,"courseTeacher":"Rachel Zussman"},{"courseName":"AP Physics
        //     1A","grade":93.14,"period":5,"courseTeacher":"Scott Hanna"},{"courseName":"AP World History
        //     A","grade":85.14,"period":6,"courseTeacher":"Rainer Kulenkampff"},{"courseName":"AP Computer Sci JAVA
        //     A","grade":85.25,"period":7,"courseTeacher":"Fedor Menchukov"}],"activeBets":[]}}
        // setCurrentUser({
        //     name: "Sebastian Hernandez-Tavares",
        //     studentId: 146475,
        //     activeGambles: [],
        //     tokens: 4000,
        //     bets: [
        //         {
        //             name: "Sebastian",
        //             expires: EXPIRES,
        //             gamble: {
        //                 class: "AP Lang",
        //                 targetGrade: "A",
        //                 currentPercentage: "87%",
        //             },
        //             school: "Walter Johnson",
        //             tokens: 41,
        //             gpa: 3.85,
        //         }
            
        //     ]
        // })

        setBetOffers(
            [
                {
                    name: 'Max Alztier',
                    tokens: 300,
                    gpa: 4.00,
                    school: "Whitman",
                    gamble: {
                        class: "AP Calc BC",
                        targetGrade: "A",
                        currentPercentage: "62%",
                    }
                },
                {
                    name: 'Alyssa White',
                    tokens: 10,
                    gpa: 3.2,
                    school: "Walter Johnson",
                    gamble: {
                        class: "AP Calc AB",
                        targetGrade: "C",
                        currentPercentage: "72%",
                    }
                },
                {
                    name: 'John Blue',
                    tokens: 1000,
                    gpa: 3.2,
                    school: "Walter Johnson",
                    class: 'AP Lit',
                    gamble: {
                        class: "AP Lit",
                        targetGrade: "B",
                        currentPercentage: "78%",
                    }
                },
                {
                    name: 'Mike Mententor',
                    tokens: 350,
                    gpa: 3.4,
                    school: "Springbrook",
                    // class: '',
                    gamble: {
                        class: "Hon Precalculus",
                        targetGrade: "B",
                        currentPercentage: "79%",
                    }
                    
                },




            ])



    },[])

    

    return (

        <>

        {(currentUser) && (

        <UserContext.Provider value={currentUser}>

        <div className="flex flex-row w-screen">

            <MainLog setMenu={setMenu} />

            <div className="text-center w-full">
                {(currentNav.trim() === "Feed") && (
                    <>

            <div className="m-2 p-3 rounded-lg bg-base-300">
                    <p className="font-1 font-bold text-2xl">Local Bet Opportunities</p>
                    
                </div>
                

                <div className="min-h-[80vh] m-2 rounded-lg bg-base-300 grid grid-cols-3 items-center justify-items-center gap-2 p-2">
                    {betOffers.map((item,i) => (
                        <div key={i} className="bg-neutral w-full h-full rounded-md">

                            
                            <div className="w-full p-4 bg-base-100">
                            </div>

                            <div className="p-4 text-left font-1">
                                
                                <p className="font-1 text-lg">{item.name}</p>
                                <p>GPA: {item.gpa}</p>
                                <p>Current Percentage: {item.gamble.currentPercentage}</p>
                                <p>School: {item.school}</p>
                                
                                
                                
                                
                                <div className="bg-base-300 p-2 w-full mt-2 font-2">
                                    Max Win: {item.tokens}
                                    <p className="text-sm p-2 bg-base-100 rounded-sm mt-2">You win if {item.name} gets less than an {item.gamble.targetGrade} in {item.gamble.class}</p>
                                    



                                </div>

                                <btn className="btn w-full mt-1" onClick={() => {
                                    
                                    const filteredOffers = betOffers.filter((x, h) => h !== i);
                                    setBetOffers(filteredOffers)
                                    
                                    currentUser.bets.push(item)
                                }}>
                                    Enter Bet
                                </btn>
                            </div>
                            

                        </div>



                    ))}

                </div>
                    
                    </>
                )}


                {(currentNav.trim() === "Trades") && (

                    <Trades />
                )}

                {(currentNav.trim() === "Bet") && (
                    <Bet />


                )}



                








            </div>

        </div>
        

        </UserContext.Provider>

        )}

        
        
        
        </>
    )
}
import React from "react";








export default function Loading(props) {




    return (


        <>


        <div className="absolute w-full bg-black opacity-75 h-full z-40">


        </div>

        <div className="absolute top-[50%] left-[50%] z-50 translate-y-[-50%] translate-x-[-50%]">
        <span className="loading loading-infinity w-20 text-secondary"></span>
        </div>








        </>
    )
}
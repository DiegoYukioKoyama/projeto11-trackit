import { ThreeDots } from "react-loader-spinner"
import React from "react";

export default function Loading(){
    return (
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#FFFFFF" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
         />
    )
}
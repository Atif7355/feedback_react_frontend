import React from 'react'
import {Feedbacks} from "./Feedbacks";

export const Feedback = ({mylist}) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
        backgroundColor:"skyblue",
        border:"solid 2px red",
        borderRadius:"8px",
        transform:"translate(0,-40px)"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Top Feedbacks</h3>
            {mylist.length===0? "No Details to display":  
            
            React.Children.toArray(
                mylist.map((item)=>{
                    return (<Feedbacks item={item} />   
                    )
                })
            )
            } 
          
        </div>
    )
}
import React, { useState } from 'react';
import axios from 'axios'
export const AddForm = ({setmylist}) => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [suggestion, setSuggestion] = useState("");

    

    function PostFeedback(){
        if (!fname || !lname || !suggestion) {
            alert("These fields cannot be blank");
        }
        else {
            let nm = gender + "" + fname + " " + mname + " " + lname
            axios.post("https://feedback-backend-server.herokuapp.com/newuser", { name: nm, suggestion: suggestion })
                .then(res => {
                    console.log(res);
                    
                })
                .catch(err => {
                    console.log(err);
                })
            
                axios.get('https://feedback-backend-server.herokuapp.com/getalluser')
                .then(res=>{
                  console.log('this side=>',res);
                  setmylist(res.data)
                })
                .catch(err=>{
                  console.log(err);
                })
            setFname("");
            setMname("");
            setLname("");
            setGender("");
            setSuggestion("");
         }
    }

    function RefetchFeedback(){
        axios.get('https://feedback-backend-server.herokuapp.com/getalluser')
                .then(res=>{
                  console.log('this side=>',res);
                  setmylist(res.data)
                })
                .catch(err=>{
                  console.log(err);
                })
    }
    return (
        <div className="left" style={{ color: "brown", left: "0", padding: "50px", backgroundColor: "linen" }}>
            <h1>Enter your Feedback</h1>
            <div>
                <label htmlFor="fname"><b>First Name:</b></label>
                <br />
                <input type="text" id="fname" name="fname" value={fname} onChange={(e) => { setFname(e.target.value) }} style={{ width: "25%", height: "50px" }} />
                <br />
                <br />
                <label htmlFor="mname"><b>Middle Name:</b></label>
                <br />
                <input type="text" id="mname" name="mname" value={mname} onChange={(e) => { setMname(e.target.value) }} style={{ width: "25%", height: "50px" }} />
                <br />
                <br />
                <label htmlFor="lname"><b>Last Name:</b></label>
                <br />
                <input type="text" id="lname" name="lname" value={lname} onChange={(e) => { setLname(e.target.value) }} style={{ width: "25%", height: "50px" }} />
                <br />
                <br />
                <label htmlFor="Gender"><b>Gender:</b></label>
                <br />
                Male<input type="radio" id="gender" name="gender" value="Mr." onChange={(e) => { setGender(e.target.value) }} />
                Female<input type="radio" id="gender" name="gender" value="Ms." onChange={(e) => { setGender(e.target.value) }} />

                <br />
                <br />
                <label htmlFor="suggestion"><b>Suggestions:</b></label>
                <br />
                <input type="suggestion" id="suggestion" value={suggestion} name="suggestion" onChange={(e) => { setSuggestion(e.target.value) }} style={{ width: "25%", height: "100px" }} />
                <br />
                <br />
                <br />
                <button type="submit" onClick={PostFeedback} class="btn" style={
                    {
                        backgroundColor: "darkblue",
                        border: "none",
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer"
                    }}>Submit</button>

                <button type="submit" onClick={RefetchFeedback} class="btn" style={
                    {
                        backgroundColor: "darkblue",
                        border: "none",
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer"
                    }}>Refetch</button>
  
            </div>
        </div>

    )
}

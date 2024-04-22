import React from 'react'
import invest from "../assets/invest.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Invest = () => {
    const navigate = useNavigate();

    const Welcome = () => {
      navigate("/Welcome");
    }
  return (
    <div>
         <div className='text-center p-2'>
       <h4 onClick={Welcome} className=' float-end '>Skip</h4>
        <img className='img-fluid' style={{height: "73vh"}} src={invest} alt="" />

        <h1>Invest your money</h1>
        <p>Get access to risk free investments that will multiply your income and pay high returns in few months.</p>

        <div className='d-flex justify-content-between  '>
       <div className='d-flex '>
            <div style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%"}}></div>
            <div style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%", margin:'0 15px'}}></div>
            <div style={{background:'#2BDC2B', height:'20px', width: '20px', borderRadius: "100%"}}></div>
        </div>

        <button onClick={Welcome} style={{border: "none", padding: "10px", backgroundColor: "#2bdc2b"}}>NEXT</button>
        </div>
       </div>
    </div>
  )
}

export default Invest
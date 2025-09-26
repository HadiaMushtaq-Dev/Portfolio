import React from 'react'
import "./About.css"
function Contact() {
  return (
    <div className='about'>
      <div className='about11'>
        <h2>Contact Information</h2>
        <p>You can reach me through email or connect with me on GitHub. I am always open to learning opportunities, collaborations, and feedback as I continue my journey in web development</p>
        <div className='about2'>
            <div className='ct'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOnwE6Znje_AB89K2ZC8H1v_551gDuTk4AAgNSvJzrNSLs7zoOeCDpvboPZTOacir_7k&usqp=CAU" alt="email-icon"/>
                 <p>hadiamushtaq397@gmail.com</p>
            </div> 
          <div className='ct'>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevjLMoY69RrmdOeKZONLsRySpvdkEwP-SaraZ3hc_8WFS0eR1ALIIL9xuP2_nWbRnawY&usqp=CAU" alt="github_icon"/>
            <p><a href="https://github.com/HadiaMushtaq-Dev">HadiaMushtaq-Dev</a></p>
          </div>
  
        </div>
      </div>

    </div>
  )
}

export default Contact

import React from 'react'
import "./about.css"
function About() {
     return (
          <div style={{
               display: "flex", flexDirection: "row", justifyContent: "center", width: "70%", margin: "auto", gap: "20px", padding: "30px", marginTop: "6rem"
          }}>
               < div style={{
                    margin: "20px"
               }}>
                    <img src='https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60&&h=250' />
               </div >
               <div style={{ fontSize: "12px" }}>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered.</p>
               </div>
          </div >


     )
}

export default About
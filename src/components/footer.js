import github from '../images/github.svg' 
import linkedin from '../images/linkedin.svg' 

 
 const Footer = () => {

return(
    <section className="footerSection">
        <div className="contactMe">
        <h2>Contact me</h2>

        </div>

        <div className="row footer">


            <div className="footer__contact col-md-7">
             <p>I am currently looking for job as a developer. If you find my work interesting and want to find out more about me, contact me at: aspmanalexander@gmail.com.</p>
         

            </div>
         
            <div className="col-md-5">
            <div className="row footer__contact ">
            <div                className="col-2 "
>
               
               <img 
               src={github}
               alt=''/>
              
    
    </div> 
    <div className="col-10 ">   <a href="github.com/alexanderaspman">github.com/alexanderaspman</a></div>
  
    </div> 
    
     <div className="row footer__contact">
     <div                className="col-2"
>
               
               <img 
               src={linkedin}
               alt=''/>
    
    </div>
    <div className="col-10"> <a href="linkedin.com/in/alexanderaspman">linkedin.com/in/alexanderaspman</a></div>
   
    </div>
          
            
            </div>
        </div>
    </section>
)

}
export default Footer
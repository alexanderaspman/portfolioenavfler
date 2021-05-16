import React, {useState} from 'react';
import gameMaker from "../images/gamemaker.jpg";
import gameMakerPreview from "../images/gamemakers_preview.png";
import vaskaPreview from "../images/vaskaShop.png";
import vaska from "../images/Category.png";
import seed from "../images/hitandrun.jpg";
import seeding from "../images/seeder_preview.png";
import blcac from "../images/blcac.jpg";
import bj from "../images/blackJack_preview.png";
import greenreload from "../images/greenreload.png";
import greenreloadPreview from "../images/greenreload_preview.png";
import fortunaPreview from "../images/fortune_previews.png";
import fortuna from "../images/fortuna.jpg";
import close from "../images/close.svg";
import * as imageCaptions from './imageCaptions';
import card1 from '../images/profilbild.jpg';


const Portfolio =()=>{ 
const [Iimage, setIImage] = useState({});






    const PortfolioModal = () => {
        return (
          <div className="row portfolioModal">
 
              <div className="col-lg-10">
                  <div className="row">
              <div className="col-lg-6 portfolioModal-content"><img
       className="image"
       src={Iimage}
       alt="no image" /></div>   
         <div className="col-lg-6 captions">
             <h2>{imageTitle}</h2>
               <p>{imageCaption}</p> 
            </div>  
          
          
              </div>
              </div>
              <span className="close" onClick={toggleIsOn}>
              &times;
            </span>
          </div>
        )
      }
    const [isOn,toggleIsOn] = useToggle()

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];

  }
  function setImageFunctionVaska (){
    setImageCaption(imageCaptions.vaska);
    setIImage(vaska);
    setImageTitle('Vaska')

    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionGreenreloade (){
    setImageCaption(imageCaptions.greenreload);
    setIImage(greenreload);
    setImageTitle('Green reload');
    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionFortuna (){
    setImageCaption(imageCaptions.fortuna);
    setIImage(fortuna);
    setImageTitle("Fortuna");
    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionApp (){
    setImageCaption(imageCaptions.app);
    setIImage(blcac);
    setImageTitle('Rain man - App')


    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionIllustration (){
    setImageCaption(imageCaptions.illustration);
    setIImage(seed);
    setImageTitle('Illustration');

    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionGamemaker (){
    setImageCaption(imageCaptions.gamemaker);
    setIImage(gameMaker);
    setImageTitle('Gamemakers');

    return(imageCaption, Iimage,imageTitle)
  }
  
  const [imageCaption ,setImageCaption] = useState()
  const [imageTitle ,setImageTitle] = useState()

  return (
    <section className="portfolio" id="portfolio-section">
          {isOn && (
          <PortfolioModal
      
          />
        )}
    <h2>Portfolio</h2>
   
    <div className="row">
  
        
      
    <div className="col-lg-6">
    <div className="row">

        <div className="col-12 portfolio__case" id="section__fortuna" onClick={()=>setImageFunctionFortuna()}>
        <img
            className="small"
            src={fortunaPreview}
            onClick={toggleIsOn}
            alt=""
          />
          <caption>
          Fortuna - design
          </caption>
          
         
       

        </div>
        </div>
        <div className="row">
        <div className="col-md-6 portfolio__case" id="section__vaska" onClick={()=>setImageFunctionVaska()}>
            <img
            className="small"
            src={vaskaPreview}
            onClick={toggleIsOn}
            alt=""
          />
           <caption>
           Vaska.nu - webshop
                     </caption>
         
         </div>
<div className="col-md-6 portfolio__case" id="section__gamemaker" onClick={()=>setImageFunctionGamemaker()}>
    <img
            className="small"
            src={gameMakerPreview}
            onClick={toggleIsOn}
            alt=""
          />
           <caption>
           Gamemaker - design/code
          </caption>
         
         </div>
        </div>
      </div>
      <div className="col-lg-6" id="section__app">
        <div className="row">
        <div className="col-md-6 portfolio__case" onClick={()=>setImageFunctionApp()}>
       <img
            className="small"
            src={bj}
            onClick={toggleIsOn}
            alt=""
          />
           <caption>
           Black jack - app
          </caption>
         
         </div>
<div className="col-md-6 portfolio__case" id="section__illustration" onClick={()=>setImageFunctionIllustration ()}>
<img
            className="small"
            src={seeding}
            onClick={toggleIsOn}
            alt=""
          />
           <caption>
           Illustration - Illustrator 
          </caption>
         
         </div>
        </div>
        <div className="row">
        <div className="col-12 portfolio__case" id="section__greenreloade" onClick={()=>setImageFunctionGreenreloade()}>  
       <img
            className="small"
            src={greenreloadPreview}
            onClick={toggleIsOn}
            alt=""
          />
           <caption>
           Green reload - design
          </caption>
         
         </div>

        </div>
      </div>
    </div>
  
    </section>
   

    )
};
 export default Portfolio
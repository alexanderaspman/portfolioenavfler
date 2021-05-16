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
/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

const [Iimage, setIImage] = useState({});


const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Efren Reyes',
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: Iimage,
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: Iimage,
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: Iimage,
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: Iimage,
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: card1,
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};





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

    setIdSection("#section__app");

    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionIllustration (){
    setImageCaption(imageCaptions.app);
    setIImage(seed);
    setImageTitle('Illustration');

    setIdSection("#section__app");
    return(imageCaption, Iimage,imageTitle)
  }
  function setImageFunctionGamemaker (){
    setImageCaption(imageCaptions.gamemaker);
    setIImage(gameMaker);
    setImageTitle('Gamemakers');

    setIdSection("#section__app");
    return(imageCaption, Iimage,imageTitle)
  }
  
  const [imageCaption ,setImageCaption] = useState()
  const [idSection ,setIdSection] = useState()
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
import { useEffect, useState } from "react";

const Hero : React.FC = () => {

    const [bgImage,setBgImage] = useState<string | null>(null)
    
    const _loadFullImage = () => {
      const fullimage = new Image();
      fullimage.onload = (_)=> {setBgImage(fullimage.src)}
      fullimage.src= require('../../assets/img/kingym.jpg')
      console.log(fullimage.src," loaded")
    }
    
    useEffect(_loadFullImage, [])
    return (<div className="relative pt-16 pb-32 flex content-center items-end justify-center  bg-primary"
      style={{
        minHeight: "110vh"
      }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover transition-all duration-150 ease-linear"
        onLoad={_loadFullImage}
        style={{
          backgroundImage: `url(${bgImage || require('../../assets/img/kinggym_small.jpg')})`,
        }}>
        <span id="blackOverlay" className="w-full h-full absolute bg-black  opacity-75 transition-opacity duration-150 ease-linear" ></span>
      </div>
      <div className="container relative mx-auto md:mb-8">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="m-auto">
              <h1 className="text-primary font-extrabold text-5xl uppercase">
                Where kings are born.
                  </h1>
              <p className="mt-4 text-lg text-gray-300">
                This is a simple example of a Landing Page you can build
                using Tailwind Starter Kit. It features multiple CSS
                components based on the Tailwindcss design system.
                  </p>
              <div className="mt-6 container flex justify-center">
                <a href="#" className="transition-colors duration-100 ease-linear mr-4 bg-black text-white px-4 py-2 rounded-sm hover:bg-white hover:text-black border border-solid border-black">Know more</a>
                <a href="#" className="transition-colors duration-100 ease-linear bg-primary px-4 py-2 rounded-sm hover:bg-transparent hover:text-primary border border-solid border-primary">Contact Us</a>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden  "
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden "
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>)} 
    
export default Hero;
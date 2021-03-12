import React, { ReactElement } from 'react'


function Footer(): ReactElement {
    return (
        <footer className="relative bg-primary pt-8 pb-6">
        {/* <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-primary fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
    
                    "text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      
                      "text-black fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Like on facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    
                    "text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      
                      "text-black fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    
                    "text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                       
                      "text-black fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

            </ul>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-black text-sm font-semibold mb-2">
                    Nous Contacter
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-black font-semibold block pb-2 text-sm"
                        ><i className="text-black text-sm fas fa-phone"></i> +213672439370
                      </p>
                    </li>
                    <li>
                      <a className="text-black font-semibold block pb-2 text-sm"
                        href="mailto:ha_meridja@esi.dz"><i className="fas fa-at"></i> ha_meridja@esi.dz
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free"><i className="fas fa-map-marked-alt"></i> Cinq maison, mohammadia Alger
                      </a>
                    </li>

                  </ul>
                </div>
  
              </div>
            </div>
          </div>
          <hr className="my-6 border-black" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-black font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}MERIDJA ABDELLAH NASSIM{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-black hover:text-gray-900"
                >
                  KING GYM
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer

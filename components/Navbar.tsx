import React, { ReactElement, useState } from 'react'

interface Props {
    transparent?:boolean
}

function Navbar(props: Props): ReactElement {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (props.transparent ? "text-primary" : "text-gray-800") +
                " title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              href="https://www.facebook.com/kiinggym"
            >
               <i
                    className={
                      (props.transparent
                        ? "text-primary"
                        : "text-gray-500") +
                      " fas fa-crown text-lg leading-lg mr-2"
                    }
                  />
              King Gym
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              name="menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-black lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300  text-primary"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-primary"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Like on facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-primary"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-primary"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300  text-primary"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-primary"
                        : "text-gray-500") +
                      " fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

            </ul>
          </div>
        
        </div>
      </nav>
    )
}

export default Navbar

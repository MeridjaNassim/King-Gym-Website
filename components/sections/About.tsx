import { ImageWithOverlay} from "../common/Image";

const About = () => <section id="about" className="relative py-20 bg-primary">
  <div
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
  </div>

  <div className="container mx-auto px-4">
    <div className="items-center flex flex-col-reverse md:flex-row flex-wrap">
      <div className="w-full mt-10 md:mt-0 md:w-4/12 ml-auto mr-auto px-4">
        <ImageWithOverlay src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="about image" />
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="bg-black text-primary p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full ">
            <i className="fas fa-crown  text-2xl"></i>
          </div>
          <h1 className="text-black text-6xl font-bold">About <br></br> KING GYM</h1>
          <h2 className="text-3xl text-gray-800 font-bold">
            The place to train...
            </h2>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vitae, ea libero perspiciatis sequi nobis animi id reiciendis delectus deserunt atque tempora laudantium magni officia odit optio magnam illum dolorem!
            </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-primary mr-3">
                    <i className="fas fa-dumbbell"></i>
                  </span>
                </div>
                <div>
                  <p className="text-black">
                    Best equipement
                    </p>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-primary mr-3">
                    <i className="fab fa-html5"></i>
                  </span>
                </div>
                <div>
                  <p className="text-black">Best Training</p>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-primary mr-3">
                    <i className="far fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <p className="text-black">Great Dynamic</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
export default About;

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="KING GYM ALGERIA">

    <Hero />
    <Featured />
    <Team />
    <Finisher />
    <Contact />

  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-end justify-center  bg-primary"
  style={{
    minHeight: "110vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover "
    style={{
      backgroundImage: "url('https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/61947263_359871008001079_6223713331971096576_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeFMCWPu0R_es51u_qXnYgCT7kKB6zxkLC7uQoHrPGQsLgbcU3mW6NM2tfrU6LwUuF9mE4qJO-nuQv9wvS07RSoQ&_nc_ohc=tm6CTrBLF-oAX_qVQ13&_nc_ht=scontent-mrs2-1.xx&oh=c17498947a241295650337abecb4fab6&oe=5FA00E73')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute  bg-black" style={{ opacity: 0.85 }}></span>
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
            <a href="#" className="transition-colors duration-100 ease-linear mr-4 bg-white px-4 py-2 rounded-sm hover:bg-transparent hover:text-white border border-solid border-white">Know more</a>
            <a href="#" className="transition-colors duration-100 ease-linear bg-primary px-4 py-2 rounded-sm hover:bg-transparent hover:text-primary border border-solid border-primary">Know more</a>
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
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-award"></i>
            </div>
            <h6 className="text-xl font-semibold">Awarded Agency</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
              </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-retweet"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Free Revisions
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Verified Company
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
              </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          Don't let your uses guess by attaching tooltips and popoves
          to any element. Just make sure you enable them first via
          JavaScript.
          </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          The kit comes with three pre-built pages to help you get
          started faster. You can change the text and images and
          you're good to go. Just make sure you enable them first via
          JavaScript.
          </p>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          className="font-bold text-gray-800 mt-8"
        >
          Check Tailwind Starter Kit!
          </a>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Top Notch Services
              </h4>
            <p className="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
              </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>

const Featured = () => <section className="relative py-20 bg-primary">
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
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="bg-black text-primary p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full ">
            <i className="fas fa-dumbbell text-2xl"></i>
          </div>
          <h3 className="text-3xl font-semibold">
            The place to train...
            </h3>
          <p className="mt-4 text-lg leading-relaxed text-black">
            The extension comes with three pre-built pages to help you
            get started faster. You can change the text and images and
            you're good to go.
            </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-primary mr-3">
                    <i className="fas fa-fingerprint"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-black">
                    Carefully crafted components
                    </h4>
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
                  <h4 className="text-black">Amazing page examples</h4>
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
                  <h4 className="text-black">Dynamic components</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

const Team = () => <section className="pt-20 pb-48">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold">
          Here are our heroes
          </h2>
        <p className="text-lg leading-relaxed m-4 text-gray-600">
          According to the National Oceanic and Atmospheric
          Administration, Ted, Scambos, NSIDClead scentist, puts the
          potentially record maximum.
          </p>
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={require('../assets/img/team-1-800x800.jpg')}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Ryan Tompson
              </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              Web Developer
              </p>
            <div className="mt-6">
              <button
                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={require('../assets/img/team-2-800x800.jpg')}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Romina Hadid
              </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              Marketing Specialist
              </p>
            <div className="mt-6">
              <button
                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={require('../assets/img/team-3-800x800.jpg')}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Alexa Smith
              </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              UI/UX Designer
              </p>
            <div className="mt-6">
              <button
                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={require('../assets/img/team-4-470x470.png')}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Jenna Kardi
              </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              Founder and CEO
              </p>
            <div className="mt-6">
              <button
                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-google"></i>
              </button>
              <button
                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

const Finisher = () => <section className="pb-20 relative block  bg-black">
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
        className=" text-black fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-primary">
          Build something
          </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          Put the potentially record low maximum sea ice extent tihs year down to low ice.
          According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
          </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-black bg-primary p-3 w-12 h-12 shadow-lg rounded-full  inline-flex items-center justify-center">
          <i className="fas fa-medal text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-primary">
          Excelent Services
          </h6>
        <p className="mt-2 mb-4 text-gray-500">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
          </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-black bg-primary p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
          <i className="fas fa-poll text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold  text-primary">
          Grow your market
          </h5>
        <p className="mt-2 mb-4 text-gray-500">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
          </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className=" text-black bg-primary p-3 w-12 h-12 shadow-lg rounded-full  inline-flex items-center justify-center">
          <i className="fas fa-lightbulb text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold  text-primary">
          Launch time
          </h5>
        <p className="mt-2 mb-4 text-gray-500">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
          </p>
      </div>
    </div>
  </div>
</section>

const Contact = () => <section className="relative block py-24 lg:pt-0 bg-black">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              Want to work with us?
              </h4>
            <p className="leading-relaxed mt-1 mb-4 text-black">
              Complete this form and we will get back to you in 24 hours.
              </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-black text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
                </label>
              <input
                type="text"
                className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Full Name"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-black text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
                </label>
              <input
                type="email"
                className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Email"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-black text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
                </label>
              <textarea
                rows={4}
                cols={80}
                className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Type a message..."
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Send Message
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



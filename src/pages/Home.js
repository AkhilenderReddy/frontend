import Sidebar from "../components/Sidebar";

// images
import one from "../asset/1.jpg";
import celebration from "../asset/celebration.png";
import inHonorof from "../asset/inHonorof.png";
import inMemoryof from "../asset/inMemoryof.png";
import foodGirl from "../asset/Girl-Food.png";
import img from "../asset/akhilenderremovebg.png";
import video from "../asset/video.mp4";
import logo from "../asset/icon.jpg";

function Home() {
  return (
    <div className="flex  h-full md:gap-1    ">
      <div className="md:hidden bolck h-full">
        <Sidebar />
      </div>
      <div className=" w-full flex items-center  flex-col     bg-[#F5F5F5]   ">
        <div className="max-w-[100vw]">
          {/* section one */}
          <section className="relative h-fit w-fit">
              <video
                src={video} // Replace with your video source
                autoPlay
                loop
                muted // Optional: Mute the video for autoplay to work in most browsers
                className="object-cover md:h-[100vh] h-[30rem]"
              />
            </section>
          {/* section one end */}
          {/* section two  */}
          <section className=" flex   justify-center    md:my-[5rem]  my-10 px-4">
            <div className=" max-w-4xl   flex  flex-col  gap-10">
              <h1 className=" text-center text-[#8a00c2]   md:text-7xl    text-3xl   font-bold ">
                Your gift connects families to good food.
              </h1>
              <p className="    text-center text-gray-700 font-semibold">
                Today, millions of Indian families lack access to healthy,
                affordable food. But with your support, Partnership for a
                Healthier India is working to ensure that every family, in every
                zip code has affordable access to good food. Give now, and
                together we can achieve Food Equity and create a healthier
                future for all.
              </p>
            </div>
          </section>
          {/* section two end */}
         
        </div>
               {/* section three */}
               <section className="     relative  h-fit">
            <img
              src={one}
              alt="image"
              className=" object-cover   md:h-[90vh]  h-[30rem]"
            />
            <div className="absolute   top-0  left-0 h-full w-full flex items-center justify-center  md:flex-row flex-col     gap-8  p-4 ">
              <div className="flex flex-col    gap-4  w-full md:w-[40rem] ">
                <h1 className="  text-[#8a00c2]    font-bold  text-3xl   text-center md:text-start  md:text-7xl">
                  CELEBRATE YOUR SPECIAL DAY TOGETHER!
                </h1>
                <p className=" text-white font-bold text-center md:text-start">
                Make your special occasions more meaningful by spreading joy and compassion to those in need. 
                Turn every celebration into an act of kindness that brings happiness to others.
                </p>
              </div>
              <div className="w-full md:w-[40rem]  md:flex  items-center justify-center">
                <div className="flex flex-col gap-4    md:gap-9     md:justify-start    items-center justify-center">
                  <h1 className="text-[#8a00c2]   md:text-2xl  text-center   font-bold  md:text-start">
                    CHOOSE AN OCCASION
                  </h1>
                  <div className="flex gap-6  md:gap-10 md:10">
                    <div className="flex justify-center items-center gap-1 flex-col">
                      <img
                        className=" md:w-20  w-16"
                        src={celebration}
                        alt="Celibration"
                      />
                      <p className="text-white">Celebrations</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 flex-col">
                      <img
                        className=" md:w-20  w-16"
                        src={inHonorof}
                        alt="inHonorof"
                      />
                      <p className="text-white">In Honor</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 flex-col">
                      <img
                        className=" md:w-20  w-16"
                        src={inMemoryof}
                        alt="inMemoryof"
                      />
                      <p className="text-white">In Memory</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section three end */}


          {/* section four  */}
          <section className=" flex   justify-center    md:my-[5rem]  my-10 px-4">
            <div className=" max-w-4xl   flex  flex-col  gap-10">
              <h1 className=" text-center text-[#8a00c2]   md:text-7xl    text-3xl   font-bold ">
                Technical Support
              </h1>
              <div class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="grid items-center grid-cols-1 md:grid-cols-2">

                            <div>
                                <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I am Akhilender
                                </h2>
                                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                At Bhojan, we’re here to help you with any questions or issues you may encounter. 
                                For assistance, please contact us via email at support@bhojan.com, and our team will respond promptly to address your needs.
                                 We appreciate your commitment to reducing food waste and supporting our community, and we’re dedicated to ensuring a seamless experience on our platform. 
                                
                                Thank you for being part of Bhojan!
                                </p>

                                <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                    <span class="relative inline-block">
                                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    <span class="relative"> Have a question? </span>
                                    </span>
                                    <br class="block sm:hidden" />Ask me on <a href="https://x.com/akhil_reddy_t" title=""
                                        class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Twitter</a>
                                </p>
                            </div>

                            <div class="relative">
                                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={img} alt="img" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          </section>
          {/* section four end */}



      
        {/* footer */}
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900  w-full flex items-center justify-center">
          <div className="container">
            <div className=" md:flex md:justify-between ">
              <div className="mb-6 md:mb-0 ">
              <img src={logo} className="h-20 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700 dark:text-white">
                  BHOJAN
                </span>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="#" className="hover:underline">
                  BHOJAN™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
             
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a
                  href="https://twitter.com/AkhilenderReddye"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://github.com/AkhilenderReddy"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                
              </div>
            </div>
          </div>
        </footer>
        {/* footer end */}
      </div>
    </div>
  );
}

export default Home;

//
// Your gift connects families to good food.

// Today, millions of American families lack access to healthy, affordable food.

// But with your support, Partnership for a Healthier America is working to ensure that every family, in every zip code has affordable access to good food.
//
// Give now, and together we can achieve Food Equity and create a healthier future for all.

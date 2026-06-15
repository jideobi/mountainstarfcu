import {
    BuildingLibraryIcon,
    WrenchScrewdriverIcon,
    UserGroupIcon,
    HomeIcon,
    TruckIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";
import aboutUs from "../assets/aboutus.webp";
import Services from "../assets/ourservice.webp";
import Joinus from "../assets/joinus.webp";
import Homeloan from "../assets/homloan.webp";
import Applyforloans from "../assets/applyforloan.jpg";
import Autoloan from "../assets/autoloan.jpg";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const services = [
    {
        title: "About Us",
        image: aboutUs,
        link: "#",
    },
    {
        title: "Our Services",
        image: Services,
        link: "#",
    },
    {
        title: "Join Us",
        image: Joinus,
        link: "#",
    },
    {
        title: "Home Loans",
        image: Homeloan,
        link: "#",
    },
    {
        title: "Auto Loans",
        image: Autoloan,
        link: "#",
    },
    {
        title: "Apply for Loans",
        image: Applyforloans,
        link: "#",
    },
];

export default function ServicesGrid() {
    const [showLogin, setShowLogin] = useState(false);
    const [closing, setClosing] = useState(false);

    const closeModal = () => {
        setClosing(true);

        setTimeout(() => {
            setShowLogin(false);
            setClosing(false);
        }, 700); // Must match animation duration
    };
    return (
        <div >
            <div className="bg-[rgb(63,45,131)] text-white lg:flex text-center space-y-4 items-center justify-center gap-6  p-8">
                <p>
                    Call Us: (915) 544-2215 | (888) 843-3207
                </p>

                <button
                    onClick={() => setShowLogin(true)}
                    className="bg-[#3B76C2] hover:opacity-80 text-white px-6 py-2 font-semibold transition duration-300"
                >
                    LOGIN
                </button><br />
                <a>FORGOT PASSWORD | SIGN UP | ACCOUNT LOCKOUT RESET</a>
            </div>

            <div className="bg-[#3B76C2] h-52"></div>
          

            <section
  className="
    relative
    z-10
    -mt-32
    pb-20
  "
>
  <div className="max-w-4xl mx-auto px-6">

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        lg:gap-18
        mx-6
      "
    >
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="
              bg-white
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-2
              text-center
              group
              flex
              flex-col
              min-h-[260px]
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                p-2
                text-[#CC3366]
            
              "
            >
              {service.title}
            </h3>

            <div className="flex justify-center ">
              <div
                className="
                 
                 
                "
              >

<div className="bg-white mt-10">
        <img
      src={service.image}
      alt={service.title}
      className="h-16 w-16 bg-white object-contain"
    />
</div>
  
              </div>
            </div>

            <div className="mt-auto">
              <a
                href={service.link}
                className="
                  block
                  w-full
                  py-4
                  bg-[rgb(63,45,131)]
                  text-white
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                | Click Here
              </a>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>


            {showLogin && (
                <div className="fixed inset-0 z-[9999] flex items-center mx-4 justify-center">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-[95%] max-w-md bg-white rounded-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      border border-gray-100 p-8 
      ${closing ? "animate-slideOut" : "animate-slideIn"}`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                        >
                            <XMarkIcon className="h-7 w-7" />
                        </button>

                        <h2 className="text-3xl font-bold text-center text-[#3D4459] py-10 mb-6">
                            Member Login
                        </h2>

                        <form className="space-y-4 pb-20 mx-10">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B76C2]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B76C2]"
                            />

                            <button
                                type="submit"
                                className=" bg-[#3F2D83] text-white py-2 mt-2 rounded-md  font-semibold hover:bg-[rgb(63,45,131)] transition px-4"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
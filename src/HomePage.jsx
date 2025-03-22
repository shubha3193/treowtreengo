/* eslint-disable no-unused-vars */
import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Leaf, FileText, Speaker } from "lucide-react";
import { Menu } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particles from "react-particles";
// import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";

function HomePage() {
  const [spareParts, setSpareParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll smoothly to the selected section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };


  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  // Testimonial Carousel Settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>

<nav className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 animate-gradient-x"></div>

        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative z-10">
          <h1 className="text-2xl font-bold text-white">TreowTreeFoundation</h1>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>

          <div
            className={`lg:flex lg:space-x-4 lg:overflow-x-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-purple-500 lg:bg-transparent z-20`}
          >
            <button onClick={() => scrollToSection(homeRef)} className="block lg:inline-block text-white px-4 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="block lg:inline-block text-white px-4 py-2">
              About
            </button>
            <button onClick={() => scrollToSection(servicesRef)} className="block lg:inline-block text-white px-4 py-2">
              Services
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="block lg:inline-block text-white px-4 py-2">
              Contact
            </button>
          </div>
        </div>
      </nav>
    
   
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section ref={homeRef} >
      <div
        className="relative h-[400px] sm:h-[600px] flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/png2.jpg')`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          // init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-2">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
          >
            Empowering Lives, Sustaining Nature, and Driving Social Change
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl mb-8 text-white"
          >
            Trusted by thousands of car owners. Book your service today!
          </motion.p> */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/book-service")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              Book Appointment Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Explore Services
            </motion.button>
          </motion.div> */}
        </div>
      </div>
      </section>
      {/* Animated Statistics Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-sm sm:text-lg">Individuals Trained</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">100+</h3>
              <p className="text-sm sm:text-lg">Environmental Projects</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">500+</h3>
              <p className="text-sm sm:text-lg">Research Studies Conducted</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">1M+</h3>
              <p className="text-sm sm:text-lg">People Reached via Awareness Campaigns</p>
            </div>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <section ref={servicesRef} >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition transform"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 animate-bounce" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
      <section ref={aboutRef}>
      <HowItWorks />
      </section>
     {/* Contact Us Section */}
     <section ref={contactRef}>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-lg mx-auto">
          <ul className="text-sm text-gray-600 space-y-4">
            <li>
              <strong>Email:</strong> TreowTreeFoundation@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8793939848
            </li>
            <li>
              <strong>Postal Number:</strong> 123456
            </li>
            <li>
              <strong>Address:</strong> SN 53/1/1A/1A/1, Tamarind Park, Flat 1-702,Dhayari,Havell,Pune,Maharashtra,411041
            </li>
          </ul>
        </div>
      </div>
      </section>


      {/* Why Choose Us Section */}
      {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose AutoCarCarePoint?
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-pink-500 mr-4" />
                    <span className="text-sm sm:text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/png1.jpg"
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonial Carousel Section */}
      {/* <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
          What Our Customers Say
        </h2>
        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}

      {/* Call-to-Action Section */}
      {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Service Your Car?
          </h2>
          <p className="text-lg mb-8">
            Book your service today and experience the best in car care.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/book-service")}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Book Appointment Now
          </motion.button>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* About Us */}
            {/* <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                AutoCarCarePoint is your trusted partner for high-quality car servicing and repairs. We are committed to keeping your vehicle in top condition.
              </p>
            </div> */}

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm text-gray-400">
                <li className="mb-2">
                  <a href="/" className="hover:text-pink-500 transition">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/services" className="hover:text-pink-500 transition">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="hover:text-pink-500 transition">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/privacy-policy" className="hover:text-pink-500 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="text-sm text-gray-400">
                <li className="mb-2">Email: TreowTreeFoundation@gmail.com</li>
                <li className="mb-2">Phone:  +91 8793939848</li>
                <li className="mb-2">Address: SN 53/1/1A/1A/1, Tamarind Park, Flat 1-702,Dhayari,Havell,Pune,Maharashtra,411041</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TreowTreeFoundation. All rights reserved.</p>
            <p className="mt-2">
              <a href="/cookie-policy" className="hover:text-pink-500 transition">
                Cookie Policy
              </a>
              {" | "}
              <a href="/terms" className="hover:text-pink-500 transition">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

const services = [
  {
    icon: BookOpen,
    title: "Vocational Training & Employment",
    description: "Equipping individuals with skills for sustainable livelihoods through hands-on training and job opportunities.",
  },
  {
    icon: Leaf,
    title: "Environmental Conservation",
    description: "Promoting eco-friendly practices and sustainable development to preserve nature and maintain ecological balance.",
  },
  {
    icon: FileText,
    title: "Social Research & Advocacy",
    description: "Conducting studies and research on key social issues to drive meaningful policy changes and improvements.",
  },
  {
    icon: Speaker,
    title: "Awareness Campaigns",
    description: "Spreading knowledge and mobilizing communities through educational programs and public outreach initiatives.",
  },
];


const whyChooseUs = [
  "Certified and experienced technicians",
  "Affordable and transparent pricing",
  "High-quality parts and materials",
  "24/7 customer support",
  "Convenient online booking",
];

const testimonials = [
  {
    feedback: "AutoCarCarePoint is the best! They fixed my car quickly and at a great price.",
    name: "John Doe",
    role: "Car Owner",
    avatar: "/avatar1.jpg",
  },
  {
    feedback: "Highly recommend their brake repair service. Very professional and reliable.",
    name: "Jane Smith",
    role: "Car Enthusiast",
    avatar: "/avatar2.jpg",
  },
  {
    feedback: "Excellent customer service and quick turnaround time. Will definitely return!",
    name: "Mike Johnson",
    role: "Business Owner",
    avatar: "/png3.avif",
  },
];

export default HomePage;
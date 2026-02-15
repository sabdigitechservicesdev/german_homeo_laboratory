// app/page.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaUserMd,
  FaRegCheckCircle,
  FaStar,
  FaQuoteRight,
  FaShieldAlt,
  FaLeaf,
  FaHeartbeat,
  FaBaby,
  FaFemale,
  FaBrain,
  FaAllergies,
  FaStethoscope,
  FaRegCalendarAlt,
  FaAward,
  FaUsers,
  FaHandHoldingHeart,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaVenusMars,
  FaMale,
  FaClinicMedical,
  FaBookMedical,
  FaNotesMedical,
  FaUserNurse,
  FaStarOfLife,
  FaRibbon,
  FaHandHoldingMedical,
  FaUserMd as FaUserDoctor,
  FaGraduationCap,
  FaIdCard,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  MdOutlineHealthAndSafety,
  MdOutlineLocalHospital,
  MdOutlineMedicalServices,
  MdOutlineChildCare,
} from "react-icons/md";
import { GiHealing, GiScales, GiSkullSignet, GiMedicines, GiHealthNormal, GiYinYang } from "react-icons/gi";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const treatmentsRef = useRef(null);
  const statsRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const philosophyRef = useRef(null);
  const achievementsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const doctorsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const treatmentsInView = useInView(treatmentsRef, { once: true, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const philosophyInView = useInView(philosophyRef, { once: true, amount: 0.3 });
  const achievementsInView = useInView(achievementsRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.1 });
  const doctorsInView = useInView(doctorsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate timeline
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const treatments = [
    {
      icon: <GiHealing className="w-6 h-6" />,
      category: "Gastro & Rectal",
      items: ["Piles", "Fistula", "Hernia", "Hydrocele", "Liver Problems"],
      color: "from-emerald-500 to-teal-500",
      description: "Complete digestive and rectal care with natural remedies",
    },
    {
      icon: <FaFemale className="w-6 h-6" />,
      category: "Women's Health",
      items: [
        "Uterine Fibroid",
        "Ovarian Cyst",
        "Infertility",
        "Breast Tumor",
        "All Female Diseases",
      ],
      color: "from-rose-500 to-pink-500",
      description: "Specialized care for women's wellness and reproductive health",
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      category: "Neurology & Ortho",
      items: [
        "Paralysis",
        "Parkinsonism",
        "Sciatica",
        "Spondylitis",
        "Arthritis",
      ],
      color: "from-blue-500 to-indigo-500",
      description: "Advanced treatment for neurological and orthopedic conditions",
    },
    {
      icon: <GiScales className="w-6 h-6" />,
      category: "Skin & Hair",
      items: ["Hair Loss", "Psoriasis", "Leucoderma", "Eczema", "Allergy"],
      color: "from-purple-500 to-violet-500",
      description: "Restoring natural beauty with holistic skin and hair care",
    },
    {
      icon: <FaHeartbeat className="w-6 h-6" />,
      category: "Chronic Diseases",
      items: [
        "Diabetes",
        "Cholesterol",
        "Asthma",
        "Kidney Stone",
        "Cancer Support",
      ],
      color: "from-amber-500 to-orange-500",
      description: "Managing chronic conditions with constitutional treatment",
    },
    {
      icon: <GiSkullSignet className="w-6 h-6" />,
      category: "Sexual Health",
      items: [
        "Male Sexual Disorders",
        "Female Sexual Disorders", 
        "Premature Ejaculation",
        "Low Libido",
        "Erectile Dysfunction",
        "Infertility",
      ],
      color: "from-rose-600 to-pink-600",
      description: "Confidential & effective treatment for all sexual health concerns",
    },
    {
      icon: <FaBaby className="w-6 h-6" />,
      category: "Child & Mental",
      items: ["Autism", "A.D.H.D", "Anxiety", "Depression"],
      color: "from-cyan-500 to-sky-500",
      description: "Gentle care for children and mental wellness support",
    },
  ];

  const testimonials = [
    {
      name: "Smt. Rina Das",
      location: "Salap",
      text: "Dr. Patra treated my uterine fibroid without surgery. After 6 months of treatment, the fibroid size reduced significantly. Very grateful!",
      rating: 5,
      treatment: "Uterine Fibroid",
      date: "March 2025",
    },
    {
      name: "Mr. Subrata Ghosh",
      location: "Dakshineswar",
      text: "Best homeopathy doctor in Howrah. My father's paralysis condition improved remarkably. Professional and caring approach.",
      rating: 5,
      treatment: "Paralysis",
      date: "February 2025",
    },
    {
      name: "Mr. Rajib Mondal",
      location: "Ranihati",
      text: "I was suffering from premature ejaculation for 5 years. Dr. Patra's treatment was gentle and effective. Now I'm completely satisfied with the results.",
      rating: 5,
      treatment: "Sexual Disorder",
      date: "January 2025",
    },
    {
      name: "Mrs. Mousumi Pal",
      location: "Ranihati",
      text: "I was suffering from severe hair loss. Dr. Patra's treatment was gentle and effective. My hair is healthier now.",
      rating: 5,
      treatment: "Hair Loss",
      date: "December 2025",
    },
    {
      name: "Sri. Amal Kr. Das",
      location: "Howrah",
      text: "After years of suffering from arthritis, I finally found relief with Dr. Patra's treatment. Highly recommended!",
      rating: 5,
      treatment: "Arthritis",
      date: "November 2025",
    },
    {
      name: "Mr. Suman Ghosh",
      location: "Dakshineswar",
      text: "I had low libido issues affecting my marriage. Dr. Patra's personalized treatment helped me regain my confidence. Thank you doctor!",
      rating: 5,
      treatment: "Sexual Health",
      date: "October 2025",
    },
  ];

  const stats = [
    { icon: <FaUserMd />, value: 15, suffix: "+", label: "Years Experience" },
    { icon: <MdOutlineLocalHospital />, value: 50, suffix: "K+", label: "Patients Treated" },
    { icon: <FaLeaf />, value: 100, suffix: "%", label: "Natural Treatment" },
    { icon: <FaStar />, value: 4.9, suffix: "/5", label: "Patient Rating" },
    { icon: <GiMedicines />, value: 200, suffix: "+", label: "Homeopathic Remedies" },
    { icon: <FaUsers />, value: 15, suffix: "+", label: "Staff Members" },
  ];

  const philosophy = [
    {
      icon: <GiYinYang className="text-4xl" />,
      title: "Holistic Healing",
      description: "We treat the whole person, not just the disease. Our approach addresses physical, mental, and emotional well-being.",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Natural Remedies",
      description: "100% natural, side-effect free medicines prepared from pure plant, mineral, and animal sources.",
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Root Cause Treatment",
      description: "We dig deep to find and eliminate the root cause of your health issues, not just mask symptoms.",
    },
    {
      icon: <FaUserMd className="text-4xl" />,
      title: "Personalized Care",
      description: "Every patient receives a customized treatment plan based on their unique constitution and symptoms.",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Foundation",
      description: "German Homoeo Laboratory was established in Salap, Howrah with a vision to provide authentic homeopathic care.",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Opened second branch in Ranihati to serve more patients in the community.",
    },
    {
      year: "2015",
      title: "Recognition",
      description: "Received 'Best Homeopathic Clinic' award from Howrah Medical Association.",
    },
    {
      year: "2018",
      title: "Dakshineswar Branch",
      description: "Expanded services to Dakshineswar to reach patients across the Hooghly river.",
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Launched online consultation services and digital health records for better patient care.",
    },
    {
      year: "2025",
      title: "15 Years of Healing",
      description: "Completed 15 years of serving the community with over 50,000 happy patients.",
    },
  ];

  const achievements = [
    { icon: <FaAward />, count: 8, label: "Medical Awards" },
    { icon: <FaUsers />, count: 50, suffix: "K+", label: "Happy Patients" },
    { icon: <FaStar />, count: 15, label: "Years of Excellence" },
    { icon: <GiMedicines />, count: 200, suffix: "+", label: "Remedies" },
    { icon: <FaClinicMedical />, count: 3, label: "Branches" },
    { icon: <FaBookMedical />, count: 25, suffix: "+", label: "Research Papers" },
  ];

  const doctors = [
    {
      name: "Dr. S. Patra",
      qualification: "DHMS (KOL)",
      registration: "",
      expertise: "Founder & Chief Homeopath",
      color: "from-teal-600 to-emerald-600",
    },
    {
      name: "Dr. S. Mondal",
      qualification: "BHMS (KOL)",
      registration: "",
      expertise: "Senior Homeopath",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Dr. J.K. Bhuniya",
      qualification: "BHMS (CU)",
      registration: "Reg No: 19727",
      expertise: "Consultant Homeopath",
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Dr. R.K. Chalki",
      qualification: "DHMS (CAL)",
      registration: "",
      expertise: "Associate Homeopath",
      color: "from-amber-600 to-orange-600",
    },
  ];

  const faqs = [
    {
      question: "Is homeopathy treatment safe?",
      answer: "Yes, homeopathy is completely safe with no side effects. Our medicines are prepared from natural substances and are suitable for all age groups including infants, pregnant women, and elderly.",
    },
    {
      question: "How long does treatment take?",
      answer: "Treatment duration varies depending on the condition. Acute conditions may show improvement in days, while chronic conditions may take several months. We provide realistic timelines during consultation.",
    },
    {
      question: "Do you offer online consultation?",
      answer: "Yes, we offer online consultations via video calls. Patients can book appointments and consult with Dr. Patra from the comfort of their homes.",
    },
    {
      question: "Is sexual health treatment confidential?",
      answer: "Absolutely. We maintain strict confidentiality for all patients, especially those seeking treatment for sexual health issues. Your privacy is our priority.",
    },
    {
      question: "What is your success rate?",
      answer: "With over 50,000 patients treated in 15 years, we have a proven track record. Many chronic conditions show significant improvement with constitutional treatment.",
    },
    {
      question: "Do you provide medicines by post?",
      answer: "Yes, we can courier medicines to your address. After online consultation, medicines are dispatched within 24-48 hours.",
    },
  ];

  const gallery = [
    { src: "/img/1.png", alt: "Clinic Reception", category: "Interior" },
    { src: "/img/2.png", alt: "Consultation Room", category: "Interior" },
    { src: "/img/3.png", alt: "Dr. Patra with Patient", category: "Consultation" },
    { src: "/img/4.png", alt: "Clinic Exterior", category: "Exterior" },
    { src: "/img/5.png", alt: "Pharmacy Area", category: "Facility" },
    { src: "/img/6.png", alt: "Waiting Area", category: "Facility" },
    { src: "/img/7.png", alt: "Treatment Room", category: "Interior" },
    { src: "/img/8.png", alt: "Staff with Patient", category: "Team" },
    { src: "/img/9.png", alt: "Clinic Building", category: "Exterior" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Appointment Request*%0A%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Email:* ${formData.email || 'Not provided'}%0A
*Treatment:* ${formData.treatment}%0A
*Message:* ${formData.message || 'No message'}%0A%0A
*Source:* Website Contact Form`;
    
    const whatsappNumber = "919836121681";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: "", phone: "", email: "", treatment: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Dr. Patra, I would like to inquire about homeopathic treatment.`;
    const whatsappNumber = "919836121681";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = "tel:09836121681";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-50 overflow-x-hidden">
      {/* Premium Loader Animation */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 z-[60]"
          />
        )}
      </AnimatePresence>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <FaPhone />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <FaWhatsapp />
        </motion.button>
      </div>

      {/* Decorative Blurs */}
      <div className="fixed -top-20 -left-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="fixed -bottom-20 -right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-200/10 to-emerald-200/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div>
              <h1 className="font-bold text-teal-600 text-xl">German Homoeo</h1>
              <p className="text-xs text-gray-500">Laboratory • Est. 2008</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Doctors', 'Treatments', 'Gallery', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 hover:text-teal-600 transition font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book Appointment
            </motion.a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-teal-600"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/90 backdrop-blur-xl mt-4"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-4">
                {['Home', 'About', 'Doctors', 'Treatments', 'Gallery', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-teal-600 transition font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#appointment"
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="max-w-xl order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-50 text-teal-600 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-5 border border-teal-100 mx-auto lg:mx-0"
              >
                <FaShieldAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                Reg. No: 23368 • DHMS (KOL) • 15+ Years
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-3"
              >
                German Homoeo
                <span className="block text-teal-600 mt-0.5 sm:mt-1">Laboratory</span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="mb-3 sm:mb-4"
              >
                <p className="text-lg sm:text-xl text-gray-800 font-semibold">Dr. S. Patra & Team</p>
                <p className="text-sm sm:text-base text-gray-500">Leading Homeopaths in Howrah Region</p>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed"
              >
                Expert in{" "}
                <span className="font-semibold text-teal-600">
                  Sexual Disorders, Infertility & Chronic Diseases
                </span>
                <br />
                Serving{' '}
                <span className="font-semibold text-teal-600">
                  Howrah, Ranihati, Salap & Dakshineswar
                </span>{" "}
                since 2008
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={handleCallClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FaPhone className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Call Now
                </motion.button>
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FaWhatsapp className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> WhatsApp
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-teal-500 text-teal-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-teal-50 transition-all duration-300 text-center font-medium text-sm sm:text-base"
                >
                  Branches
                </motion.a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaRegCheckCircle className="text-teal-600" /> ISO Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaRegCheckCircle className="text-teal-600" /> Govt. Registered
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaRegCheckCircle className="text-teal-600" /> 50K+ Patients
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] lg:w-[470px]">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-teal-500/10 rounded-full blur-xl lg:blur-2xl hidden sm:block"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -left-6 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-emerald-500/10 rounded-full blur-xl lg:blur-2xl hidden sm:block"
                />

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src="/dr1.png"
                    alt="Dr. S. Patra - Homeopathic Doctor"
                    width={470}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 470px"
                  />

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={heroInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 shadow-lg border border-white/50"
                  >
                    <p className="text-teal-600 font-bold text-xs sm:text-sm lg:text-lg">15+</p>
                    <p className="text-gray-600 text-[8px] sm:text-[9px] lg:text-[10px] leading-tight">Years of<br />Excellence</p>
                  </motion.div>

                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={heroInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3 shadow-lg border border-white/50"
                  >
                    <p className="text-teal-600 font-bold text-xs sm:text-sm lg:text-lg">50K+</p>
                    <p className="text-gray-600 text-[8px] sm:text-[9px] lg:text-[10px] leading-tight">Happy<br />Patients</p>
                  </motion.div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold rotate-6 hidden xs:flex"
                >
                  ⚕️
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold -rotate-6 hidden xs:flex"
                >
                  🌿
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-4 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border border-white/50"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl mb-2 flex justify-center text-teal-600"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-xl font-bold text-gray-800">
                  {statsInView && (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} />
                  )}
                </div>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              About <span className="text-teal-600">German Homoeo Laboratory</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Serving the community with authentic homeopathic care since 2008. 
              Led by Dr. S. Patra & Team, we've helped over 50,000 patients find natural healing.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                German Homoeo Laboratory was founded in 2008 by Dr. S. Patra with a simple mission: 
                to provide authentic, affordable, and effective homeopathic care to the people of Howrah 
                and surrounding regions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small clinic in Salap has now grown into a trusted healthcare institution 
                with multiple branches serving Ranihati, Salap, and Dakshineswar. Our team of experienced 
                homeopaths work together to provide comprehensive care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in treating chronic conditions including sexual disorders, female diseases, 
                skin problems, and neurological issues. Our approach combines classical homeopathic principles 
                with modern diagnostic techniques for optimal results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 text-center">
                <FaClinicMedical className="text-4xl text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">3 Branches</h4>
                <p className="text-sm text-gray-600">Across Howrah Region</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 text-center">
                <GiMedicines className="text-4xl text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">200+ Remedies</h4>
                <p className="text-sm text-gray-600">In-house Pharmacy</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 text-center">
                <FaUserMd className="text-4xl text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">4+ Doctors</h4>
                <p className="text-sm text-gray-600">Qualified Homeopaths</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 text-center">
                <FaLeaf className="text-4xl text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">100% Natural</h4>
                <p className="text-sm text-gray-600">No Side Effects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section ref={doctorsRef} id="doctors" className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={doctorsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Expert Doctors</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Experienced and qualified homeopathic practitioners dedicated to your wellness
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-white/50"
              >
                <div className={`h-2 bg-gradient-to-r ${doctor.color}`} />
                <div className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                    <FaUserDoctor className="text-3xl text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-2">{doctor.qualification}</p>
                  {doctor.registration && (
                    <p className="text-xs text-gray-500 mb-2 flex items-center justify-center gap-1">
                      <FaIdCard className="text-teal-500" /> {doctor.registration}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 bg-teal-50 rounded-full px-3 py-1 inline-block">
                    {doctor.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Healing Philosophy</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/50 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={processRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Journey</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
            />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8`}
                  onMouseEnter={() => setActiveTimeline(idx)}
                >
                  {/* Year Badge */}
                  <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 ${
                      activeTimeline === idx ? 'ring-2 ring-teal-500' : ''
                    }`}>
                      <span className="text-3xl font-bold text-teal-600">{item.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 transition-all duration-300 ${
                      activeTimeline === idx ? 'scale-105 shadow-xl' : ''
                    }`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                    activeTimeline === idx ? 'bg-teal-600 scale-150' : 'bg-teal-400'
                  } transition-all duration-300 hidden lg:block`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Achievements</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={achievementsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 text-center"
              >
                <div className="text-3xl text-teal-600 mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-gray-800">
                  <CountUp end={item.count} duration={2.5} suffix={item.suffix || ''} />
                </div>
                <p className="text-xs text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sexual Health Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
                  Sexual Health Specialist
                </h3>
                <p className="text-xl mb-2">Confidential & Effective Treatment for:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Male Disorders</span>
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Female Disorders</span>
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Premature Ejaculation</span>
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Erectile Dysfunction</span>
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Low Libido</span>
                  <span className="bg-white/20 rounded-full px-4 py-2 text-sm">Infertility</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleCallClick}
                  className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaPhone /> Call for Consultation
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section ref={treatmentsRef} id="treatments" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={treatmentsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Specialized Treatments</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Advanced homeopathic treatment for various chronic and acute conditions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={treatmentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveTreatment(idx)}
                onHoverEnd={() => setActiveTreatment(null)}
                className={`bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-white/50 ${
                  category.category === "Sexual Health" ? "ring-2 ring-rose-500 ring-offset-2" : ""
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={activeTreatment === idx ? { rotate: 360 } : {}}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 flex items-center justify-center text-xl`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category.category}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={treatmentsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3 text-gray-700 group"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-150 transition-all`}
                        />
                        <span className="text-sm group-hover:translate-x-2 transition-all">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-teal-600">Clinic Gallery</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"
            />
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Take a virtual tour of our facilities
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => openLightbox(idx)}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white/70 backdrop-blur-xl border border-white/50 aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => openLightbox(0)}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              View All Photos
            </button>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all"
              >
                <FaTimes />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl z-[110] w-14 h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl z-[110] w-14 h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all"
              >
                ›
              </button>

              <div className="absolute top-6 left-6 text-white/80 bg-black/50 px-4 py-2 rounded-full text-sm z-[110]">
                {currentImageIndex + 1} / {gallery.length}
              </div>

              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={gallery[currentImageIndex].src}
                  alt={gallery[currentImageIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm z-[110]">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-teal-500 w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              What Our <span className="text-teal-600">Patients Say</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 relative"
              >
                <FaQuoteRight className="absolute top-6 right-6 text-3xl text-teal-600 opacity-20" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-xs text-teal-600">{testimonial.location}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <p className="text-gray-600 mb-3 text-sm italic">"{testimonial.text}"</p>

                <div className={`inline-block px-3 py-1 rounded-full text-xs ${
                  testimonial.treatment.includes("Sexual") 
                    ? "bg-rose-100 text-rose-600" 
                    : "bg-teal-100 text-teal-600"
                }`}>
                  Treated for: {testimonial.treatment}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Frequently Asked <span className="text-teal-600">Questions</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"
            />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border border-white/50 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className="text-teal-600 text-xl">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Book Your <span className="text-teal-600">Appointment</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Take the first step towards natural healing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50"
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition bg-white/50 backdrop-blur-sm"
                  placeholder="+91 00000 00000"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition bg-white/50 backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Treatment Required *
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select treatment</option>
                  <option value="Male Sexual Disorder">Male Sexual Disorder</option>
                  <option value="Female Sexual Disorder">Female Sexual Disorder</option>
                  <option value="Premature Ejaculation">Premature Ejaculation</option>
                  <option value="Erectile Dysfunction">Erectile Dysfunction</option>
                  <option value="Low Libido">Low Libido</option>
                  <option value="Infertility">Infertility</option>
                  <option value="Piles">Piles & Fistula</option>
                  <option value="Female">Female Diseases</option>
                  <option value="Hair">Hair Loss</option>
                  <option value="Arthritis">Arthritis</option>
                  <option value="Skin">Skin Disorders</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="md:col-span-2"
              >
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition bg-white/50 backdrop-blur-sm"
                  placeholder="Briefly describe your health concern... (Private & Confidential)"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="md:col-span-2 text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-12 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <FaWhatsapp className="text-xl" /> Send via WhatsApp
                </motion.button>
                <p className="text-xs text-gray-500 mt-3">
                  Your information will be sent directly via WhatsApp. 100% confidential.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-teal-600">Branches</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Visit us at any of our convenient locations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Ranihati Branch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaMapMarkerAlt /> Ranihati Branch
                </h3>
                <p className="text-white/90 text-sm mt-1">Open Everyday</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Address</h4>
                    <p className="text-gray-600 text-sm">
                      Ranihati, Howrah
                      <br />West Bengal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Timings</h4>
                    <p className="text-gray-600 text-sm">Everyday, 10:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="h-[200px] rounded-xl overflow-hidden shadow-lg mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3684.3800898131767!2d88.15619017530025!3d22.56488327949736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMzJzUzLjYiTiA4OMKwMDknMzEuNiJF!5e0!3m2!1sen!2sin!4v1771013027015!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Salap Branch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaMapMarkerAlt /> Salap Branch
                </h3>
                <p className="text-white/90 text-sm mt-1">Main Clinic • Open Everyday</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Address</h4>
                    <p className="text-gray-600 text-sm">
                      High Road Crossing, NH-6, Near Hayat Restaurant,
                      <br />Salap, Howrah, West Bengal – 711409
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Timings</h4>
                    <p className="text-gray-600 text-sm">Everyday, 10:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="h-[200px] rounded-xl overflow-hidden shadow-lg mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3683.0771994619395!2d88.26783897530171!3d22.613592179462508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM2JzQ4LjkiTiA4OMKwMTYnMTMuNSJF!5e0!3m2!1sen!2sin!4v1771160750488!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Dakshineswar Branch */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaMapMarkerAlt /> Dakshineswar Branch
                </h3>
                <p className="text-white/90 text-sm mt-1">Tuesday, Thursday, Saturday</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Address</h4>
                    <p className="text-gray-600 text-sm">
                      Dakshineswar, Kolkata
                      <br />West Bengal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Timings</h4>
                    <p className="text-gray-600 text-sm">Tuesday, Thursday, Saturday • 2:00 PM - 7:00 PM</p>
                  </div>
                </div>

                <div className="h-[200px] rounded-xl overflow-hidden shadow-lg mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.992871988997!2d88.36084377530291!3d22.654054379433845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM5JzE0LjYiTiA4OMKwMjEnNDguMyJF!5e0!3m2!1sen!2sin!4v1771013107055!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Information Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-gray-500">Call Us</p>
                <p className="text-base font-bold text-teal-600">098361 21681</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-xs text-gray-500">WhatsApp</p>
                <p className="text-base font-bold text-green-600">098361 21681</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <FaUserMd />
              </div>
              <div>
                <p className="text-xs text-gray-500">Registration</p>
                <p className="text-sm font-bold text-gray-800">Dr. S. Patra</p>
                <p className="text-[10px] text-gray-500">DHMS (KOL) • Reg. No: 23368</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  GHL
                </div>
                <div>
                  <h3 className="text-lg font-bold">German Homoeo</h3>
                  <p className="text-gray-400 text-xs">Laboratory • Est. 2008</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Trusted homeopathic care in Howrah, Ranihati, Salap & Dakshineswar. 
                Specialized in Sexual Health, Infertility & Chronic Diseases.
              </p>
              <div className="flex space-x-3">
                {[FaPhone, FaWhatsapp, HiOutlineLocationMarker].map((Icon, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 cursor-pointer"
                    onClick={idx === 0 ? handleCallClick : idx === 1 ? handleWhatsAppClick : undefined}
                  >
                    <Icon className="text-sm" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Doctors", "Treatments", "Gallery", "Contact"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
                    >
                      <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Our Branches</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-teal-500 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-white">Ranihati:</span>
                    <br />Ranihati, Howrah
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-white">Salap:</span>
                    <br />High Road Crossing, NH-6, Salap
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-purple-500 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-white">Dakshineswar:</span>
                    <br />Dakshineswar, Kolkata (Tue, Thu, Sat)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 text-sm mb-3">
                Get health tips and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:border-teal-500 text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-2 rounded-r-lg text-sm font-medium"
                >
                  Go
                </motion.button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2026 German Homoeo Laboratory. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Your health is our priority. Heal naturally with homeopathy.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
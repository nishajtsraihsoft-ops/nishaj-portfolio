import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGithub,
    FaNodeJs,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaInstagram,
    FaWhatsapp,
    FaBootstrap,
    FaPaintBrush,
    FaFileExcel,
    FaFileWord,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import profilePic from "../assets/nishaj1.png";
import aboutPic from "../assets/nishajlapphoto - Copy.jpeg";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0d1117] text-white font-poppins">
            {/* Navbar */}
            <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800 relative">
                <h1 className="text-2xl font-bold text-teal-400">Nishaj</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-gray-300">
                    <a href="#home" className="hover:text-teal-400">Home</a>
                    <a href="#about" className="hover:text-teal-400">About</a>
                    <a href="#skills" className="hover:text-teal-400">Skills</a>
                    <a href="#contact" className="hover:text-teal-400">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden border border-gray-600 px-3 py-1 rounded text-xl"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 w-full bg-[#0f141a] flex flex-col items-center space-y-4 py-6 border-t border-gray-800 md:hidden z-50"
                        >
                            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-teal-400"
                                >
                                    {link}
                                </a>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero Section */}
            <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center px-10 py-16 md:py-24 gap-10">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-center md:text-left space-y-5"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hello <br />
                        I'm <span className="text-teal-400">Nishaj</span><br />
                        <span className="text-gray-300">Software Engineer ,</span><br/>
                         <span className="text-gray-300">Accounting Associate</span>
                    </h2>

                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="https://wa.me/917034871922?text=Hello%20Nishaj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-teal-400 transition"
                        >
                            Let’s Connect
                        </a>

                        <a
                            href="/nishajrasume.pdf"
                            className="border border-teal-500 px-6 py-3 rounded-lg text-teal-400 font-semibold hover:bg-teal-500 hover:text-white transition"
                        >
                            My Resume
                        </a>

                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-teal-500 blur-xl opacity-40 animate-pulse"></div>
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-teal-400 object-cover shadow-lg"
                        />
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="px-10 py-20 md:py-28 bg-[#0d1117]">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-center text-teal-400 mb-10"
                >
                    About Me
                </motion.h3>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Profile Image (Square) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-2xl bg-teal-500 blur-xl opacity-40 animate-pulse"></div>
                            <img
                                src={aboutPic}
                                alt="Nishaj"
                                className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl border-4 border-teal-400 object-cover shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-2/3 text-gray-300 space-y-5 text-center md:text-left"
                    >
                        <p className="text-lg leading-relaxed">
                            Hi, I'm <span className="text-teal-400 font-semibold">Nishaj</span>, a
                            passionate <span className="text-teal-400">Front-End Developer</span> focused on designing and developing responsive, modern, and user-friendly websites using React, HTML, CSS, JavaScript, and Tailwind CSS.
                        </p>

                        <p className="text-gray-400">
                            I also have a strong commerce background and work as an <span className="text-teal-400 font-semibold">Accountancy Teacher</span>, with solid knowledge in <span className="text-teal-400 font-semibold">Financial Accounting</span> and <span className="text-teal-400 font-semibold">Final Accounts</span>. This foundation enhances my analytical thinking, accuracy, and <span className="text-teal-400 font-semibold">Problem-Solving</span> abilities.
                        </p>


                        <p className="text-gray-400">
                            By combining <span className="text-teal-400 font-semibold">Web Development</span> with <span className="text-teal-400 font-semibold">Accountancy</span> expertise, I bring a structured and practical approach to my work. I am committed to continuous learning, improving UI design, and enhancing both my technical and professional skills.
                        </p>




                        {/* Stats / Highlights */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-10 text-center">
                            <div>
                                <h4 className="text-4xl font-bold text-teal-400">30+</h4>
                                <p className="text-gray-400">Completed Projects</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-teal-400">95%</h4>
                                <p className="text-gray-400">Client Satisfaction</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-teal-400">1+</h4>
                                <p className="text-gray-400">Years Experience</p>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <div className="pt-8">
                            <a
                                href="/nishajrasume.pdf"
                                className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition"
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="services" className="bg-[#0f141a] py-20 px-10 text-center">
                <h3 className="text-3xl font-semibold text-teal-400 mb-10">Services</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">



                    {/* Web Developing */}
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Web Developing</h4>
                        <p className="text-gray-400 text-sm">
                            Responsive and user-friendly websites built using React, HTML, CSS, and JavaScript.
                        </p>
                    </div>

                    {/* Accounting */}
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Accounting</h4>
                        <p className="text-gray-400 text-sm">
                            I come from a commerce background with basic skills in bookkeeping, billing, and account management.                    </p>
                    </div>

                    {/* Teaching */}
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Teaching</h4>
                        <p className="text-gray-400 text-sm">
                            Commerce teacher with strong accounting skills, helping students build a solid foundation.                        </p>
                    </div>
                    {/* Teaching */}
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Exam Preparation & Coaching</h4>
                        <p className="text-gray-400 text-sm">
                            Exam-oriented coaching for commerce and accountancy students with focused problem-solving and revision sessions.                        </p>
                    </div>
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Final Accounts Preparation</h4>
                        <p className="text-gray-400 text-sm">
                            Accurate preparation of Trading Account, Profit & Loss Account, and Balance Sheet with strong conceptual clarity.                        </p>
                    </div>
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Online <br />Coaching</h4>
                        <p className="text-gray-400 text-sm">
                            Online accountancy classes for Plus One and Plus Two students with clear and easy explanations                        </p>
                    </div>
                    {/* Graphic Designing */}
                    <div className="bg-[#1a1f25] p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                        <h4 className="text-xl font-semibold text-white mb-3">Graphic Designing</h4>
                        <p className="text-gray-400 text-sm">
                            Posters, logos, banners, social media creatives and more.
                        </p>
                    </div>
                </div>


            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-[#0f141a] py-20 px-10 text-center">
                <h3 className="text-3xl font-semibold text-teal-400 mb-10">Skills</h3>
                <div className="flex flex-wrap justify-center gap-8 text-gray-300">
                    {[
                        { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
                        { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
                        { icon: <SiJavascript size={40} className="text-yellow-400" />, name: "JavaScript" },
                        { icon: <FaReact size={40} className="text-blue-400" />, name: "React" },
                        { icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
                        { icon: <FaGithub size={40} className="text-gray-400" />, name: "GitHub" },
                        { icon: <FaBootstrap size={40} className="text-blue-400" />, name: "Bootstrap" },
                        { icon: <FaPaintBrush size={40} className="text-purple-400" />, name: "Canva" },
                        { icon: <FaFileExcel size={40} className="text-green-400" />, name: "Excel" },
                        { icon: <FaFileWord size={40} className="text-blue-400" />, name: "Word" },


                    ].map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center space-y-2 border border-gray-700 rounded-xl p-6 w-32 hover:bg-[#1a1f25] transition"
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            {/* <section id="projects" className="px-10 py-20 bg-[#0d1117] text-center">
                <h3 className="text-3xl font-semibold text-teal-400 mb-10">Projects</h3>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {[1, 2, 3].map((num) => (
                        <motion.div
                            key={num}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#0f141a] border border-gray-700 rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="h-40 bg-gray-800"></div>
                            <div className="p-5 text-left">
                                <h4 className="text-xl font-semibold text-teal-400">Project {num}</h4>
                                <p className="text-gray-400 mt-2">
                                    A brief description of Project {num} showcasing my work and creativity.
                                </p>
                                <button className="mt-4 text-sm text-teal-400 hover:underline">
                                    View Details →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* Contact Section */}
            <section id="contact" className="bg-[#0f141a] py-20 px-10 text-center">
                <h3 className="text-3xl font-semibold text-teal-400 mb-10">Contact</h3>
                <div className="max-w-xl mx-auto space-y-6">

                    {/* Contact Form */}
                    <form
                        action="mailto:sijunishaj94@gmail.com"
                        method="POST"
                        encType="text/plain"
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-[#1a1f25] border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-[#1a1f25] border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500"
                        />

                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-[#1a1f25] border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold w-full"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex justify-center gap-6 text-gray-400 mt-8">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-teal-400" /> tsnishajmuhammed70@gmail.com
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 text-gray-400 mt-8">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-teal-400" /> +91 7034871922
                        </div>
                    </div>


                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-6">
                        {[
                            { icon: <FaWhatsapp />, link: "https://wa.me/917034871922?text=Hello%20Nishaj!" },
                            { icon: <FaEnvelope />, link: "mailto:tsnishajmuhammed70@gmail.com" },
                            { icon: <FaTwitter />, link: "#" },
                            { icon: <FaInstagram />, link: "https://www.instagram.com/m_nish_aj?igsh=MWRkcm44Z21rZ3l3Ng==" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2 }}
                                className="text-gray-400 hover:text-teal-400 text-2xl transition"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                </div>
            </section>


            {/* Footer */}
            <footer className="py-6 text-center border-t border-gray-800 text-gray-500 text-sm">
                ©  Nishaj — All Rights Reserved.
            </footer>
        </div>
    );
}

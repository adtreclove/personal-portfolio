import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from "react-responsive";
import './App.css';
import demoshopgif from './assets/flutter-demo-shop.gif';
import projectThumbnail from './assets/spacedout.png';
import questsystemthumbnail from './assets/questsystem.png';
import desktopComanion from './assets/desktop-companion.png';
import pythonLogo from './assets/python-logo.png';
import dungeonSwitchTumbnail from './assets/dungeon-switch.jpg';



// Portfolio single-file React component (TailwindCSS required)


const SPLINE_SCENE_URL = 'https://prod.spline.design/IpT7wVcltCteByV8/scene.splinecode';

export default function Portfolio() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [scrolled, setScrolled] = useState(false);
    const splineWrapperRef = useRef(null);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log("scroll:", window.scrollY);
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        const el = splineWrapperRef.current;
        if (!el) return;

        const stopSplineFromCapturingScroll = (e) => {
            e.stopPropagation();
        };

        el.addEventListener('wheel', stopSplineFromCapturingScroll, { capture: true, passive: true });
        return () => {
            el.removeEventListener('wheel', stopSplineFromCapturingScroll, { capture: true });
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white antialiased">
            {/* Global color variables */}
            <style>
                {`
                :root{
                  --accent-pink: #FF2D95; /* bright pink */
                  --anthrazit: #18181B; /* anthrazit/dark gray */
                  --muted-white: rgba(255,255,255,0.9);
                }
                .hide-scrollbar::-webkit-scrollbar{
                  display: none;
                }
                .hide-scrollbar{
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                 `}
        </style>
            <header     className={`fixed w-full z-40 backdrop-blur-md transition-all duration-300 ${
                                    scrolled
                                    ? 'bg-[#18181B]/70 border-b border-pink-500/20 shadow-lg shadow-pink-500/5'
                                    : 'bg-black/40 border-b border-transparent'}`}>
                <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#home" className="text-xl font-semibold tracking-wide" aria-label="Home">
                        <span style={{ color: 'var(--muted-white)' }}>Dev</span>Portfolio
                    </a>

                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#about" className="hover:text-pink-400">About</a>
                        <a href="#projects" className="hover:text-pink-400">Projects</a>
                        <a href="#contact" className="hover:text-pink-400">Contact</a>
                        <motion.div  className=" cursor-pointer rounded-[50px] "
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <a  download="Helena_Kloeckner_CV.pdf" href={`${import.meta.env.BASE_URL}CV_Helena-Kloeckner.pdf`} className="resume-btn">Resume</a>
                        </motion.div>
                       
                    </div>

                    <button
                        className="md:hidden p-2 rounded-md"
                        onClick={() => setMobileOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-black/95">
                        <div className="flex flex-col gap-4 px-6 py-6">
                            <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
                            <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
                            <a href="#resume" className="mt-2 inline-block px-4 py-2 rounded-full border" style={{ borderColor: 'var(--accent-pink)' }} onClick={() => setMobileOpen(false)}>Resume</a>
                        </div>
                    </div>
                )}
            </header>

            <main id="home" className="pt-10">
                {/* Hero */}
                <section className="relative overflow-hidden min-h-[760px] ml-10">

                {/* Spline 3D canvas */}
                                   <div
                     ref={splineWrapperRef}
                     className="
                     absolute
                     top-15
                     right-40
                     w-[62%]
                     h-[770px]
                     z-0
                     scale-[0.75]
                    origin-top-right

                 ">
                     <Spline
                         scene={SPLINE_SCENE_URL}
                         style={{
                             width: '100%',
                             height: '100%',
                         }}
                     />
                 </div>
                       <div className="max-w-6xl mx-auto relative z-10 pointer-events-none">
                            <div className="pt-50 pb-12 max-w-xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0 }}
                                className="text-4xl sm:text-5xl font-extrabold leading-tight"
                            >
                                Hi - My name is <br></br> <span style={{ color: 'var(--accent-pink)' }}>Helena Klöckner</span>.
                                <div className="text-xl font-medium mt-2 text-gray-300">Game & App Developer (Unreal, Unity, Flutter)</div>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 max-w-xl text-gray-300"
                            >
                                I build games, cross-platform mobile apps as well as desktop applications. I hold a Bachelor's in Games Programming and currently working professionally with Flutter for Android, iOS and desktop platforms.
                            </motion.p>

                            <div className="mt-8 flex gap-4 pointer-events-auto">
                                <a href="#projects" className="resume-btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 shadow-lg" style={{ background: 'linear-gradient(90deg,#ff2d95 0%, #ff6fb5 100%)' }}>
                                    View projects
                                </a>
                                <a href="#contact" className="resume-btn inline-flex items-center gap-2 px-5 py-3 rounded-full border" style={{ borderColor: 'var(--accent-pink)' }}>
                                    Get in touch
                                </a>
                            </div>

                            <div className="mt-8 text-sm text-gray-400">Available for full-time roles</div>
                        </div>

                     
                    </div>
                </section>

                {/* About */}
                <section id="about" className="max-w-6xl mx-auto px-6 py-45">
                    {/* About Me Heading + Intro */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2  
                    
                        className="text-3xl font-bold">About me 
                        </h2>
                    <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 text-gray-300 font-MS">
                            I graduated in October 2024 with a Bachelor's degree in Games Programming where I focused on real-time graphics,
                            gameplay systems, and engine-specific tooling for both Unreal Engine and Unity. I now work professionally
                            building cross-platform mobile apps using Flutter — shipping performant apps to Android and iOS. 

                    </motion.p>
                      
                    </div>

                    {/* Skills + Quick Facts grid */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Left: Skills grid */}
                        <div 
                           
                            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true, amount: 0.4 }}
                             transition={{
                               duration: 0.8,
                              
                               ease: [0, 0.71, 0.2, 1.01],
                             }}
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold text-pink-400">Game Engines</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    Unreal Engine: Materials, Blueprints, C++ gameplay systems. Unity: C#, DOTS, custom editors, physics and gameplay code.
                                </p>
                            </motion.div>

                            <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true, amount: 0.4 }}
                             transition={{
                               duration: 0.8,
                              delay: 0.2,
                               ease: [0, 0.71, 0.2, 1.01],
                             }}
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold text-pink-400">Programming Languages and Frameworks</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    Dart & Flutter, C#, basic knowledge in C++. Currently improving JavaScript, TypeScript, React, Electron and Web Development skills.
                                </p>
                            </motion.div>

                            <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true, amount: 0.4 }}
                             transition={{
                               duration: 0.8,
                              delay: 0.4,
                               ease: [0, 0.71, 0.2, 1.01],
                             }}
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold text-pink-400">Flutter (iOS, Android & Desktop)</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    Responsive UI, platform integrations, Riverpod state management, native plugins, developing new features, native Kotlin and Swift development, Rest API implementation, asynchronous programming.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.6,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold text-pink-400">Tools</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    GitLab, Firebase Crashlytics, REST API, App Deployment and Release Management (Google Play Store, Apple App Store), JSON.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right: Quick Facts */}
                        <motion.aside
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className="bg-[#0b0b0c] p-6 rounded-3xl border mt-20"
                            style={{ borderColor: 'rgba(255,45,149,0.06)' }}
                        >
                            <h3 className="font-semibold text-xl text-pink-400">Quick facts</h3>
                            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                                <li>🎓 Bachelor's Degree — Games Programming</li>
                                <li>📱 Flutter — Android, iOS & Desktop</li>
                                <li>🌍 Available: Remote / Relocate</li>
                            </ul>
                        </motion.aside>
                    </div>
                </section>


                {/* Work / Projects */}
                <section id="projects" className="bg-[#080808] py-40">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold">Selected Projects</h2>
                        <p className="text-gray-400 mt-2">A selection of recent work — games, apps and prototypes.</p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {/* Project card 1 */}
                            <article className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <img src={projectThumbnail} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />

                                <h3 className="mt-4 font-semibold">Local Multiplayer Game</h3>
                                <p className="text-sm text-gray-400 mt-2">A local 1 vs. 1 multiplayer shooter game.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Unreal / Blueprints / Network</div>
                                    <a href="https://youtu.be/M5h6SHcGoTM" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>View Gameplay →</a>
                                </div>
                            </article>

                            {/* Project card 2 */}
                            <article className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <img src={demoshopgif} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />
                                <h3 className="mt-4 font-semibold">Flutter Demo Shop</h3>
                                <p className="text-sm text-gray-400 mt-2">A Flutter app integrating a fake e-commerce backend.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Flutter</div>
                                    <a href="https://github.com/adtreclove/flutter-demo-shop" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Code →</a>
                                </div>
                            </article>

                            {/* Project card 3 */}

                            <article className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <img src={desktopComanion} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />
                                <h3 className="mt-4 font-semibold">JavaScript Desktop Companion</h3>
                                <p className="text-sm text-gray-400 mt-2">Building a desktop companion that boosts productivity and helps remember tasks.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">JavaScript / Electron</div>
                                    <a href="https://github.com/adtreclove/desktop-companion/tree/main" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Code →</a>
                                </div>
                            </article>

                    

                            {/* Extra projects - shown when "Show more" is pressed */}
                            <AnimatePresence>
                                {showMoreProjects && (
                                    <>
                                        <motion.article
                                            key="extra-1"
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 24 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border"
                                            style={{ borderColor: 'rgba(255,45,149,0.04)' }}
                                        >
                                        <img src={questsystemthumbnail} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />
                                        <h3 className="mt-4 font-semibold">Unreal Engine Quest System</h3>
                                        <p className="text-sm text-gray-400 mt-2">A working modular Quest Sytstem prototype</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="text-xs text-gray-400">Unreal Engine / C++</div>
                                            <a href="https://github.com/adtreclove/unreal-quest-system" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Code →</a>
                                        </div>
                                        </motion.article>

                                        <motion.article
                                            key="extra-2"
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 24 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border"
                                            style={{ borderColor: 'rgba(255,45,149,0.04)' }}
                                        >
                                               <img src={pythonLogo} alt="Python Logo" className="h-40 w-full object-cover rounded-lg" />
                                            <h3 className="mt-4 font-semibold">Python Motion Detector</h3>
                                            <p className="text-sm text-gray-400 mt-2">Real-time motion detection using Python, OpenCV and Kivy.</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-xs text-gray-400">Python / OpenCV / Kivy</div>
                                                <a href="https://github.com/adtreclove/PythonMotionDetection" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Code →</a>
                                            </div>
                                        </motion.article>

                                        <motion.article
                                            key="extra-3"
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 24 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="w-full max-w-sm bg-[#0f0f10] rounded-2xl p-4 border"
                                            style={{ borderColor: 'rgba(255,45,149,0.04)' }} 
                                        >
                                              <img src={dungeonSwitchTumbnail} alt="Dungeon Switch Thumbnail" className="h-40 w-full object-cover rounded-lg" />
                                            <h3 className="mt-4 font-semibold">Unreal Engine RPG</h3>
                                            <p className="text-sm text-gray-400 mt-2">An arcade and dungeon crawler mixed mini game with a random gameplay modification systen.</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-xs text-gray-400">Unreal Engine / Blueprints</div>
                                                <a href="https://www.youtube.com/watch?v=7HvJW-lENZo" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>View Gameplay→</a>
                                            </div>
                                        </motion.article> 
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Show more button*/}
                        <motion.div  className=" cursor-pointer rounded-[50px] mt-8 text-center "
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                onClick={() => setShowMoreProjects(v => !v)}
                                style={{ borderColor: 'var(--accent-pink)' }}
                            >
                            <a className="resume-btn">{showMoreProjects ? 'Show less' : 'See more work'} </a>
                        </motion.div>

                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="text-gray-400 mt-2">Interested in working together? Send a message — or email me directly.</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={isMobile ? false : { x: -300 }}
                            whileInView={isMobile ? undefined : { x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#0b0b0c] p-6 rounded-2xl border"
                            style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                            <h4 className="font-semibold">Get in touch</h4>
                            <p className="text-gray-400 text-sm mt-2">📧     <a href="mailto:youremail@example.com" style={{ color: 'var(--accent-pink)' }}>helenakloeckner1@gmail.com</a></p>
                            <p className="text-gray-400 text-sm mt-1">📍     Remote / Relocate</p>


                            <div className="mt-20 flex flex-wrap justify-center sm:justify-start gap-3">
                                <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1}}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4 }}

                                    href="https://github.com/adtreclove"
                                    aria-label="GitHub"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    GitHub
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1}}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                        href="https://www.linkedin.com/in/helena-klöckner"
                                        aria-label="LinkedIn"
                                        className="socials-btn flex-1 sm:flex-none text-center"
                                    >
                                    LinkedIn
                                </motion.a>
                             
                                <motion.a
                                  initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1}}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                    href="https://adtreclove.itch.io/"
                                    aria-label="Itch.io"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    Itch.io
                                </motion.a>
                            </div>


                        </motion.div>

                        <motion.form 
                           initial={isMobile ? false : { x: 300 }}
                            whileInView={isMobile ? undefined : { x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#0b0b0c] p-6 rounded-2xl border" style={{ borderColor: 'rgba(255,45,149,0.04)' }} onSubmit={(e) => { e.preventDefault(); window.location = 'mailto:youremail@example.com'; }}>
                            <label className="block text-sm text-gray-300">Your name</label>
                            <input className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" placeholder="" />

                            <label className="block text-sm text-gray-300 mt-4">Email</label>
                            <input className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" placeholder="" />

                            <label className="block text-sm text-gray-300 mt-4">Message</label>
                            <textarea className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" rows={5} placeholder="Let's build something together"></textarea>

                            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'linear-gradient(90deg,#ff2d95 0%, #ff6fb5 100%)' }}>Send</button>
                        </motion.form>
                    </div>
                </section>

                <footer className="border-t border-gray-900/40 py-8 mt-12">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <div>© {new Date().getFullYear()} Helena Klöckner - Built with ❤️ using React, Tailwind & Spline. <a href="https://www.flaticon.com/de/kostenlose-icons/code" title="code Icons">Code Icons made by Magnific - Flaticon</a></div>
                        <div className="flex gap-4">
                            <a   download="Helena_Kloeckner_CV.pdf" href={`${import.meta.env.BASE_URL}CV_Helena-Kloeckner.pdf`} className="hover:text-pink-400">Resume</a>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Floating accent */}
            <div aria-hidden className="fixed right-6 bottom-6 p-3 rounded-full shadow-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,45,149,0.12), rgba(255,45,149,0.04))' }} />
        </div >
    );
}
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import './App.css';
import projectThumbnail from './assets/spacedout.png';
import questsystemthumbnail from './assets/questsystem.png'


// Portfolio single-file React component (TailwindCSS required)


const SPLINE_SCENE_URL = 'https://prod.spline.design/IpT7wVcltCteByV8/scene.splinecode';

export default function Portfolio() {
    const [mobileOpen, setMobileOpen] = useState(false);

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
        `}
            </style>

            <header className="fixed w-full z-40 bg-black/40 backdrop-blur-md">
                <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#home" className="text-xl font-semibold tracking-wide" aria-label="Home">
                        <span style={{ color: 'var(--muted-white)' }}>Dev</span>Portfolio
                    </a>

                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#about" className="hover:text-pink-400">About</a>
                        <a href="#projects" className="hover:text-pink-400">Projects</a>
                        <a href="#contact" className="hover:text-pink-400">Contact</a>
                        <a href="/resume.pdf" className="resume-btn">Resume</a>
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

            <main id="home" className="pt-24">
                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
                        <div className="py-12">
                            <motion.h1
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl sm:text-5xl font-extrabold leading-tight"
                            >
                                Hi - My name is <br></br> <span style={{ color: 'var(--accent-pink)' }}>Helena Klöckner</span>.
                                <div className="text-xl font-medium mt-2 text-gray-300">Game & App Developer (Unreal, Unity, Flutter)</div>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 max-w-xl text-gray-300"
                            >
                                I build immersive games and cross-platform mobile apps. I hold a Bachelor's in Games Programming and specialise in Unreal Engine, Unity, and Flutter for Android & iOS.
                            </motion.p>

                            <div className="mt-8 flex gap-4">
                                <a href="#projects" className="resume-btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 shadow-lg" style={{ background: 'linear-gradient(90deg,#ff2d95 0%, #ff6fb5 100%)' }}>
                                    View projects
                                </a>
                                <a href="#contact" className="resume-btn inline-flex items-center gap-2 px-5 py-3 rounded-full border" style={{ borderColor: 'var(--accent-pink)' }}>
                                    Get in touch
                                </a>
                            </div>

                            <div className="mt-8 text-sm text-gray-400">Available for freelance & full-time roles</div>
                        </div>

                        {/* Spline 3D canvas */}
                        <div className="h-96 md:h-[480px] rounded-3xl overflow-hidden bg-[var(--anthrazit)] shadow-2xl">
                            {/* Spline integration */}
                            <Spline scene={SPLINE_SCENE_URL} style={{ height: '100%' }} />
                        </div>
                    </div>
                </section>

                {/* About */}
                <section id="about" className="max-w-6xl mx-auto px-6 py-45">
                    {/* About Me Heading + Intro */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">About me</h2>
                        <p className="mt-4 text-gray-300">
                            I graduated in October 2024 with a Bachelor's degree in Games Programming where I focused on real-time graphics,
                            gameplay systems, and engine-specific tooling for both Unreal Engine and Unity 3D. I now work professionally
                            building cross-platform mobile apps using Flutter — shipping performant apps to Android and iOS.
                        </p>
                    </div>

                    {/* Skills + Quick Facts grid */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Left: Skills grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold">Unreal Engine</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    Materials, Blueprints, C++ gameplay systems, optimization.
                                </p>
                            </div>

                            <div
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold">Unity</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    C#, DOTS, custom editors, physics and gameplay code.
                                </p>
                            </div>

                            <div
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold">Flutter</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    Responsive UI, platform integrations, Riverpod & state management, native plugins.
                                </p>
                            </div>

                            <div
                                className="bg-[#0f0f10] p-5 rounded-2xl border"
                                style={{ borderColor: 'rgba(255,45,149,0.08)' }}
                            >
                                <h4 className="font-semibold">Tools</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    GitLab, CI/CD, Firebase, Integration tests, REST, Figma.
                                </p>
                            </div>
                        </div>

                        {/* Right: Quick Facts */}
                        <aside
                            className="bg-[#0b0b0c] p-6 rounded-3xl border mt-4"
                            style={{ borderColor: 'rgba(255,45,149,0.06)' }}
                        >
                            <h3 className="font-semibold text-xl">Quick facts</h3>
                            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                                <li>🎓 Bachelor's Degree — Games Programming</li>
                                <li>📱 Flutter — Android + iOS</li>
                                <li>🎮 Unreal & Unity specialist</li>
                                <li>🌍 Available: Remote / Relocate</li>
                            </ul>
                        </aside>
                    </div>
                </section>


                {/* Work / Projects */}
                <section id="projects" className="bg-[#080808] py-40">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold">Selected Projects</h2>
                        <p className="text-gray-400 mt-2">A curated selection of recent work — games, apps and prototypes.</p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Project card - duplicate for each project */}
                            <article className="bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <img src={projectThumbnail} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />

                                <h3 className="mt-4 font-semibold">Local Multiplayer Game</h3>
                                <p className="text-sm text-gray-400 mt-2">A local 1 vs. 1 multiplayer shooter game.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Unreal / Blueprints / Network</div>
                                    <a href="https://youtu.be/M5h6SHcGoTM" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>View Gameplay →</a>
                                </div>
                            </article>


                            <article className="bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <div className="h-40 rounded-lg bg-gradient-to-br from-black to-[#111111] flex items-center justify-center text-gray-400">App Screenshot</div>
                                <h3 className="mt-4 font-semibold">Mobile App</h3>
                                <p className="text-sm text-gray-400 mt-2">Flutter app built for Android & iOS — features, architecture, and distribution.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Flutter</div>
                                    <a href="#" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Details →</a>
                                </div>
                            </article>

                            <article className="bg-[#0f0f10] rounded-2xl p-4 border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                                <img src={questsystemthumbnail} alt="Project Thumbnail" className="h-40 w-full object-cover rounded-lg" />
                                <h3 className="mt-4 font-semibold">Prototype / Tooling</h3>
                                <p className="text-sm text-gray-400 mt-2">A working modular Quest Sytstem prototype</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Unreal Engine / C++</div>
                                    <a href="#" className="text-sm font-medium" style={{ color: 'var(--accent-pink)' }}>Read more →</a>
                                </div>
                            </article>
                        </div>

                        <div className="mt-8 text-center">
                            <a href="#work" className="resume-btn inline-block px-6 py-3 rounded-full border" style={{ borderColor: 'var(--accent-pink)' }}>See more work</a>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="text-gray-400 mt-2">Interested in working together? Send a message — or email me directly.</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#0b0b0c] p-6 rounded-2xl border" style={{ borderColor: 'rgba(255,45,149,0.04)' }}>
                            <h4 className="font-semibold">Get in touch</h4>
                            <p className="text-gray-400 text-sm mt-2">E-mail: <a href="mailto:youremail@example.com" style={{ color: 'var(--accent-pink)' }}>helenakloeckner1@gmail.com</a></p>
                            <p className="text-gray-400 text-sm mt-1">Location: Remote</p>


                            <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
                                <a
                                    href="#"
                                    aria-label="GitHub"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/helena-klöckner"
                                    aria-label="LinkedIn"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    aria-label="Itch.io"
                                    className="socials-btn flex-1 sm:flex-none text-center"
                                >
                                    Itch.io
                                </a>
                            </div>


                        </div>

                        <form className="bg-[#0b0b0c] p-6 rounded-2xl border" style={{ borderColor: 'rgba(255,45,149,0.04)' }} onSubmit={(e) => { e.preventDefault(); window.location = 'mailto:youremail@example.com'; }}>
                            <label className="block text-sm text-gray-300">Your name</label>
                            <input className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" placeholder="Jane Doe" />

                            <label className="block text-sm text-gray-300 mt-4">Email</label>
                            <input className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" placeholder="jane@company.com" />

                            <label className="block text-sm text-gray-300 mt-4">Message</label>
                            <textarea className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-800" rows={5} placeholder="Let's build something together"></textarea>

                            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'linear-gradient(90deg,#ff2d95 0%, #ff6fb5 100%)' }}>Send</button>
                        </form>
                    </div>
                </section>

                <footer className="border-t border-gray-900/40 py-8 mt-12">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <div>© {new Date().getFullYear()} Helena Klöckner - Built with ❤️ using React, Tailwind & Spline</div>
                        <div className="flex gap-4">
                            <a href="#privacy" className="hover:text-pink-400">Privacy</a>
                            <a href="#resume" className="hover:text-pink-400">Resume</a>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Floating accent */}
            <div aria-hidden className="fixed right-6 bottom-6 p-3 rounded-full shadow-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,45,149,0.12), rgba(255,45,149,0.04))' }} />
        </div >
    );
}

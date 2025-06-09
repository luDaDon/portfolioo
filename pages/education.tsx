import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Experience() {
    return (
        <>
            <Navbar />
            <main className = "min-h-screen bg-white text-black p-8 max-w-4xl mx-auto">
                <motion.header
                    className = "mb-12"
                    initial = {{ opacity: 0, y: 30 }}
                    animate = {{ opacity: 1, y: 0}}
                    transition = {{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold text-blue-800 mb-4">Education</h1>
                    <p className="text-gray-700">Here’s a look at my education.</p> 
                </motion.header>

                <section className = "space-y-8">
                    {/* Software Engineer */}
                    <motion.div
                        initial = {{ opacity: 0, y: 30}}
                        animate = {{ opacity: 1, y: 0}}
                        transition = {{ delay: 0.2, duration: 0.5 }}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow"
                    >
                        <h1 className="text-xl font-semibold text-red-700">St. John's University - Queens, NY</h1>
                        <h4 className="text-xl font-semibold text-red-700">B.S. in Computer Science / Cyber Security — May 2021 </h4>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}
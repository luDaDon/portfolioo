"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-gray-900">

        {/* Hero */}

        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Get In Touch
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
              Let's Connect
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
              Whether you're interested in working together, discussing an
              opportunity, or just want to connect, feel free to reach out.
            </p>
          </motion.div>

        </section>

        {/* Contact Cards */}

        <section className="max-w-4xl mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Email */}

            <motion.a
              href="mailto:luthbell4@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group block bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">

                <div className="rounded-xl bg-blue-50 p-3">
                  <Mail className="w-7 h-7 text-blue-700" />
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                Email
              </h2>

              <p className="text-gray-600 mt-2">
                luthbell4@gmail.com
              </p>

              <p className="text-sm text-blue-600 font-medium mt-5">
                Send me an email →
              </p>
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href="https://www.linkedin.com/in/luther-bell/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group block bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">

                <div className="rounded-xl bg-blue-50 px-4 py-2">
                  <span className="text-xl font-bold text-blue-700">
                    in
                  </span>
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                LinkedIn
              </h2>

              <p className="text-gray-600 mt-2">
                Connect with me professionally
              </p>

              <p className="text-sm text-blue-600 font-medium mt-5">
                View my LinkedIn →
              </p>
            </motion.a>

          </div>

          {/* Availability */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 rounded-2xl bg-blue-700 p-10 text-white text-center"
          >

            <div className="flex justify-center mb-5">
              <div className="rounded-full bg-white/10 p-4">
                <Mail className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-3xl font-bold">
              Open to Opportunities
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto leading-7">
              I'm currently interested in software engineering opportunities,
              particularly backend, full-stack, and cloud-focused roles.
            </p>

            <a
              href="mailto:luthbell4@gmail.com"
              className="inline-block mt-7 bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Get In Touch
            </a>

          </motion.div>

          {/* Resume */}

          <div className="text-center mt-12">

            <p className="text-gray-500 mb-4">
              Want to learn more about my background?
            </p>

            <a
              href="/Resume_2026.pdf"
              download
              className="inline-block border border-gray-300 bg-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Download Resume
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

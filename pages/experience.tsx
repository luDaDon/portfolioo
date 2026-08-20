"use client";

import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Cloud,
  GitBranch,
  Activity,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Experience() {
  const technologies = [
    "Java",
    "Spring Boot",
    ".NET",
    "C#",
    "REST APIs",
    "Kubernetes",
    "OpenShift",
    "Docker",
    "OAuth 2.0",
    "GitHub Actions",
    "Azure DevOps",
    "SQL",
    "PowerShell",
    "OpenTelemetry",
    "Datadog",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-gray-900">

        {/* Hero */}

        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Career
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
              Professional Experience
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Over four years of experience building backend services,
              modernizing enterprise applications, improving production
              reliability, and automating software delivery at General Motors.
            </p>
          </motion.div>

        </section>

        {/* Experience */}

        <section className="max-w-5xl mx-auto px-6 pb-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >

            {/* Timeline */}

            <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 hidden md:block" />

            <div className="relative md:pl-14">

              {/* Timeline Dot */}

              <div className="hidden md:flex absolute left-0 top-8 w-9 h-9 rounded-full bg-blue-700 border-4 border-blue-100 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white rounded-full" />
              </div>

              {/* Main Experience Card */}

              <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300">

                {/* Header */}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      General Motors
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      Software Engineer
                    </h2>

                    <p className="text-gray-500 mt-2">
                      March 2022 – Present
                    </p>

                  </div>

                  <div className="rounded-xl bg-blue-50 p-3 w-fit">
                    <Server className="w-8 h-8 text-blue-700" />
                  </div>

                </div>

                {/* Summary */}

                <p className="mt-8 text-gray-600 leading-8">
                  Software engineer focused on backend development,
                  enterprise application modernization, production reliability,
                  and cloud-native software delivery. Experienced building
                  secure REST APIs, modernizing legacy .NET applications,
                  deploying services to Kubernetes, and developing automated
                  CI/CD workflows across enterprise applications.
                </p>

                {/* Technologies */}

                <div className="mt-8">

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Experience Sections */}

                <div className="mt-10 space-y-10">

                  {/* Backend */}

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <Server className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        Backend & API Engineering
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-600 leading-7">

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Architected and implemented secure Java Spring Boot
                          REST APIs that replaced manual UI-based CSV exports
                          with scalable programmatic data access for an
                          external engineering team.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Modernized a legacy .NET Framework application by
                          implementing OAuth 2.0 authentication and deploying
                          services to Kubernetes.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Extended a .NET Framework file ingestion service to
                          support a new external application by implementing
                          parsing logic, triggering database updates through
                          stored procedures, and establishing a reusable
                          integration pattern for future partner onboarding.
                        </span>
                      </li>

                    </ul>

                  </div>

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        Production Reliability & Observability
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-600 leading-7">

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Investigated and resolved recurring production UI and
                          database timeout issues by identifying a missing SQL
                          database index and improving query performance.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Enhanced application observability with OpenTelemetry
                          and Datadog, eliminating recurring production
                          incidents related to database timeouts.
                        </span>
                      </li>

                    </ul>

                  </div>

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <Cloud className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        Infrastructure & Cloud
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-600 leading-7">

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Modernized application infrastructure by rebuilding
                          and migrating an application to Windows Server 2022.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Deployed backend services to Kubernetes as part of
                          modernizing legacy enterprise applications.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Automated IIS provisioning and deployments using
                          PowerShell, GitHub Actions, and YAML, transforming a
                          manual deployment process into a one-click workflow.
                        </span>
                      </li>

                    </ul>

                  </div>

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <GitBranch className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        CI/CD & Engineering Automation
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-600 leading-7">

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Designed and implemented reusable GitHub Actions and
                          Azure DevOps CI/CD pipelines from scratch, automating
                          builds, testing, Docker image creation, artifact
                          packaging, and deployments.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Standardized release workflows across four enterprise
                          applications, reducing manual deployment effort and
                          improving consistency.
                        </span>
                      </li>

                    </ul>

                  </div>

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        Security & Integration
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-600 leading-7">

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Redesigned a .NET Framework integration to migrate
                          from mutual TLS to the OAuth 2.0 Client Credentials
                          flow after an external partner deprecated
                          certificate-based authentication.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-2">•</span>

                        <span>
                          Maintained secure production communication between
                          enterprise systems while preventing service
                          disruption during the authentication migration.
                        </span>
                      </li>

                    </ul>

                  </div>

                  <div>

                    <div className="flex items-center gap-3 mb-5">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <Server className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        Platform Modernization
                      </h3>

                    </div>

                    <p className="text-gray-600 leading-7">
                      Upgraded enterprise applications from .NET 8 to .NET 10,
                      improving maintainability, strengthening application
                      security, and ensuring long-term platform support.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blue-700 p-10 md:p-14 text-center text-white"
          >

            <h2 className="text-3xl md:text-4xl font-bold">
              Want the full story?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Download my resume for a complete overview of my professional
              experience, technical skills, and projects.
            </p>

            <a
              href="/Resume_2026.pdf"
              download
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Download Resume
            </a>

          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}
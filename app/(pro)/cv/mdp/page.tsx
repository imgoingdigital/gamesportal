'use client'
import React from "react";
import PrintButton from "../../components/PrintButton";
import Image from "next/image";
const cvData = {
  name: "Michael Del Mundo Perez",
  age: 38,
  location: "Malvar, Batangas",
  mobile: "09081488006",
  email: "perez.michael.dm@gmail.com",
  photo: "/img/cv/gradpic.jpg",
  summary:
    "Results-driven and detail-oriented professional with a strong background in auditing, compliance, and systems analysis. Adept at adapting to both office and field environments, with a proven track record of integrity and reliability. Highly skilled in Microsoft Office, data analysis, and process improvement. Passionate about leveraging technology and analytical skills to deliver value and drive organizational success.",
  coreCompetencies: [
    "Analytical & Critical Thinking",
    "Flexible: Office & Field Work",
    "High Integrity & Professionalism",
    "Advanced Microsoft Office (Excel, Word, Access)",
    "Programming & Computer Skills",
    "Process Improvement",
    "Creative Problem Solving",
    "Honest, Reliable, and Responsible",
    "Committed, Competent, and Compassionate",
    "Excellent Communication Skills",
    "Willingness to Learn & Adapt",
    "Single with no dependents",
  ],
  objective: [
    "To contribute my expertise in auditing, compliance, and systems analysis to a dynamic organization.",
    "To continuously learn, grow, and take on new challenges that drive both personal and company success.",
  ],
  education: [
    {
      level: "Tertiary",
      degree: "Bachelor of Science in Accountancy",
      school: "First Asia Institute of Technology and Humanities",
      address: "2 Pres. Laurel Highway, Tanauan City, Batangas",
    },
    {
      level: "Secondary",
      school: "Malvar National High School",
      address: "Poblacion, Malvar, Batangas",
    },
    {
      level: "Primary",
      school: "San Gregorio Elementary School",
      address: "San Gregorio, Malvar, Batangas",
    },
  ],
  workExperience: [
    {
      company: "METS En Co.",
      role: "Integrity Team / Systems Analyst",
      location: "",
      details: [
        "Ensured client companies complied with integrity standards across all subsidiaries.",
        "Conducted compliance, tax, and financial statement audits.",
        "Performed systems review and analysis to improve business processes.",
        "Collaborated with cross-functional teams to implement audit recommendations.",
      ],
    },
    {
      company: "Information Professionals Inc.",
      role: "POS Support Specialist",
      location: "[Client: Procter and Gamble Philippines]",
      details: [
        "Provided technical support for Point-of-Sale systems across multiple locations.",
        "Trained end-users and resolved system issues efficiently.",
        "Coordinated with client teams to ensure seamless operations.",
      ],
    },
    {
      company: "MAGNIFICO_JEANS, INCORPORATED",
      role: "Senior Auditor (General Audit Functions)",
      location: "",
      details: [
        "Led inventory and systems audits to ensure accuracy and compliance.",
        "Developed audit programs and reported findings to management.",
        "Recommended process improvements to enhance operational efficiency.",
      ],
    },
  ],
};

export default function CVPage() {
  return (
    <div
      className="min-h-screen py-10 px-4 flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <PrintButton />
      <div className="w-full max-w-3xl bg-white/95 rounded-xl shadow-2xl p-8 border border-blue-100" style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Print Button */}
        {/* <div className="flex justify-end mb-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded transition-colors text-sm shadow"
          >
            Print CV
          </button>
        </div> */}
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-1 tracking-tight drop-shadow" style={{ fontFamily: "Arial, sans-serif" }}>
              {cvData.name}
            </h1>
            <div className="text-gray-700 mb-1">
              <span className="font-semibold">Age:</span> {cvData.age}
            </div>
            <div className="text-gray-700 mb-1">
              <span className="font-semibold">Location:</span> {cvData.location}
            </div>
            <div className="text-gray-700 mb-1">
              <span className="font-semibold">Mobile:</span> {cvData.mobile}
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${cvData.email}`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {cvData.email}
              </a>
            </div>
            <div className="mt-1">
              <span className="font-semibold text-gray-700 mr-1">My Online CV:</span>
              <a
                href="https://www.callejon.online/cv/mdp"
                className="text-blue-500 underline hover:text-blue-700 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.callejon.online/cv/mdp
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 flex justify-center">
            {/* cvData.photo */}
            <Image src="/img/cv/gradpic.jpg" alt="cvData.name" 
              className="w-36 h-36 object-cover border-4 border-blue-200 shadow-lg bg-blue-50 rounded-lg"
              style={{ borderRadius: "0.5rem" }}
              width={144}
              height={144}
            />
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t-2 border-blue-200 mb-8" />
        {/* Body */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Professional Summary</h2>
          <p className="text-gray-800 leading-relaxed">{cvData.summary}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Core Competencies</h2>
          <ul className="list-disc list-inside text-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            {cvData.coreCompetencies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Career Objective</h2>
          <ul className="list-disc list-inside text-gray-800">
            {cvData.objective.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Education</h2>
          <ul className="text-gray-800">
            {cvData.education.map((edu, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-semibold">{edu.level}:</span>{" "}
                {edu.degree && <span>{edu.degree}, </span>}
                {edu.school}, {edu.address}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Work Experience</h2>
          <ul className="text-gray-800">
            {cvData.workExperience.map((exp, idx) => (
              <li key={idx} className="mb-4">
                <div className="font-semibold text-blue-900">{exp.company}</div>
                <div className="italic">{exp.role} {exp.location}</div>
                {exp.details.length > 0 && (
                  <ul className="list-disc list-inside ml-4">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="mt-8 text-blue-900/70 text-sm text-center" style={{ fontFamily: "Arial, sans-serif" }}>
        &copy; {new Date().getFullYear()} Michael Del Mundo Perez
      </footer>
    </div>
  );
}
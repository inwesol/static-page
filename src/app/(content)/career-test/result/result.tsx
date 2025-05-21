"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormContextData } from "@/context/personal-info-context/FormContext";
import html2pdf from "html2pdf.js";
import { categoryDescriptions } from "../questionnaire/questionsData";

interface FormData {
  fullName: string;
  email: string;
  gender: string;
  age: string | number;
  phoneNumber?: string;
}

interface Results {
  [category: string]: number;
}

export default function Result() {
  const router = useRouter();
  const {
    submittedData,
    allAnswers,
    testScore,
    setTestScore,
    setSubmittedData,
    setAllAnswers,
    form,
  } = useFormContextData();

  useEffect(() => {
    if (Object.entries(testScore).length === 0 || !submittedData) {
      router.push("/career-test/questionnaire");
      return;
    }
  }, [testScore, submittedData, router]);

  function generatePdf() {
    if (!submittedData) return;
    const element = document.getElementById("pdf-content");
    if (!element) return;

    const options = {
      margin: 0.5,
      filename: `${submittedData.fullName || "career"}-result.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  }

  function submitAnotherResponse() {
    setSubmittedData({
      fullName: "",
      email: "",
      gender: "",
      age: 0,
      phoneNumber: "",
    });
    setTestScore({});
    setAllAnswers({});
    form.reset({
      fullName: "",
      email: "",
      gender: "",
      age: undefined,
      phoneNumber: "",
    });
    router.push("/career-test/questionnaire");
  }

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col gap-4">
        {/* Gradient Heading */}
        <header className="font-bold mb-0 bg-gradient-to-r from-green-600 to-blue-600 text-white md:p-8 p-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl">
            Career Maturity Test Results
          </h1>
        </header>

        <button
          onClick={generatePdf}
          className="bg-primary-green-600 hover:bg-primary-green-700 text-white font-semibold py-2 px-6 !rounded-[4px] shadow transition self-end mr-8"
          aria-label="Download PDF of results"
        >
          Download PDF
        </button>

        {/* Disclaimer Section */}
        <section
          aria-label="Interpretation guidelines"
          className="bg-yellow-100 p-4 rounded-lg text-gray-700 text-sm italic border-l-4 border-yellow-500 mx-8"
        >
          <h2 className="font-semibold text-lg mb-2">
            Interpretations guidelines
          </h2>
          <ul className="space-y-2">
            <li>
              ➤ The following descriptions are intended as a general guide to
              help you understand your assessment scores.
            </li>
            <li>
              ➤ These scores should not be viewed as definitive labels or
              limitations.
            </li>
            <li>
              ➤ Your scores and profile are unique to you, and these
              descriptions are simply starting points for self-reflection and
              exploration.
            </li>
            <li>
              ➤ Avoid making decisions based solely on these descriptions.
            </li>
            <li>
              ➤ Consider these scores as part of a broader process of
              self-discovery.
            </li>
          </ul>
        </section>

        {/* Main Content */}
        {submittedData && testScore && (
          <div id="pdf-content" className="p-8 pt-0 space-y-8">
            {/* User Info Section */}
            <section
              aria-label="User information"
              className="bg-gradient-to-r from-green-100 via-blue-100 to-blue-200 border-l-4 border-green-500 p-6 shadow-lg text-gray-900 space-y-3 animate-fade-in"
            >
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">👤</span>
                <p>
                  <strong className="text-primary-green-800">Name:</strong>{" "}
                  {submittedData.fullName}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">📧</span>
                <p>
                  <strong className="text-primary-green-800">Email:</strong>{" "}
                  {submittedData.email}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">🚻</span>
                <p>
                  <strong className="text-primary-green-800">Gender:</strong>{" "}
                  {submittedData.gender}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">🎂</span>
                <p>
                  <strong className="text-primary-green-800">Age:</strong>{" "}
                  {submittedData.age}
                </p>
              </div>
              {submittedData.phoneNumber && (
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">📞</span>
                  <p>
                    <strong className="text-primary-green-800">Phone:</strong>{" "}
                    {submittedData.phoneNumber}
                  </p>
                </div>
              )}
            </section>

            {/* Result Cards Grid */}
            <section
              aria-label="Test results"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {Object.entries(testScore).map(([category, score]) => (
                <article
                  key={category}
                  className="bg-white border border-green-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-primary-green-600">
                      {category}
                    </h3>
                    <p className="text-gray-600">
                      <strong>Score:</strong>{" "}
                      <span className="text-primary-green-600">
                        {score as number}%
                      </span>
                    </p>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-full rounded-full"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-700">
                    {categoryDescriptions[category]}
                  </p>
                </article>
              ))}
            </section>
          </div>
        )}
      </div>

      {/* Submit Another Response */}
      <div className="flex justify-center my-6">
        <button
          onClick={submitAnotherResponse}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 !rounded-[4px] shadow transition"
          aria-label="Submit another response"
        >
          Submit another response
        </button>
      </div>
    </div>
  );
}

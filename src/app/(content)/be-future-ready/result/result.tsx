"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContextData } from "@/context/personal-info-context/FormContext";
import { Category, categoryDescriptions } from "../questionnaire/questionsData";
import { Icons } from "@/components";
import { FileDownIcon } from "lucide-react";
import ModalCTA from "@/components/modal-cta";

type Results = Record<Category, number>;

const emptyResults: Results = {
  Concern: 0,
  Curiosity: 0,
  Confidence: 0,
  Consultation: 0,
};

export default function Result() {
  const router = useRouter();
  const {
    submittedData,
    testScore,
    setTestScore,
    setSubmittedData,
    setAllAnswers,
    form,
  } = useFormContextData();
  const [showModal, setShowModal] = useState(true); // Show modal by default on result page

  useEffect(() => {
    if (
      !submittedData ||
      !testScore ||
      Object.values(testScore).every((v) => v === 0)
    ) {
      router.replace("/be-future-ready/questionnaire");
    }
  }, [testScore, submittedData, router]);

  const generatePdf = async () => {
    if (!submittedData) return;
    const element = document.getElementById("pdf-content");
    if (!element) return;

    // Clone the content to avoid modifying the live DOM
    const clone = element.cloneNode(true) as HTMLElement;

    // Show the header and footer in the clone only
    const header = clone.querySelector("#pdf-header") as HTMLElement;
    if (header) header.classList.remove("hidden");
    const footer = clone.querySelector("#pdf-footer") as HTMLElement;
    if (footer) footer.classList.remove("hidden");

    // Dynamically import html2pdf.js only when needed (client-side)
    const html2pdf = (await import("html2pdf.js")).default;

    const options = {
      margin: 0.2,
      filename: `${submittedData.fullName || "career"}-test-report.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(clone).save();
  };

  const submitAnotherResponse = () => {
    setSubmittedData(null);
    setTestScore(emptyResults);
    setAllAnswers({});
    form.reset();
    router.replace("/be-future-ready/questionnaire");
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {/* Modal CTA for result page */}
      <ModalCTA
        isTestResult
        isOpen={showModal}
        setIsOpen={setShowModal}
        delay={4000}
      />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col gap-4">
        <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white md:p-8 p-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold ">
            Career Maturity Test Results
          </h1>
        </header>

        {/* Main Content */}
        {submittedData && testScore && (
          <div id="pdf-content" className="p-8 pt-0 space-y-8">
            {/* PDF-only header (hidden on screen) */}
            <div id="pdf-header" className="hidden">
              <div className="flex justify-between mb-2 items-center">
                <Icons.logoWithText />
                <h1 className="text-2xl font-bold text-center text-primary-green-600 -mt-4">
                  Career Test Report
                </h1>
              </div>
              <hr className="mb-8" />
            </div>

            {/* User Info Section */}
            <section
              aria-label="User information"
              className="bg-gradient-to-r from-green-100 via-blue-100 to-blue-200 border-l-4 border-green-500 p-6 shadow-lg text-gray-900 animate-fade-in !mt-0 flex flex-col md:flex-row"
            >
              {/* name,email,phonenumber */}
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">👤</span>
                  <p>
                    <strong className="text-primary-green-800">Name:</strong>{" "}
                    {submittedData.fullName}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">📧</span>
                  <p>
                    <strong className="text-primary-green-800">Email:</strong>{" "}
                    {submittedData.email}
                  </p>
                </div>
                {submittedData.phoneNumber && (
                  <div className="flex items-center gap-3">
                    <span className="text-green-600 text-lg">📞</span>
                    <p>
                      <strong className="text-primary-green-800">Phone:</strong>{" "}
                      {submittedData.phoneNumber}
                    </p>
                  </div>
                )}
              </div>

              {/* age and gender */}
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">🚻</span>
                  <p>
                    <strong className="text-primary-green-800">Gender:</strong>{" "}
                    {submittedData.gender}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">🎂</span>
                  <p>
                    <strong className="text-primary-green-800">Age:</strong>{" "}
                    {submittedData.age}
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer Section */}
            <section
              aria-label="Interpretation guidelines"
              className="bg-yellow-100 p-4 rounded-lg text-gray-700 text-sm italic border-l-4 border-yellow-500"
            >
              <h2 className="font-semibold text-lg mb-2">
                Interpretations guidelines
              </h2>
              <ul className="space-y-2">
                <li>
                  ➤ The following descriptions are intended as a general guide
                  to help you understand your assessment scores.
                </li>
                <li>
                  ➤ These scores should not be viewed as definitive labels or
                  limitations.
                </li>
                <li>
                  ➤ Your scores and profile are unique to you, and these
                  descriptions are simply starting points for self-reflection
                  and exploration.
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

            {/* Result Cards Grid */}
            <section
              aria-label="Test results"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {(Object.entries(testScore) as [Category, number][]).map(
                ([category, score]) => (
                  <article
                    key={category}
                    className="bg-white border border-green-200 rounded-xl p-5"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-primary-green-600">
                        {category}
                      </h3>
                      <p className="text-gray-600">
                        <strong>Score:</strong>{" "}
                        <span className="text-primary-green-600">{score}%</span>
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
                ),
              )}
            </section>

            {/* PDF-only footer (hidden on screen) */}
            <div id="pdf-footer" className="hidden mt-2">
              <h1 className="text-[12px] font-semibold text-center mb-2 text-gray-300">
                Developed by Mark L. Savickas.
              </h1>
              <hr />
            </div>
          </div>
        )}
      </div>

      <div className="flex sm:flex-row sm:justify-end my-6 max-w-4xl mx-auto sm:gap-2 flex-col gap-4 items-center">
        <button
          onClick={generatePdf}
          className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 hover:from-primary-green-700 hover:to-primary-blue-700 text-white font-semibold py-2 px-4 rounded-full flex gap-2 items-center text-base hover:shadow-xl hover:-translate-y-1 transform transition all"
          aria-label="Download PDF of report"
        >
          <FileDownIcon />
          Download Report
        </button>

        <button
          onClick={submitAnotherResponse}
          className="bg-primary-blue-600 text-white font-semibold py-2 px-4 rounded-full text-base hover:bg-primary-blue-700 hover:shadow-xl hover:-translate-y-1 transform transition-all"
          aria-label="Submit another response"
        >
          Submit another response
        </button>
      </div>
    </div>
  );
}

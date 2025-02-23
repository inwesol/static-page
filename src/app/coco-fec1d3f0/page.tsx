"use client";

// import React from "react";

// function ComingSoon() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-secondary px-6 text-center">
//       {/* Content Wrapper */}
//       <div className="max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//           Explorer
//         </h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Explorer lets you discover a wide range of career options, offering
//           valuable insights into the skills, abilities, and knowledge required
//           for each course and occupation. It serves as a helpful tool for
//           preliminary information and awareness. Whether you’re exploring new
//           opportunities or refining your goals, Explorer is your first step
//           toward clarity on your career path.
//         </p>
//         <button className="bg-primary text-white text-lg font-medium px-6 py-3 rounded-xl shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all">
//           Notify Me
//         </button>
//       </div>

//       {/* Optional Image */}
//       <div className="mt-10 w-full max-w-lg">
//         <img
//           src="/assets/coming-soon.svg"
//           alt="Coming Soon"
//           className="w-full h-auto rounded-lg"
//         />
//       </div>
//     </div>
//   );
// }

// export default ComingSoon;

// export default function ComingSoon() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#F8F4EB] px-6 py-12">
//       {/* Image Section */}
//       <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
//         <img
//           src="/assets/coming-soon.svg"
//           alt="Coming Soon"
//           className="w-3/4 max-w-md"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="w-full lg:w-1/2 text-center lg:text-left">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInDown">
//           Coming Soon
//         </h1>
//         <p className="text-gray-700 text-lg mb-6 animate-fadeInUp">
//           We are working hard to bring something amazing to you. Stay tuned for updates and be the first to know when we launch!
//         </p>

//         {/* Countdown Timer */}
//         <div className="flex justify-center lg:justify-start gap-4 mb-6 animate-fadeInLeft">
//           <div className="p-4 bg-white rounded-lg shadow-md text-center">
//             <span className="text-2xl font-semibold text-gray-900">00</span>
//             <p className="text-gray-600">Days</p>
//           </div>
//           <div className="p-4 bg-white rounded-lg shadow-md text-center">
//             <span className="text-2xl font-semibold text-gray-900">00</span>
//             <p className="text-gray-600">Hours</p>
//           </div>
//           <div className="p-4 bg-white rounded-lg shadow-md text-center">
//             <span className="text-2xl font-semibold text-gray-900">00</span>
//             <p className="text-gray-600">Minutes</p>
//           </div>
//           <div className="p-4 bg-white rounded-lg shadow-md text-center">
//             <span className="text-2xl font-semibold text-gray-900">00</span>
//             <p className="text-gray-600">Seconds</p>
//           </div>
//         </div>

//         {/* Subscribe Form */}
//         <form className="flex flex-col sm:flex-row gap-4 animate-fadeInDown">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 border border-gray-300 rounded-lg flex-1 focus:ring-2 focus:ring-[#3FA1D8] focus:outline-none"
//           />
//           <button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-lg font-semibold shadow hover:bg-[#00B24B] transition-all">
//             Notify Me
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4EB] px-6 md:px-12 py-12 text-center">
    //   {/* Header Section */}
    //   <motion.div
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     className="mb-6"
    //   >
    //     <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
    //       Coming Soon
    //     </h1>
    //   </motion.div>

    //   {/* Image Section */}
    //   <motion.div
    //     initial={{ opacity: 0, scale: 0.9 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.8 }}
    //     className="w-full max-w-md mb-6"
    //   >
    //     <Image
    //       src="/assets/coming-soon.svg"
    //       width={500}
    //       height={500}
    //       alt="Coming Soon"
    //       className="w-full"
    //     />
    //   </motion.div>

    //   {/* Content Section */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     className="max-w-2xl"
    //   >
    //     <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
    //       Explorer lets you discover a wide range of career options, offering
    //       valuable insights into the skills, abilities, and knowledge required
    //       for each course and occupation. It serves as a helpful tool for
    //       preliminary information and awareness. Whether you&apos;re exploring
    //       new opportunities or refining your goals, Explorer is your first step
    //       toward clarity on your career path.
    //     </p>

    //     <motion.button
    //       whileHover={{ scale: 1.05 }}
    //       whileTap={{ scale: 0.95 }}
    //       className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all"
    //     >
    //       Notify Me
    //     </motion.button>
    //   </motion.div>
    // </div>

    // here CoCo testing we are doing.
    <div className="flex flex-col items-center justify-center bg-[#F8F4EB] text-center">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/9K9P0DRLgclT-QepE7y97"
        className="w-full min-h-screen border-0"
      />
    </div>
  );
}

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/utils";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

const Privacy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Privacy Policy
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 01st August 2025
        </p>
        <p className="mt-4">
          This Privacy Policy (“Policy”) sets forth how Inwesol Global Private
          Limited (“Inwesol,” “we,” “our,” or “us”), a company incorporated
          under the Companies Act, 2013, having its registered office at
          Hyderabad, Telangana, India, collects, uses, discloses, transfers,
          stores, and protects personal information obtained from individuals
          (“Users” or “you”) who access or use our website
          [https://inwesol.com], applications, AI tools (such as CoCo or any
          other offerings ), and associated digital and offline services
          (“Services”).
        </p>
        <p className="mt-4">
          Inwesol is committed to safeguarding personal data and upholding
          transparency and accountability in compliance with applicable Indian
          data protection laws, including:
        </p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>The Information Technology Act, 2000</li>
          <li>
            The IT (Reasonable Security Practices and Procedures and Sensitive
            Personal Data or Information) Rules, 2011
          </li>
          <li>The Digital Personal Data Protection Act, 2023 (“DPDP Act”)</li>
        </ul>
        <p className="mt-4">
          At <strong>Inwesol</strong>, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our website and services.
        </p>
        <h2 className="text-xl font-medium mt-8">
          1. CATEGORIES OF INFORMATION WE COLLECT
        </h2>
        <p className="mt-4">
          We collect the following types of personal and sensitive personal
          data:
        </p>
        <h3 className="text-lg mt-4">
          A. Information Provided Directly by You:
        </h3>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Full name, email address, phone number</li>
          <li>Date of birth, age, gender</li>
          <li>Educational background, career interests, goals</li>
          <li>Session booking details, feedback, and user-generated content</li>
          <li>
            Payment-related information (processed via compliant third-party
            payment gateways)
          </li>
        </ul>
        <h3 className="text-lg mt-4">B. Automatically Collected Data:</h3>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            IP address, browser type, access time, device type, and identifiers
          </li>
          <li>Navigation patterns, usage statistics, and analytics logs</li>
          <li>Cookies, pixel tags, and session tokens</li>
        </ul>
        <h3 className="text-lg mt-4">
          C. Information from Third-Party Sources:
        </h3>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Data received from partner institutions, coaches, and vendors under
            proper consent
          </li>
          <li>
            Publicly available information or social media (with your
            permission)
          </li>
        </ul>
        <h2 className="text-xl font-medium mt-8">
          2. LEGAL BASIS FOR PROCESSING
        </h2>
        <p className="mt-4">
          We collect and process your data on the following legal grounds:
        </p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Consent obtained under Section 6 of the DPDP Act</li>
          <li>
            Performance of contractual obligations with you (e.g., coaching
            services)
          </li>
          <li>
            Compliance with legal obligations (e.g., tax and financial
            regulations)
          </li>
          <li>
            Legitimate interests in improving our platform and user engagement
          </li>
        </ul>
        <h2 className="text-xl font-medium mt-8">
          3. PURPOSES OF DATA COLLECTION
        </h2>
        <p className="mt-4">
          Your personal data is used for the following purposes:
        </p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Provision of Services including career assessments, AI chatbot
            interactions, coaching sessions, usage of behavioural tools, and
            community
          </li>
          <li>Account creation, maintenance, and user support</li>
          <li>Processing of transactions and invoicing</li>
          <li>
            Communication regarding Services, updates, feedback, and promotions
            (with opt-out options)
          </li>
          <li>Platform performance optimization, debugging, and analysis</li>
          <li>
            Ensuring safety, preventing fraud, and enforcing Terms of Service
          </li>
          <li>Compliance with statutory obligations and legal requests</li>
        </ul>
        <h2 className="text-xl font-medium mt-8">
          4. DATA SHARING AND THIRD-PARTY DISCLOSURE
        </h2>
        <p className="mt-4">
          We do not sell your personal data. We may share your data with:
        </p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Coaches and service facilitators for session delivery on a
            need-to-know basis
          </li>
          <li>
            Technology providers (e.g., cloud storage, communication tools,
            analytics) under strict confidentiality agreements
          </li>
          <li>
            Government or regulatory authorities, if mandated by applicable laws
            or legal proceedings
          </li>
          <li>
            Professional advisers, auditors, legal counsel, and tax consultants
            for compliance
          </li>
        </ul>
        <p className="mt-4">
          All data transfers are governed by data processing agreements,
          ensuring confidentiality and lawful processing.
        </p>
        <h2 className="text-xl font-medium mt-8">5. DATA SECURITY</h2>
        <p className="mt-4">We follow industry-standard security protocols:</p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Encryption of sensitive data</li>
          <li>Role-based access controls</li>
          <li>Regular audits and vulnerability checks</li>
        </ul>
        <p className="mt-4">
          Despite best efforts, no system is 100% secure. In case of data
          breaches, we will inform users and regulatory authorities as required
          by Indian law.
        </p>
        <h2 className="text-xl font-medium mt-8">
          6. COOKIES, TRACKERS AND ANALYTICS
        </h2>
        <p className="mt-4">We use first-party and third-party cookies to:</p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Enable essential functionalities (e.g., logins, form fills)</li>
          <li>Enhance usability and personalization</li>
          <li>Analyze user behavior, traffic, and engagement trends</li>
        </ul>

        <h2 className="text-xl font-medium mt-8">7. CHILDREN&apos;S PRIVACY</h2>
        <p className="mt-4">Inwesol is committed to protecting minors:</p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Users below 18 must obtain verified parental/guardian consent</li>
          <li>
            We do not knowingly collect data from children below 13 years of age
          </li>
          <li>
            Guardians may contact us to review, correct, or request deletion of
            such data
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-8">
          8. INTERNATIONAL DATA TRANSFERS
        </h2>
        <p className="mt-4">
          We do not transfer personal data outside India unless necessary for
          service delivery and with appropriate safeguards (e.g., contractual
          clauses).
        </p>

        <h2 className="text-xl font-medium mt-8">9. THIRD-PARTY LINKS</h2>
        <p className="mt-4">
          Our Platform may contain links to third-party websites or services. We
          are not responsible for their privacy practices. You are advised to
          review their respective policies before providing any information.
        </p>

        <h2 className="text-xl font-medium mt-8">10. UPDATES TO THIS POLICY</h2>
        <p className="mt-4">
          This Privacy Policy may be revised from time to time to reflect
          changes in legal or operational requirements. Significant updates will
          be notified via Email (if available) or Notices on our website
          homepage or login dashboard. Your continued use of our Services post
          such notification constitutes acceptance of the revised policy.
        </p>

        <h2 className="text-xl font-medium mt-8">
          11. CONTACT INFORMATION AND GRIEVANCE REDRESSAL
        </h2>
        <p className="mt-4">
          In compliance with Rule 5(9) of the SPDI Rules and Section 13 of the
          DPDP Act: <br />
          Grievance Officer: Goutham Toondla <br />
          Email: contact@inwewsol.com
        </p>
        <p className="mt-4">
          For queries, complaints, or requests regarding personal data or this
          Policy, you may contact the above. We endeavor to respond to
          grievances within 15-20 working days.
        </p>

        <h3 className="text-lg font-medium mt-8">GOVERNING LAW</h3>
        <p className="mt-4 text-muted-foreground">
          This Policy shall be governed by and construed in accordance with the
          laws of India. Disputes, if any, shall be subject to the exclusive
          jurisdiction of the courts in Hyderabad, Telangana.
        </p>
        <p className="mt-4 text-muted-foreground">
          This Privacy Policy is issued pursuant to prevailing Indian laws and
          shall be deemed to have been read, understood, and accepted by all
          users accessing Inwesol&apos;s services.
        </p>

        <div className="flex flex-row items-center justify-center my-10 w-full">
          <Link href="/">
            <Button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all">
              Back to homepage
            </Button>
          </Link>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default Privacy;

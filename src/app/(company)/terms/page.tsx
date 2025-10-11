import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/utils";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Terms and Conditions",
  path: "/terms",
});

const TermsPage = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Terms and Conditions
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 01th August 2025
        </p>
        <p className="mt-4">
          These Terms and Conditions (&ldquo;Terms&ldquo;) constitute a legally
          binding agreement made between you, whether personally or on behalf of
          an entity (“you”), and Inwesol Global Private Limited (“Inwesol,”
          “we,” “us,” or “our”), a company incorporated under the Companies Act,
          2013 with its registered office in Telangana, India. These Terms
          govern your access to and use of the Inwesol website, mobile
          applications, affiliated platforms, tools, products, services, and all
          other offerings.
        </p>

        <p className="mt-4">
          By accessing or using the Services, you signify your agreement to be
          bound by these Terms and our Privacy Policy. If you do not agree to
          these Terms, you must immediately discontinue use of the Services.
        </p>

        <h2 className="text-xl font-medium mt-8">1. ACCEPTANCE OF TERMS</h2>

        <p className="mt-4">By using the Services:</p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>You agree to comply with and be legally bound by these Terms.</li>
          <li>
            You understand and agree that we may amend these Terms at any time.
          </li>
          <li>
            Any amendments will be notified by updating the “Last Updated” date
            and posting on the website.
          </li>
          <li>
            Your continued use of the Services constitutes acceptance of those
            changes.
          </li>
        </ul>

        <p className="mt-4">
          If you do not agree to the revised Terms, you must discontinue use
          immediately. We recommend reviewing these Terms periodically to stay
          informed.
        </p>

        <h2 className="text-xl font-medium mt-8">
          2. ELIGIBILITY (AGE, REGION, ETC.)
        </h2>

        <p className="mt-4">You may use the Services only if you:</p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Are at least 13 years old.</li>
          <li>Are above 18 or have parental consent if between 13 and 18.</li>
          <li>
            Are not a resident of a jurisdiction where accessing our Services is
            illegal.
          </li>
          <li>
            Have the legal authority to form a binding agreement under the
            applicable laws.
          </li>
        </ul>

        <p className="mt-4">
          We do not knowingly allow the use of Services by users who fail to
          meet these criteria. Users who falsify their age or impersonate others
          may face account termination.
        </p>

        <h2 className="text-xl font-medium mt-8">3. SERVICE DESCRIPTION</h2>

        <p className="mt-4">Inwesol offers:</p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            <strong>Explorer:</strong> A career discovery tool that helps users
            explore academic and career paths based on preferences, strengths,
            and personality.
          </li>
          <li>
            <strong>CoCo (Conversational and Chat assistance):</strong> An AI
            chatbot offering informational support for well-being and
            decision-making.
          </li>
          <li>
            <strong>Career Coaching:</strong> One-on-one and group-based
            personalized coaching with trained professionals.
          </li>
          <li>
            <strong>Learning Resources:</strong> Career guides, career
            information assessments, webinars, and tools for personal growth and
            decision-making.
          </li>
        </ul>

        <p className="mt-4">
          These Services are designed to support self-discovery, not to
          guarantee job placements, college admissions, or financial success.
        </p>

        <h2 className="text-xl font-medium mt-8">4. USER RESPONSIBILITIES</h2>

        <p className="mt-4">
          You agree to use the Services only for lawful purposes. You shall:
        </p>
        <ul className="list-disc ml-8 text-muted-foreground">
          <li>Provide true, current, and complete information.</li>
          <li>
            Use your account personally and not transfer or resell access.
          </li>
          <li>
            Comply with all Indian and international laws applicable to your
            use.
          </li>
          <li>
            Avoid posting, uploading, or sharing any content that is:
            <ul className="list-disc ml-8 text-muted-foreground">
              <li>False, misleading, defamatory, obscene, or abusive.</li>
              <li>Infringing on intellectual property rights or privacy.</li>
              <li>Threatening, harassing, or promoting hate speech.</li>
            </ul>
          </li>
          <li>
            Not attempt to reverse-engineer, disassemble, or hack the Platform.
          </li>
          <li>Report misuse or violations to the Inwesol support team.</li>
        </ul>

        <p className="mt-4">
          Violations of user responsibilities may result in suspension,
          termination, or legal action.
        </p>

        <h2 className="text-xl font-medium mt-8">5. PAYMENT TERMS</h2>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Some Services are offered on a paid basis. You will be clearly
            notified before initiating a transaction.
          </li>
          <li>
            Payments may include fees for coaching sessions, workshops,
            subscriptions, or resource access.
          </li>
          <li>
            All payments are processed via secure third-party gateways and are
            subject to GST as per Indian law.
          </li>
          <li>
            You must ensure that your payment information is accurate and up to
            date.
          </li>
          <li>
            Invoices and receipts will be generated and shared electronically.
          </li>
          <li>
            Non-payment or unauthorized payments may result in immediate account
            suspension.
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-8">
          6. CANCELLATION & REFUND POLICY
        </h2>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            <strong>Coaching Sessions:</strong> You may cancel a program up to
            48 hours in advance for a full refund, which is completely
            subjective.. Last-minute cancellations will not be refunded.
          </li>
          <li>
            <strong>Subscriptions:</strong> You may cancel your subscription
            anytime. Access will continue until the end of the billing cycle.
          </li>
          <li>
            <strong>Workshops/Events:</strong> Tickets are non-refundable unless
            the event is canceled by Inwesol.
          </li>
        </ul>

        <p className="mt-4">
          Refunds, if applicable, will be processed within 7–14 business days.
          Refund requests should be made via the support email with relevant
          details.
        </p>

        <h2 className="text-xl font-medium mt-8">7. LIMITATION OF LIABILITY</h2>

        <p className="mt-4">
          To the maximum extent permitted by law, Inwesol and its team will not
          be liable for:
        </p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Any indirect, incidental, or consequential damages arising from the
            use or inability to use the Services.
          </li>
          <li>
            Loss of data, loss of business opportunities, or emotional distress.
          </li>
          <li>
            Damages caused by third-party services, links, or technologies.
          </li>
          <li>Reliance on content provided through our services.</li>
        </ul>

        <h2 className="text-xl font-medium mt-8">8. INTELLECTUAL PROPERTY</h2>

        <p className="mt-4">
          All content, logos, tools, designs, graphics, illustrations, and
          trademarks on our Platform are the exclusive property of Inwesol. You
          may not:
        </p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            Reproduce, redistribute, or reuse our content without explicit
            written consent.
          </li>
          <li>Claim ownership of any proprietary information.</li>
          <li>
            Use our name or content for promotional purposes without permission.
          </li>
        </ul>

        <p className="mt-4">
          Any unauthorized use will be treated as a violation under the Indian
          Copyright Act, 1957, and relevant IP laws.
        </p>

        <h2 className="text-xl font-medium mt-8">9. TERMINATION CLAUSE</h2>

        <p className="mt-4">
          We reserve the right to suspend or terminate your access to the
          Services if:
        </p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>You breach any of the Terms.</li>
          <li>You are found involved in unlawful activity.</li>
          <li>
            Your conduct risks harm to other users or the integrity of our
            systems.
          </li>
        </ul>

        <p className="mt-4">
          You may also terminate your account by sending a written request.
          Termination does not affect our right to pursue remedies or enforce
          rights accrued prior to termination.
        </p>

        <h2 className="text-xl font-medium mt-8">
          10. GOVERNING LAW & DISPUTE RESOLUTION
        </h2>

        <p className="mt-4">
          These Terms are governed by and construed in accordance with the laws
          of India. You agree that:
        </p>

        <ul className="list-disc ml-8 text-muted-foreground">
          <li>
            All disputes shall be resolved under the exclusive jurisdiction of
            courts located in Hyderabad, Telangana.
          </li>
          <li>
            You will attempt amicable resolution through email communication
            before escalating to legal proceedings.
          </li>
          <li>
            You may escalate unresolved data-related grievances to the Data
            Protection Board of India, as per the DPDP Act, 2023.
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-8">11. WEBSITE DISCLAIMER</h2>

        <p className="mt-4">
          The information contained in this website is for general information
          purposes only. <br /> The information is provided by www.inwesol.com,
          a property of Inwesol Global Private Limited. <br /> While we
          endeavour to keep the information up to date and correct, we make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability or availability
          with respect to the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk. <br /> In no event will we be liable for any loss or damage,
          including without limitation, indirect or consequential loss or
          damage, or any loss or damage whatsoever arising from loss of data or
          profits arising out of, or in connection with, the use of this
          Website. <br /> We have no control over the nature, content, and
          availability of those sites. The inclusion of any links does not
          necessarily imply a recommendation or endorsement of the views
          expressed within them. Every effort is made to keep the website up and
          running smoothly. However, through this website, you are able to link
          to other websites which are not under the Inwesol, takes no
          responsibility for, and will not be liable for, the website being
          temporarily unavailable due to technical issues beyond our control.
        </p>

        <h2 className="text-xl font-medium mt-8">12. CHANGES TO TERMS</h2>

        <p className="mt-4">
          Inwesol reserves the right to modify or update these Terms at any
          time. Updates will be posted on this page with a new “Last Updated”
          date. <br /> We encourage users to review the Terms periodically.
          Continued use of the Services after any changes implies acceptance of
          the revised Terms.
        </p>

        <hr className="mt-8" />

        <p className="mt-4 font-medium">
          For any questions or concerns regarding these Terms, please write to
          us at contact@inwesol.com <br /> By using Inwesol, you acknowledge
          that you have read, understood, and agree to be bound by these terms
          and conditions.
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

export default TermsPage;

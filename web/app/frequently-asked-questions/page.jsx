import PageSection from "@/components/page-section";
import { H1, P } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function FrequentlyAskedQuestions() {
  return (
    <PageSection className={"space-y-10"}>
      <div className="flex items-center justify-center flex-col">
        <H1>Frequently Asked Questions</H1>
        <P>Find answers to common questions that you may have in your mind.</P>
      </div>
      <div className="max-w-2xl mx-auto bg-white px-4 rounded-lg border">
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>Q.1 : What are unlisted shares?</AccordionTrigger>
            <AccordionContent>
              <div>
                <p>
                  <span>
                    Unlisted shares are equity shares of companies that are not
                    listed on any stock exchange and, therefore, do not trade
                    publicly.
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Q.2 : How can one buy unlisted shares in India?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    Investors can buy unlisted shares through private deals with
                    existing shareholders, employee stock option plans, or
                    through intermediaries such as unlistedbuzz that specialize
                    in unlisted securities.
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              Q.3 : What are the risks associated with investing in unlisted
              shares?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <ol>
                  <li>
                    <span>1. Limited Liquidity:</span> Unlisted shares often
                    have lower trading volumes, making it challenging to sell
                    the shares quickly or at the desired price.
                  </li>
                  <li>
                    <span>
                      <br />
                      2. Lack of Transparency:
                    </span>{" "}
                    Unlisted companies are not bound by stringent disclosure
                    norms like listed companies, which can lead to a lack of
                    timely and detailed information about the company's
                    performance.
                  </li>
                  <li>
                    <span>
                      <br />
                      3. Regulatory Risks:
                    </span>{" "}
                    The unlisted space is less regulated compared to the listed
                    markets, which can increase the risk of fraudulent
                    activities.
                  </li>
                  <li>
                    <span>
                      <br />
                      4. Valuation Concerns:
                    </span>{" "}
                    Determining the fair value of unlisted shares can be
                    challenging due to the lack of readily available market
                    data.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              Q.4 : Are unlisted shares regulated by SEBI?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    While unlisted shares are not as tightly regulated as listed
                    shares, SEBI does have guidelines to protect investors in
                    unlisted public companies.
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              Q.5 : Can foreign investors buy unlisted shares in India?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    Yes, but they must comply with FEMA (Foreign Exchange
                    Management Act) regulations, and there may be additional
                    conditions or restrictions based on the sector
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6">
            <AccordionTrigger>
              Q.6 : How Can NRIs Buy Unlisted Shares in India?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    Yes, NRIs can invest in unlisted shares in India. As per
                    regulatory requirements, NRIs can use their NRO
                    (Non-Resident Ordinary) accounts for such investments. The
                    process involves transferring funds from the NRO account for
                    purchasing the unlisted shares, which will also be credited
                    to the NRO Demat account. However, it's essential to note
                    that NRE (Non-Resident External) accounts are not commonly
                    used for these transactions due to the complexity of FEMA
                    (Foreign Exchange Management Act) regulations involved
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q7">
            <AccordionTrigger>
              Q.7 : What Are the KYC Requirements for NRIs to Invest in Unlisted
              Shares?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  To buy unlisted shares in India, NRIs must submit the
                  following KYC documents:
                </p>
                <ol>
                  <li>
                    1. CML (Client Master List) Copy: This document contains
                    vital information like DP ID, Client ID, PAN number, and
                    Bank details.
                  </li>
                  <li>
                    <br />
                    2. PAN Card: A copy of the Permanent Account Number card is
                    essential.
                  </li>
                  <li>
                    <br />
                    3. Cancelled Cheque: A cancelled cheque from the NRO account
                    is required to ensure the account details are accurate and
                    valid.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q8">
            <AccordionTrigger>
              Q.8 : How long does it take for unlisted shares to be credited to
              my Demat account after purchase?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    The timeline for crediting unlisted shares to your Demat
                    account after purchase can vary. Typically, the shares are
                    credited on the same day as the funds are transferred to the
                    seller's account. However, this is subject to the completion
                    of all necessary formalities and the time of fund transfer.
                    If funds are credited before 2 PM, the transfer of shares is
                    usually done within 24 hours. Delays might occur due to
                    holidays or other non-working days.
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q9">
            <AccordionTrigger>
              Q.9 : What factors can affect the time taken for unlisted shares
              to be credited to my account?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <ol>
                  <li>
                    <span>1. Transaction Time:</span> If the payment is made
                    late in the day, the process might carry over to the next
                    working day.
                    <br />
                    <br />
                  </li>
                  <li>
                    <span>2. Completion of KYC:</span> Delays in submitting or
                    verifying KYC documents can delay the process.
                  </li>
                  <li>
                    <span>
                      <br />
                      3. Bank and Demat Account Det ails Accuracy:
                    </span>{" "}
                    Any discrepancies in bank or Demat account details can lead
                    to delays.
                  </li>
                  <li>
                    <span>
                      <br />
                      4. Holidays and Weekends:
                    </span>{" "}
                    Transactions initiated on weekends or holidays will be
                    processed on the next working day.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q10">
            <AccordionTrigger>
              Q.10 : What taxes apply when I sell unlisted shares in India?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  When you sell unlisted shares in India, the gains are subject
                  to capital gains tax. The type of tax depends on the holding
                  period:
                </p>
                <ul>
                  <li>
                    <span>1. Short-Term Capital Gains (STCG):</span> If you sell
                    the shares within 24 months of purchase, the gains are
                    treated as short-term and taxed as per your income tax slab
                    rates.
                  </li>
                  <li>
                    <span>
                      <br />
                      2. Long-Term Capital Gains (LTCG):
                    </span>{" "}
                    If the shares are held for more than 24 months, the gains
                    are long-term and taxed at 20% with indexation benefits.
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q11">
            <AccordionTrigger>
              Q.11 : How can I trust unlistedbuzz when buying unlisted shares?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <strong>1. Proven Track Record: </strong>We have a solid
                  history of successful transactions and satisfied clients. Our
                  reputation in the market is built on consistent, reliable
                  service. <br />
                  <br />
                  <strong>2. Transparent Operations:</strong> We believe in
                  complete transparency. Detailed information about each
                  unlisted share, including risks, valuation, and legal
                  considerations, is openly shared with our clients. <br />
                  <br />
                  <strong>3. Regulatory Adherence:</strong> Compliance with SEBI
                  regulations and other legal requirements is at the core of our
                  operations, ensuring that every transaction is legitimate and
                  secure. <br />
                  <br />
                  <strong>4. Exceptional Customer Support:</strong> Our
                  dedicated customer service team is always ready to assist you,
                  providing professional guidance throughout your investment
                  journey. <br />
                  <br />
                  <strong>5. Expertise in the Market:</strong> Our team's
                  extensive knowledge of the unlisted share market is invaluable
                  in helping you make informed investment decisions. <br />
                  <br />
                  <strong>6. Security and Confidentiality:</strong> We
                  prioritize the safety and privacy of your financial
                  information, employing robust systems to protect your data.{" "}
                  <br />
                  <br />
                  <strong>7. Detailed Documentation:</strong> We guide you
                  through the entire process, assisting with all necessary
                  documentation for a seamless transaction experience. <br />
                  <br />
                  <strong>8. Independent Verification:</strong> For added
                  assurance, we encourage you to seek advice from independent
                  financial advisors or legal experts.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q12">
            <AccordionTrigger>
              Q.12 : Can you tell us about the founders of unlistedbuzz and
              their expertise?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  unlistedbuzz was co-founded by Mr. Umesh Paliwal, Mr. Dinesh
                  Gupta, and Mr. Santosh Singh Rathore. Each founder brings
                  unique expertise and vision to the platform: <br />
                  <br />
                  <strong>1. Mr. Umesh Paliwal:</strong> Known for his deep
                  knowledge in unlisted shares and finance, Umesh Paliwal has
                  played a pivotal role in shaping unlistedbuzz into a trusted
                  platform for investors. His insights into market dynamics are
                  highly valued in the financial community. <br />
                  <br />
                  <strong>2. Mr. Dinesh Gupta:</strong> With a strong background
                  in financial markets and investment strategies, Dinesh Gupta
                  has significantly contributed to unlistedbuzz's growth and
                  reputation. His analytical skills in assessing investment
                  opportunities are a key asset to the platform. 3. <br />
                  <br />
                  <strong>3. Mr. Santosh Singh Rathore:</strong> As the third
                  co-founder, Santosh Singh Rathore brings a wealth of
                  experience and knowledge to unlistedbuzz. His expertise in
                  strategic planning, product development and marketing has been
                  integral in driving the platform's success and innovation.{" "}
                  <br />
                  <br />
                  Together, the three founders have established unlistedbuzz as
                  a leading entity in the unlisted shares market, known for its
                  ethical practices, transparency, and commitment to providing
                  quality investment opportunities. <br />
                  <br />
                  For more detailed information about our founders and their
                  contributions, please visit the 'About Us' section on our
                  website or contact us directly.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q13">
            <AccordionTrigger>
              Q.13 : What is the total value of transactions that have been
              conducted through the unlistedbuzz platform
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  unlistedbuzz has achieved a remarkable milestone in its
                  journey in the unlisted shares market. Since its inception in
                  2018, our platform has facilitated transactions worth more
                  than ₹300 crore. This significant achievement underscores our
                  commitment to providing excellent investment opportunities and
                  services in the unlisted share market.
                </p>
                <p>
                  Our platform's success is a testament to the trust and
                  confidence our clients place in us, driven by our dedication
                  to transparency, market expertise, and customer-centric
                  approach. We continuously strive to offer the best investment
                  solutions and insights in the unlisted share market,
                  contributing to our growing transaction volume and client
                  base.
                </p>
                <p>
                  For more details about our transaction history and how we can
                  assist you with your investment needs, please visit our
                  website or contact our customer service team.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q14">
            <AccordionTrigger>
              Q.14 : How does unlistedbuzz source its unlisted shares?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  <span>
                    <span>
                      At unlistedbuzz, we have a comprehensive and strategic
                      approach to sourcing unlisted shares, ensuring a diverse
                      and quality portfolio for our investors. Our shares are
                      primarily sourced through: <br />
                      <br />
                      <strong>1. Employee Stock Ownership Plans (ESOPs)</strong>
                      : We acquire shares from employees of various companies
                      who have been allocated shares as part of their
                      compensation package. <br />
                      <br />
                      <strong>2. Initial Investors and Stakeholders:</strong> We
                      engage with early investors, including angel investors and
                      venture capitalists, who are looking to liquidate their
                      holdings in companies. <br />
                      <br />
                      <strong>3. Direct Company Allotments</strong>: In some
                      cases, we directly acquire shares from the companies
                      themselves, especially during additional rounds of funding
                      or private placements. <br />
                      <br />
                      <strong>4. Secondary Market Transactions: </strong>We also
                      source shares through secondary market transactions, where
                      we buy from existing shareholders looking to sell their
                      stakes. <br />
                      <br />
                      Our team diligently conducts thorough due diligence on
                      each sourcing channel to ensure the authenticity and
                      legality of the shares. <br />
                      <br />
                      We also keep abreast of market trends and corporate
                      developments to identify potential investment
                      opportunities for our clients. <br />
                      <br />
                      For more information on our share sourcing processes or to
                      explore current investment opportunities with
                      unlistedbuzz, please feel free to reach out to us.
                    </span>
                  </span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q15">
            <AccordionTrigger>
              Q.15 : What is the Partner Program with unlistedbuzz, and how can
              I participate?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  unlistedbuzz offers a Partner Program aimed at expanding our
                  network and enhancing our service offerings through
                  collaboration. Here’s how you can be a part of it: <br />
                  <br />
                  <strong>1. Eligibility and Registration</strong>: Individuals,
                  financial advisors, brokers, or any entities with a keen
                  interest and background in finance and investments are
                  eligible. You can register for the program by filling out a
                  form on our website or contacting us directly for more
                  details. <br />
                  <br />
                  <strong>2. Benefits of Partnership: </strong>Partners gain
                  access to our extensive inventory of unlisted shares, market
                  insights, and exclusive deals. It opens up opportunities for
                  enhanced earnings through commissions or profit-sharing on
                  transactions facilitated by the partner. <br />
                  <br />
                  <strong>3. Support and Training:</strong> unlistedbuzz
                  provides comprehensive support and training to its partners,
                  ensuring they are well-equipped to offer quality advice and
                  services to their clients. <br />
                  <br />
                  <strong>4. Roles and Responsibilities:</strong> Partners act
                  as intermediaries, facilitating transactions and providing
                  investment advice to their client base. They maintain the
                  ethos of unlistedbuzz, prioritizing transparency, ethical
                  practices, and client satisfaction. <br />
                  <br />
                  <strong>5. Networking Opportunities:</strong> Being a partner
                  offers the chance to network with a community of finance
                  professionals and investors, enhancing your market knowledge
                  and business opportunities. <br />
                  <br />
                  For specific terms, conditions, and more detailed information
                  about the Partner Program, please visit our 'Partner Program'
                  section on the website or contact our partnership team.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q16">
            <AccordionTrigger>
              Q.16 : Can you tell us about the Partner Program at unlistedbuzz,
              and how widespread is its network?
            </AccordionTrigger>
            <AccordionContent>
              <div className="accordion-body">
                <p>
                  unlistedbuzz's Partner Program is an integral part of our
                  business, designed to create mutually beneficial relationships
                  with finance professionals across the country. Here's what you
                  need to know: <br />
                  <br />
                  <strong>1. Extensive Network</strong>: We are proud to have a
                  robust network of over 250+ partners spread across India. This
                  wide geographical reach ensures a diverse and extensive range
                  of insights and opportunities in the unlisted share market.{" "}
                  <br />
                  <br />
                  <strong>2. Who Can Join: </strong>The program is open to
                  individuals, financial advisors, brokers, and other entities
                  with expertise in finance and investments. <br />
                  <br />
                  <strong>3. Benefits for Partners:</strong> Our partners enjoy
                  exclusive access to our unlisted share inventory, market
                  insights, and specialized deals. The program offers potential
                  financial rewards through commissions or profit-sharing from
                  transactions. <br />
                  <br />
                  <strong>4. Support and Resources:</strong> unlistedbuzz
                  provides comprehensive support, training, and resources to all
                  partners, ensuring they are well-equipped to assist their
                  clients effectively. <br />
                  <br />
                  <strong>5. Partners’ Role: </strong>Our partners play a
                  crucial role in facilitating transactions and offering
                  investment advice. They uphold our commitment to transparency,
                  ethical practices, and client satisfaction.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageSection>
  );
}

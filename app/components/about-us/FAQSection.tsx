"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Why is it considered necessary to register Agreement for Sale?",
    answer:
      "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement for sale of an immovable property, it becomes a permanent public record. Further, a person is considered as the legal owner of an immovable property only after he gets such property registered in his name.",
  },
  {
    question: "Do I need to pay stamp duty if the property is transferred or is a gift?",
    answer:
      "Yes, stamp duty is applicable even when property is transferred as a gift, though the rate may differ depending on local regulations.",
  },
  {
    question: "What are the documents a buyer would need from me?",
    answer:
      "You’ll need to provide the sale deed, property tax receipts, encumbrance certificate, approved building plan, and proof of identity.",
  },
  {
    question: "What documents do I need to provide when I sell a house?",
    answer:
      "Typically you need the original sale deed, previous ownership documents, property tax receipts, and other compliance certificates.",
  },
  {
    question: "How can I qualify for exemptions on the Capital Tax?",
    answer:
      "You can qualify for exemptions under Section 54 by reinvesting the proceeds into another residential property within the prescribed time limit.",
  },
  {
    question: "How soon would I receive a call from you after writing?",
    answer:
      "Our team usually responds within 24–48 hours after receiving your query.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-sm border border-black p-6 sm:p-8 md:p-10"
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg sm:text-xl"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <ChevronDown
                  className={`ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 mt-3" : "max-h-0"
                  }`}
              >
                <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

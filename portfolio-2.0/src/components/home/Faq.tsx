'use client';
import React, { useState } from 'react';

export default function Faq() {
  const [question, setSelectedQuestion] = useState<null | number>(null);

  const questions = [
    {
      question: 'Do you use all-in-one platforms to build the website?',
      answer:
        'No, I develop all of the code myself. This not only offers you flexability, but also gives you more control and options for you website that are not possible with all-in-one solutions',
    },
    {
      question: 'How long does it take to create a fully customized website?',
      answer:
        'The time is takes to design and build a custom website is dependent on the complexity of the project. A simple, static website could be completed in several weeks, while a large, complex website could take several months. During the initial consultation, I will set expectations about the timeline and how long I think your project will take.',
    },
    {
      question: 'How does the pricing work? Am I expected to pay up front?',
      answer:
        'You are not expected to pay in full up front. Once we have discussed your needs and I have given you a quote, we can work out a payment plan. Generally, I request that half of the quote is paid before I start work.',
    },

    {
      question:
        'How much say will I have in the design and development process?',
      answer:
        'As much as you want. I want you to have a product that you love on your terms. If you want to be hands on, I welcome that and if that is not your style, that is okay too.',
    },
    {
      question: 'Why should I chose your services over a larger company?',
      answer:
        'I am dedicated to giving each of my clients a hands-on experience. I want you to love your website.',
    },
    {
      question:
        'I only need some small changes to my website. Can you still help me?',
      answer: 'Of course. No change is too small.',
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="faq"
      className="bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center py-[2rem] scroll-mt-[76px]"
    >
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <div className="flex flex-col lg:flex-row justify-between gap-[3rem]">
          <div className="lg:w-[40%]">
            <h1 className="uppercase font-semibold leading-8 text-[1.5rem] mb-[0.5rem] text-black dark:text-off-white">
              Frequently Asked Questions
            </h1>
            <div className="hidden lg:block">
              <p className="mt-[2rem] text-black dark:text-off-white max-w-[525px]">
                Do you have a question that’s not answered here? Fill out my
                contact form and you&apos;ll receive a response shortly.
              </p>
              <button
                onClick={() => {
                  scrollToContact();
                }}
                className="min-w-[175px] p-[1rem] bg-off-white dark:bg-dark-blue text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue my-[2rem] border border-dark-blue dark:border-off-white md:max-w-[175px]"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  if (question === i) {
                    setSelectedQuestion(null);
                  } else {
                    setSelectedQuestion(i);
                  }
                }}
                className={`group border-bluegray ${
                  i === 0
                    ? 'pb-[1.5rem] border-b '
                    : i === 1
                      ? 'py-[1.5rem]'
                      : 'py-[1.5rem] border-t'
                }`}
              >
                <div
                  className={`flex flex-row-reverse sm:flex-row justify-end sm:justify-between gap-[1rem] items-center pb-[1rem]`}
                >
                  <p className="font-semibold text-left text-black dark:text-off-white">
                    {q.question}
                  </p>
                  <img
                    src="/images/home/faq-arrow.png"
                    alt="arrow"
                    className={`dark:hidden h-[8px] w-[13.3px] transition duration-500 ${
                      i === question ? 'rotate-180' : 'group-hover:rotate-90'
                    }`}
                  />
                  <img
                    src="/images/home/faq-arrow-light.png"
                    alt="arrow"
                    className={`hidden dark:block h-[8px] w-[13.3px] transition duration-500 ${
                      i === question ? 'rotate-180' : 'group-hover:rotate-90'
                    }`}
                  />
                </div>
                <p
                  className={`text-left text-black dark:text-off-white ${
                    question === i ? 'block' : 'hidden'
                  }`}
                >
                  {q.answer}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

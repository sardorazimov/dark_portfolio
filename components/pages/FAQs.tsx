'use client'
import { cn } from '@/lib/utils';
import PlusIc from '@/public/assets/icons/plus.svg'
import MinusIc from '@/public/assets/icons/minus.svg'
import React from 'react';


const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];



const AccourdItem = ({ question, answer }: {
  question: string,
  answer: string,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (

    <>
      <div onClick={() => setIsOpen(!isOpen)}
        className='flex items-center py-7 border-b border-white/30'
      >
        <span className='flex-1 text-lg font-bold  '>
          {question} 
        </span>
        <div className='cursor-pointer'>
          {isOpen ? <MinusIc /> :  <PlusIc  />}
          
        </div>
      </div><div
        className={cn("mt-4",{
          hidden: !isOpen,
          "": isOpen === true
        })}>
        {answer}
      </div></>

  )
}

export const FAQs = () => {
  return (
    <section className='py-20 sm:py-20'>
      <div className="container">
        <h1 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Asked You Quetsion</h1>
        <p></p>
        <div className='mt-12 max-w-[650px] mx-auto'>
          {items.map(({question,answer}) => (
            <AccourdItem  question={question}  answer={answer}  key={question}/>
          )) }
        </div>
      </div>
    </section>
  )
};

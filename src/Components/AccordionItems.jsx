import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'

const AccordionItems = ({ question, answer, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div onClick={toggleAccordion} className={`select-none w-full cursor-pointer rounded-[2rem] transition-all duration-300 ease-in-out flex flex-col justify-center p-5 sm:p-6 md:p-8 ${isOpen ? 'bg-black' : 'bg-white'}`}>
      
      {/* Accordion Title */}
      <div className="flex justify-between items-center">
        <h1 className={`select-none text-lg sm:text-xl md:text-2xl font-medium transition duration-300 ease-in-out ${isOpen ? 'text-[#C7E565]' : 'text-black'}`}>
          {question}
        </h1>
        <Icon className={`text-2xl sm:text-3xl transition duration-150 ease-in-out ${isOpen ? 'text-[#C7E565] rotate-180' : 'text-black'}`} icon="ri:arrow-down-s-line"/>
      </div>

      {/* Accordion Body */}
      <div className={`${isOpen ? 'mt-4 visible' : 'hidden'}`}>
        <p className="select-none text-sm sm:text-base text-[#ceced0e1]">{answer}</p>
      </div>

    </div>
  )
}

export default AccordionItems

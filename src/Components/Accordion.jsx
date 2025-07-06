import React from 'react'
import AccordionItems from './AccordionItems'
import accordionData from '../accordionData'

const Accordion = () => {
  return (
    <div className="w-full max-w-3xl bg-[#bbbbbb] rounded-[2rem] flex flex-col items-center gap-6 p-6 sm:p-8 md:p-10">
      {
        accordionData.map((element, index) => (
          <AccordionItems key={index} question={element.question} answer={element.answer} defaultOpen={element.open}/>
        ))
      }
    </div>
  )
}

export default Accordion

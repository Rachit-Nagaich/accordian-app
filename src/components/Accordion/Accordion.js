import React, { useState } from "react";
import "./Accordion.css"; 

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const accordionData = [
    { title: "Section Accordion 1", content: "I am Accordion 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!" },
    { title: "Section Accordion 2", content: "I am Accordion 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!" },
    { title: "Section Accordion 3", content: "I am Accordion 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!" },
  ];

  return (
    <div className="accordion">
      {accordionData.map((section, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleSection(index)}>
            {section.title}
          </div>
          <div className={`accordion-content ${openSection === index ? "open" : ""}`}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

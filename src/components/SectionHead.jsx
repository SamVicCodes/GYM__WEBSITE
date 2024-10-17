import React from "react";

const SectionHead = ({ icon, title, className }) => {
  return (
    <div className={`section_head ${className}`}>
      <span>{icon}</span>
      <h4>{title}</h4>
    </div>
  );
};

export default SectionHead;

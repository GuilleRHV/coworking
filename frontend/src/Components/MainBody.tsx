import React, { useState } from "react";

const MainBody: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src="/coworking.jpeg"></img>
    </>
  );
};

export default MainBody;

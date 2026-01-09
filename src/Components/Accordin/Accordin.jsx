import { useState } from "react";

export const Accordin = () => {
  const data = [
    {
        id:1,
      header: "What is y,our name",
      description: "Stuti",
    },
    {
        id:2,
      header: "What is your age",
      description: "24",
    },
  ];

//   Each accordion is uniquely identified by its index

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordin = (index) => {
    console.log(index);
    
    console.log(openIndex);
    
    if (index === openIndex) {
      setOpenIndex(null);
    } 
    else {
      setOpenIndex(index);
    }
  };
// 0 === null => false => setOpenIndex(index)=> setOpenIndex(0)
// 0 ===


  return (
    <div>
      {data.map((singleAccordin, index) => (
        <div className="border accordin">
          <div onClick={() => toggleAccordin(index)}>
            {singleAccordin.header}
          </div>
          {openIndex === index && <div>{singleAccordin.description}</div>}
        </div>
      ))}
    </div>
  );
};

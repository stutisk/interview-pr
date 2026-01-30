import { useEffect, useState } from "react";

export const Accordin = () => {
  const data = [
    {
      id: 0,
      header: "What is y,our name",
      description: "Stuti",
    },
    {
      id: 2,
      header: "What is your age",
      description: "24",
    },
  ];

  //   Each accordion is uniquely identified by its index

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordin = (id) => {
    console.log(id);

    console.log(openIndex);

    if (id === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };
  // 0 === null => false => setOpenIndex(index)=> setOpenIndex(0)
  // 0 ===

  useEffect(() => {
    console.log(openIndex);
  }, [openIndex]);

  return (
    <div>
      {data.map((singleAccordin) => (
        <div className="border accordin" key={singleAccordin.id}>
          <div onClick={() => toggleAccordin(singleAccordin.id)}>
            {singleAccordin.header}
          </div>
          {openIndex === singleAccordin.id && <div>{singleAccordin.description}</div>}
        </div>
      ))}
    </div>
  );
};

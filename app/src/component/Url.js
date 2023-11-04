import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Url = () => {
  const handleDownload = () => {
    const capture = document.querySelector(".donation");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth + 500, componentHeight);
      doc.save("receipt.pdf");
    });
  };
  return (
    <div className="div1">
      <div className="div2">
        <div className="donation">
          <h1>I am here</h1>
          <h2> I is donat by me </h2>
          <p> you will donate for them please help them </p>
        </div>
        <div className="button1">
          <div className="button2">
            <button onClick={handleDownload}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Url;

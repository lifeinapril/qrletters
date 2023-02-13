import React, { useRef } from "react";

const SaveButton = () => {
  const pageRef = useRef(null);

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const rect = pageRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    ctx.drawWindow(
      window,
      rect.left,
      rect.top,
      rect.width,
      rect.height,
      "white"
    );

    canvas.toBlob((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "page.png";
      link.click();
    });
  };

  return (
    <div ref={pageRef}>
      <button onClick={handleSave}>Save as Image</button>
    </div>
  );
};

export default SaveButton;

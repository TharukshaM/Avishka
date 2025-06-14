import React, { useEffect } from "react";
import "../css/CursorTrail.css";

const CursorTrail: React.FC = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll<HTMLDivElement>(".circle");

    const colors: string[] = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
      "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
      "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
      "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
      "#48005f", "#3d005e"
    ];

    // Initialize circle positions and colors
    circles.forEach((circle, index) => {
      (circle as any).x = 0;
      (circle as any).y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 20  + "px";
        circle.style.top = y - 20 + "px";
        circle.style.scale = `${(circles.length - index) / circles.length}`;

        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = (circles[index + 1] || circles[0]) as any;
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

  }, []);

  return (
    <>
      {/* {Array.from({ length: 20 }).map((_, idx) => (
        <div key={idx} className="circle" />
      ))} */}
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
    </>
  );
};

export default CursorTrail;

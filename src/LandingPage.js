import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} className={styles.pageContainer}>
        <h2>
          Coords: {coords.x} {coords.y}
        </h2>
      </div>
      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>
    </>
  );
}

export default LandingPage;

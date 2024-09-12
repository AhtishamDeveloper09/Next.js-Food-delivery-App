"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

function CountDown() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const endingDate = new Date("2024-09-14");
  return (
    <div>
      {hydrated ? (
        <Countdown
          className="text-yellow-300 text-3xl md:text-5xl font-bold"
          date={endingDate}
        />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default CountDown;

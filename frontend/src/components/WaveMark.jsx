const WaveMark = ({ className = "h-8 w-8", tone = "dark" }) => {
  const strokes =
    tone === "light"
      ? ["#F7F5F0", "#4CA1A3", "#D5C8B7"]
      : ["#042F4B", "#4CA1A3", "#D5C8B7"];
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 11c4.5 0 4.5-3.5 9-3.5s4.5 3.5 9 3.5 4.5-3.5 8-3.5"
        stroke={strokes[2]}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M3 18c4.5 0 4.5-3.5 9-3.5s4.5 3.5 9 3.5 4.5-3.5 8-3.5"
        stroke={strokes[0]}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M3 25c4.5 0 4.5-3.5 9-3.5s4.5 3.5 9 3.5 4.5-3.5 8-3.5"
        stroke={strokes[1]}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WaveMark;

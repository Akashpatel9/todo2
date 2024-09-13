
function ProgressBar({progress}) {
    
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center py-4 md:w-py-2">
      <svg
        className="transform rotate-90"
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-[#142E15] opacity-100"
          stroke="currentColor"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
          fill="none"
        />
        <circle
          className="text-[#3F9142] transition-all duration-500"
          stroke="currentColor"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
    </div>
  );
}

export default ProgressBar;

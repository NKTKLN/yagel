import { useId } from "react";
import { EinkScreen } from "./eink-screen";

interface DeviceArtworkProps {
  time: string;
  date: string;
}

export function DeviceArtwork({ time, date }: DeviceArtworkProps) {
  const carbonPatternId = useId();

  return (
    <svg className="device-artwork" viewBox="0 0 632 316" aria-hidden="true">
      <defs>
        <pattern
          id={carbonPatternId}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <rect width="24" height="24" fill="#252b2d" />
          <path d="M0 0h12v6H0Zm12 12h12v6H12Z" fill="#3b4142" />
          <path d="M0 6h12v6H0Zm12 12h6V0h6v12h-6v12h-6Z" fill="#303638" />
          <path
            d="M1 1h10M1 3h10M1 5h10M13 13h10M13 15h10M13 17h10"
            stroke="#4a5050"
            strokeWidth=".5"
          />
          <path
            d="M13 1v10m2-10v10m2-10v10M1 13v10m2-10v10m2-10v10"
            stroke="#3a4041"
            strokeWidth=".5"
          />
          <path d="M0 11.5h12m0 12h12M11.5 0v12M23.5 12v12" stroke="#191e20" />
        </pattern>
      </defs>
      <g className="device-housing">
        <rect width="632" height="316" rx="12" fill="#14181a" />
        <rect
          x="1"
          y="1"
          width="630"
          height="307"
          rx="11"
          fill={`url(#${carbonPatternId})`}
          stroke="#555b5b"
          strokeWidth="1.5"
        />
        <rect
          x="6"
          y="6"
          width="620"
          height="297"
          rx="7"
          fill="none"
          stroke="#737a78"
          strokeOpacity=".35"
        />
      </g>
      <EinkScreen time={time} date={date} />
    </svg>
  );
}

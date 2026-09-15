import { pixelTextPath } from "./eink-font";
import { sensorReadingsPath } from "./eink-readings";

interface EinkScreenProps {
  time: string;
  date: string;
}

export function EinkScreen({ time, date }: EinkScreenProps) {
  return (
    <g className="eink-display" transform="translate(79 50) scale(1.5)">
      <rect className="device-screen" width="316" height="144" />
      <g
        transform="translate(10 8)"
        fill="currentColor"
        shapeRendering="crispEdges"
      >
        <path data-display="time" d={pixelTextPath(time, 17, 32, 5)} />
        <path data-display="date" d={pixelTextPath(date, 26, 82, 2)} />
        <path data-display="readings" d={sensorReadingsPath} />
      </g>
    </g>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-7-7 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{index}</span>
      {children}
    </p>
  );
}

export function Mark({
  inverse = false,
  size = 32,
}: {
  inverse?: boolean;
  size?: number;
}) {
  return (
    <Image
      className="pixel-mark"
      src={`/brand/yagel-mark${inverse ? "-inverse" : ""}.svg`}
      width={size}
      height={size}
      alt=""
    />
  );
}

export function SensorIcon({
  kind,
}: {
  kind: "temperature" | "humidity" | "pressure";
}) {
  const paths = {
    temperature:
      "M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0ZM12 8v10m5-11h3m-3 4h2",
    humidity:
      "M12 3 5.5 12a8 8 0 0 0-1 4 7.5 7.5 0 0 0 15 0 8 8 0 0 0-1-4L12 3ZM8 16a4 4 0 0 0 4 4",
    pressure:
      "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v2m-6 3h2m8 0h2m-6 0 4-4m-7 9h6",
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={paths[kind]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import React, { useMemo } from "react";
import ClockFace from "@/app/clockFace/clockFace";

export default function LongClockFace({
  minute,
  clockRadius,
}: {
  minute: number;
  clockRadius: number;
}) {
  return useMemo(
    () => <ClockFace minute={minute} clockRadius={clockRadius} scale={0.025} />,
    [minute, clockRadius],
  );
}

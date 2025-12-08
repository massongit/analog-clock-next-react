import { useMemo } from "react";
import ClockFace from "@/app/clockFace/clockFace";

export default function ShortClockFace({
	minute,
	clockRadius,
}: {
	minute: number;
	clockRadius: number;
}) {
	return useMemo(
		() => (
			<ClockFace minute={minute} clockRadius={clockRadius} scale={0.0125} />
		),
		[minute, clockRadius],
	);
}

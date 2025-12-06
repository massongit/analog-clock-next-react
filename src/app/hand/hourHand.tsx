import { css } from "@emotion/react";
import Hand from "@/app/hand/hand";

export default function HourHand({
	clockRadius,
	date,
}: {
	clockRadius: number;
	date: Date;
}) {
	const minutes = date.getHours() * 60 + date.getMinutes();
	const hours = (minutes * 60 + date.getSeconds()) / (60 * 60);
	return (
		<Hand
			clockRadius={clockRadius}
			widthScale={0.05}
			heightScale={0.5}
			rotateDeg={(hours % 12) * (360 / 12)}
			advancedCSS={css`
        background-color: blue;
      `}
		/>
	);
}

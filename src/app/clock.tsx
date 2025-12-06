/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useMemo, useState } from "react";
import { css } from "@emotion/react";
import Clip from "@/app/clip";
import LongClockFace from "@/app/clockFace/longClockFace";
import ShortClockFace from "@/app/clockFace/shortClockFace";
import HourHand from "@/app/hand/hourHand";
import MinuteHand from "@/app/hand/minuteHand";
import SecondHand from "@/app/hand/secondHand";

export default function Clock() {
	const [now, setNow] = useState(new Date());
	useEffect(() => {
		const timeout = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(timeout);
	}, []);

	const clockRadius = 250;
	const clockDiameter = useMemo(() => clockRadius * 2, []);
	const clockFaces = useMemo(() => {
		const array = [...Array(60)];
		return array.map((_, i) => {
			if (i % 5 === 0) {
				return <LongClockFace key={i} minute={i} clockRadius={clockRadius} />;
			} else {
				return <ShortClockFace key={i} minute={i} clockRadius={clockRadius} />;
			}
		});
	}, []);

	return (
		<div
			css={css`
        width: ${clockDiameter}px;
        height: ${clockDiameter}px;
        border-radius: 50%;
        border: solid 10px;
      `}
		>
			{clockFaces}
			<HourHand clockRadius={clockRadius} date={now} />
			<MinuteHand clockRadius={clockRadius} date={now} />
			<SecondHand clockRadius={clockRadius} date={now} />
			<Clip clockRadius={clockRadius} />
		</div>
	);
}

import { css } from "@emotion/react";
import Hand from "@/app/hand/hand";

export default function MinuteHand({
  clockRadius,
  date,
}: {
  clockRadius: number;
  date: Date;
}) {
  return (
    <Hand
      clockRadius={clockRadius}
      widthScale={0.05}
      rotateDeg={date.getMinutes() * (360 / 60)}
      advancedCSS={css`
        background-color: green;
      `}
    />
  );
}

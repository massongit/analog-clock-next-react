import React from 'react';
import { css } from "@emotion/react";
import Hand from "@/app/hand/hand";

export default function SecondHand({
  clockRadius,
  date,
}: {
  clockRadius: number;
  date: Date;
}) {
  return (
    <Hand
      clockRadius={clockRadius}
      widthScale={0.025}
      rotateDeg={date.getSeconds() * (360 / 60)}
      advancedCSS={css`
        background-color: red;
      `}
    />
  );
}

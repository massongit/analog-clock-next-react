/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import { css } from "@emotion/react";

export default function ClockFace({
  minute,
  clockRadius,
  scale,
}: {
  minute: number;
  clockRadius: number;
  scale: number;
}) {
  const clockFaceCSS = useMemo(() => {
    const width = clockRadius * scale;
    return css`
      width: ${width}px;
      height: ${width * 10}px;
      margin-left: ${clockRadius - width / 2}px;
    `;
  }, [clockRadius, scale]);
  const rotateDeg = useMemo(() => minute * (360 / 60), [minute]);
  return useMemo(
    () => (
      <div
        css={css`
          ${clockFaceCSS};
          position: absolute;
          background-color: black;
          transform-origin: center ${clockRadius}px;
          transform: rotate(${rotateDeg}deg);
        `}
      />
    ),
    [clockFaceCSS, clockRadius, rotateDeg],
  );
}

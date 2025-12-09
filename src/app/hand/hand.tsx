/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";

export default function Hand({
	clockRadius,
	widthScale,
	heightScale,
	rotateDeg,
	advancedCSS,
}: {
	clockRadius: number;
	widthScale: number;
	heightScale?: number;
	rotateDeg: number;
	advancedCSS: SerializedStyles;
}) {
	const handWidthCSS = useMemo(() => {
		const width = clockRadius * widthScale;
		return css`
      width: ${width}px;
      margin-left: ${clockRadius - width / 2}px;
    `;
	}, [clockRadius, widthScale]);
	const handHeightCSS = useMemo(() => {
		const baseHeight = clockRadius * (heightScale ?? 1);
		const marginTop = clockRadius - baseHeight;
		let heightCSS = css`
      height: ${baseHeight + clockRadius / 5}px;
      transform-origin: center ${baseHeight}px;
    `;

		if (marginTop !== 0) {
			heightCSS = css`
        ${heightCSS};
        margin-top: ${marginTop}px;
      `;
		}

		return heightCSS;
	}, [clockRadius, heightScale]);
	return (
		<div
			css={css`
        ${handWidthCSS};
        ${handHeightCSS};
        position: absolute;
        transform: rotate(${rotateDeg}deg);
        ${advancedCSS};
      `}
		/>
	);
}

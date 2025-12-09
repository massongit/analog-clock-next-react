/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { css } from "@emotion/react";

export default function Clip({ clockRadius }: { clockRadius: number }) {
	return useMemo(() => {
		const size = clockRadius / 10;
		return (
			<div
				css={css`
          width: ${size}px;
          height: ${size}px;
          margin: ${clockRadius - size / 2}px;
          position: absolute;
          border-radius: 50%;
          background-color: black;
        `}
			/>
		);
	}, [clockRadius]);
}

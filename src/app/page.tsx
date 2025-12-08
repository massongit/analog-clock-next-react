"use client";
import { useEffect, useState } from "react";
import Clock from "@/app/clock";

export default function Home() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsClient(true);
		}
	}, []);
	if (isClient) {
		return (
			<main>
				<Clock />
			</main>
		);
	}
}

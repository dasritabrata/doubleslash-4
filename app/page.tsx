import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 text-4xl dark:bg-black">
			Welcome to DoubleSlash 4.0
			<Image src="/imgs/Devfolio_Logo-Colored.svg" height={100} width={100} alt="DEVFOLIO LOGO" />
		</div>
	);
}

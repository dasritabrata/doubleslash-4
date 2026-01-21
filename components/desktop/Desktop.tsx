import Image from "next/image";

export default function WindowsDesktop() {
	return (
		<section className="w-full h-full flex flex-col bg-[url(/imgs/DoubleSlashDithered.png)] bg-contain bg-center bg-no-repeat bg-[#0001]">
			<ul className="flex p-4 gap-4">
				<li className="grid place-items-center">
					<a href="#" className="contents z-20 transition hover:scale-105">
						<Image
							className="block"
							src="/logos/register.png"
							alt="register for the hackathon"
							width={36}
							height={36}
						/>
						<p className="">Register</p>
					</a>
				</li>
				<li className="grid place-items-center">
					<a href="#" className="contents z-20 transition hover:scale-105">
						<Image
							className="block"
							src="/logos/folder.png"
							alt="documents"
							width={36}
							height={36}
						/>
						<p className="">Documents</p>
					</a>
				</li>
				<li className="ml-auto grid place-items-center">
					<a href="#" className="contents z-20 transition hover:scale-105">
						<Image
							className="block"
							src="/logos/folder.png"
							alt="sponsors"
							width={36}
							height={36}
						/>
						<p className="">Sponsors</p>
					</a>
				</li>
			</ul>

			<div className="w-full mt-auto grid place-items-center">
				<ul className="flex w-fit gap-4 p-4 pb-5 items-center justify-center relative after:w-full after:h-[calc(67.7%-18px)] after:absolute after:top-1/3 after:left-0 after:rounded-md after:bg-white after:opacity-10">
					<li className="grid place-items-center">
						<a href="#" className="contents z-20 transition hover:scale-105">
							<Image
								className="block"
								src="/logos/register.png"
								alt="thanks"
								width={36}
								height={36}
							/>
							<p className="">Thanks</p>
						</a>
					</li>
					<li className="grid place-items-center">
						<a href="#" className="contents z-20 transition hover:scale-105">
							<Image
								className="block"
								src="/logos/register.png"
								alt="timeline"
								width={36}
								height={36}
							/>
							<p className="">Timeline</p>
						</a>
					</li>
					<li className="grid place-items-center">
						<a href="#" className="contents z-20 transition hover:scale-105">
							<Image className="block" src="/logos/register.png" alt="faq" width={36} height={36} />
							<p className="">FAQ</p>
						</a>
					</li>
					<li className="grid place-items-center">
						<a href="#" className="contents z-20 transition hover:scale-105">
							<Image
								className="block"
								src="/logos/register.png"
								alt="contact"
								width={36}
								height={36}
							/>
							<p className="">Contact</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

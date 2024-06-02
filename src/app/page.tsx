/* eslint-disable @next/next/no-img-element */
"use client";

import gcrs from "../../gcr-list/gcrs.json";

import { useEffect, useState } from "react";
import axios from "axios";

import dynamic from "next/dynamic";

interface GCR {
	twitterName: string;
	twitterHandle: string;
	twitterImgUrl: string;
	gcrType: string;
}

const Home = () => {
	const [data, setData] = useState<GCR[]>([]);

	useEffect(() => {
		setData(gcrs.list);
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
			<div className="z-10 w-sfull max-w-5xl items-center justify-between  text-sm lg:flex font-mono">
				<div className="px-4 sm:px-6 lg:px-8 w-screen">
					<div className="sm:flex sm:items-center">
						<div className="sm:flex-auto">
							<h1 className="text-2xl font-semibold leading-6 text-gray-50">GCRpedia</h1>
							<p className="mt-2 text-base text-gray-400 pb-1">An overview of all gcrs. </p>
							<div>
								<div
									onClick={() => {
										window.open("https://x.com/manzgoeggel", "_blank");
									}}
									className="flex items-center  space-x-2  group cursor-pointer"
								>
									<p className="text-gray-500 group-hover:text-gray-400 ease-in duration-150 ">Created by @mangoeggel</p>
									<img
										alt=""
										className="h-4 w-4 rounded-full group-hover:opacity-75 ease-in duration-150"
										src="https://pbs.twimg.com/profile_images/1787521938308395008/nCgQ9f2C_400x400.jpg"
									/>
								</div>
							</div>
						</div>
						<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
							<button
								type="button"
								className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in"
							>
								Add GCR
							</button>
						</div>
					</div>
					<div className="mt-8 flow-root">
						<div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
								<table className="min-w-full divide-y divide-gray-800  ">
									<thead>
										<tr>
											<th
												scope="col"
												className="bg-gray-800 sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0"
											>
												Name
											</th>
											<th scope="col" className="bg-gray-800 sticky top-0 z-10  px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
												GCR Type
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-gray-900">
										{data.map((gcr, i) => (
											<tr key={i}>
												<td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
													<div className="flex items-center">
														<div className="h-11 w-11 flex-shrink-0">
															<img className="h-11 w-11 rounded-full " src={gcr.twitterImgUrl} alt="" />
														</div>
														<div className="ml-4">
															<div className="font-medium text-gray-50">{gcr.twitterName}</div>
															<div
																onClick={() => {
																	window.open(`https://x.com/${gcr.twitterHandle}`, "_blank");
																}}
																className="mt-1 text-gray-500 hover:text-yellow-400 transition-all duration-150 ease-in cursor-pointer"
															>
																@{gcr.twitterHandle}
															</div>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
													<div className="text-yellow-400">{gcr.gcrType}</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default dynamic(() => Promise.resolve(Home), {
	ssr: false,
});

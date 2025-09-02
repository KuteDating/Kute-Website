
import React from "react";

export default function DeleteAccount(): React.ReactElement {
	return (
		<main className="min-h-screen bg-gray-900 relative p-5 flex items-center justify-center">
			<div className="relative w-full max-w-4xl z-10">
				<div className="bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-12 relative overflow-hidden border border-gray-700/50">
					{/* Top gradient border */}
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de822c] via-[#ff172e] to-[#de822c] bg-[length:400%_100%] animate-pulse"></div>
					
					<div className="text-center mb-8">
						<div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-full text-white shadow-lg mb-8 animate-pulse">
							<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
								<line x1="12" y1="9" x2="12" y2="13"/>
								<line x1="12" y1="17" x2="12.01" y2="17"/>
							</svg>
						</div>
					</div>

					<header className="text-center mb-10">
						<h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#de822c] to-[#ff172e] bg-clip-text text-transparent mb-4 tracking-tight">
							Delete Your Account
						</h1>
						<p className="text-lg text-gray-300 font-normal">
							Permanent account deletion guide for Kute
						</p>
					</header>

					<section className="flex items-center bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-2xl p-6 mb-8 shadow-lg">
						<div className="text-3xl mr-5 animate-bounce">⚠️</div>
						<div>
							<h3 className="text-xl font-bold text-white mb-2">Warning: This action is irreversible</h3>
							<p className="text-white font-medium">Once deleted, your profile, matches, and messages cannot be recovered.</p>
						</div>
					</section>

					<section className="mb-12">
						<h2 className="text-3xl font-bold text-white mb-8 flex items-center">
							Step-by-Step Deletion Process
						</h2>
						<div className="relative">
							<ol className="list-none p-0 m-0 relative">
								{/* Connecting line */}
								<div className="absolute left-6 top-15 bottom-15 w-0.5 bg-gradient-to-b from-[#de822c] to-[#ff172e]"></div>
								
								<li className="flex items-start mb-8 relative">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white flex items-center justify-center font-bold text-lg mr-5 shadow-lg z-10 relative">
										1
									</div>
									<div className="pt-1">
										<strong className="block text-xl font-bold text-white mb-2">Open Settings</strong>
										<p className="text-gray-300 text-base leading-relaxed">Tap the settings icon in the top right corner of the Kute app</p>
									</div>
								</li>
								<li className="flex items-start mb-8 relative">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white flex items-center justify-center font-bold text-lg mr-5 shadow-lg z-10 relative">
										2
									</div>
									<div className="pt-1">
										<strong className="block text-xl font-bold text-white mb-2">Scroll Down</strong>
										<p className="text-gray-300 text-base leading-relaxed">Swipe down on the settings screen to find account options</p>
									</div>
								</li>
								<li className="flex items-start mb-8 relative">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white flex items-center justify-center font-bold text-lg mr-5 shadow-lg z-10 relative">
										3
									</div>
									<div className="pt-1">
										<strong className="block text-xl font-bold text-white mb-2">Find Delete Option</strong>
										<p className="text-gray-300 text-base leading-relaxed">Look for and tap the "Delete Account" button</p>
									</div>
								</li>
								<li className="flex items-start mb-8 relative">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white flex items-center justify-center font-bold text-lg mr-5 shadow-lg z-10 relative">
										4
									</div>
									<div className="pt-1">
										<strong className="block text-xl font-bold text-white mb-2">Confirm Deletion</strong>
										<p className="text-gray-300 text-base leading-relaxed">In the alert popup, tap "Delete Account" then "Delete Permanently"</p>
									</div>
								</li>
								<li className="flex items-start mb-8 relative">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white flex items-center justify-center font-bold text-lg mr-5 shadow-lg z-10 relative">
										5
									</div>
									<div className="pt-1">
										<strong className="block text-xl font-bold text-white mb-2">Account Deleted</strong>
										<p className="text-gray-300 text-base leading-relaxed">Your account has been successfully and permanently deleted</p>
									</div>
								</li>
							</ol>
						</div>
					</section>

					<section className="my-14 p-10 bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-3xl text-white shadow-xl">
						<h3 className="text-2xl font-bold mb-8 text-center">Consider These Alternatives</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
								<span className="text-4xl block mb-4">⏸️</span>
								<h4 className="text-lg font-bold mb-3">Pause Account</h4>
								<p className="text-sm opacity-90 leading-relaxed">Temporarily hide your profile without losing data</p>
							</div>
							
							<div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
								<span className="text-4xl block mb-4">🔕</span>
								<h4 className="text-lg font-bold mb-3">Disable Notifications</h4>
								<p className="text-sm opacity-90 leading-relaxed">Turn off all app notifications in settings</p>
							</div>
						</div>
					</section>

					<footer className="mt-14 border-t border-gray-700/50 pt-10">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<div>
								<h4 className="text-xl font-bold text-white mb-4">Need Help?</h4>
								<p className="text-gray-300 leading-relaxed">Contact our support team if you have questions about account deletion or need assistance with alternative options.</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm leading-relaxed">This guide shows you how to permanently delete your account on the Kute dating app. Please proceed with caution.</p>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</main>
	);
}

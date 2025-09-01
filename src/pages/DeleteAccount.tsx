
import React from "react";
import "./DeleteAccount.css";

export default function DeleteAccount(): React.ReactElement {
	return (
		<main className="delete-account-page">
			<div className="da-background-pattern">
				<div className="da-container">
					<div className="da-icon-wrapper">
						<div className="da-warning-icon">
							<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
								<line x1="12" y1="9" x2="12" y2="13"/>
								<line x1="12" y1="17" x2="12.01" y2="17"/>
							</svg>
						</div>
					</div>

					<header className="da-header">
						<h1 className="da-title">Delete Your Account</h1>
						<p className="da-subtitle">Permanent account deletion guide for Kute</p>
					</header>

					<section className="da-warning-box">
						<div className="da-warning-icon-small">⚠️</div>
						<div className="da-warning-content">
							<h3>Warning: This action is irreversible</h3>
							<p>Once deleted, your profile, matches, and messages cannot be recovered.</p>
						</div>
					</section>

					<section className="da-section">
						<h2 className="da-section-title">
							Step-by-Step Deletion Process
						</h2>
						<div className="da-steps-container">
							<ol className="da-steps">
								<li className="da-step">
									<div className="da-step-number">1</div>
									<div className="da-step-content">
										<strong>Open Settings</strong>
										<p>Tap the settings icon in the top right corner of the Kute app</p>
									</div>
								</li>
								<li className="da-step">
									<div className="da-step-number">2</div>
									<div className="da-step-content">
										<strong>Scroll Down</strong>
										<p>Swipe down on the settings screen to find account options</p>
									</div>
								</li>
								<li className="da-step">
									<div className="da-step-number">3</div>
									<div className="da-step-content">
										<strong>Find Delete Option</strong>
										<p>Look for and tap the "Delete Account" button</p>
									</div>
								</li>
								<li className="da-step">
									<div className="da-step-number">4</div>
									<div className="da-step-content">
										<strong>Confirm Deletion</strong>
										<p>In the alert popup, tap "Delete Account" then "Delete Permanently"</p>
									</div>
								</li>
								<li className="da-step">
									<div className="da-step-number">5</div>
									<div className="da-step-content">
										<strong>Account Deleted</strong>
										<p>Your account has been successfully and permanently deleted</p>
									</div>
								</li>
							</ol>
						</div>
					</section>

					<section className="da-alternatives">
						<h3 className="da-alternatives-title">Consider These Alternatives</h3>
						<div className="da-alternatives-grid">
							<div className="da-alternative-card">
								<span className="da-alt-icon">⏸️</span>
								<h4>Pause Account</h4>
								<p>Temporarily hide your profile without losing data</p>
							</div>
							
							<div className="da-alternative-card">
								<span className="da-alt-icon">🔕</span>
								<h4>Disable Notifications</h4>
								<p>Turn off all app notifications in settings</p>
							</div>
						</div>
					</section>

					<footer className="da-footer">
						<div className="da-footer-content">
							<div className="da-help-section">
								<h4>Need Help?</h4>
								<p>Contact our support team if you have questions about account deletion or need assistance with alternative options.</p>
							</div>
							<div className="da-note-section">
								<p className="da-note">This guide shows you how to permanently delete your account on the Kute dating app. Please proceed with caution.</p>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</main>
	);
}

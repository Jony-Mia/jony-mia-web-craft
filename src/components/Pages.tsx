import Header from './Header';

type PricingTier = {
	name: string;
	price: string;
	features: string[];
	highlighted?: boolean;
	ctaText: string;
};

const pricingTiers: PricingTier[] = [
	{
		name: 'Starter Website',
		price: '$199',
		features: [
			'1-3 Page WordPress Website',
			'Mobile Responsive Design',
			'Basic SEO Setup',
			'Contact Form Integration',
			'1 Week Delivery',
		],
		ctaText: 'Start Project',
	},
	{
		name: 'Business Website',
		price: '$499',
		features: [
			'Up to 10 Pages (React or WordPress)',
			'Custom Theme/Design',
			'Blog & Portfolio Sections',
			'Performance Optimization',
			'2 Weeks Delivery',
			'Priority Support',
		],
		highlighted: true,
		ctaText: 'Choose Business',
	},
	{
		name: 'Advanced Web App',
		price: 'Custom Quote',
		features: [
			'Full-Stack React Application',
			'API Integration',
			'E-commerce or Membership Features',
			'Custom Admin Panel',
			'Ongoing Maintenance',
			'Consultation & Planning',
		],
		ctaText: 'Request Quote',
	},
];

export default function Pages() {
	return (
		<div className="min-h-screen m-auto flex flex-col bg-background">
			<Header />
			<main className="flex w-full flex-wrap max-w-7xl mx-auto p-4 md:p-8">
				<div className="w-full">
					<section id="about" className="max-w-3xl mx-auto mb-10 scroll-mt-24">
						<h2 className="text-3xl font-bold mb-4 tracking-tight text-center">About My Web Development Services</h2>
						<div className="flex flex-col md:flex-row gap-6">
							<div className="flex-1 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 shadow">
								<h3 className="text-xl font-semibold mb-2 text-primary">React Development</h3>
								<p className="text-zinc-700 dark:text-zinc-200 text-base">
									I build fast, modern, and scalable web applications using React. My expertise includes custom UI development, state management, API integration, and deploying production-ready SPAs and PWAs. Whether you need a landing page or a complex dashboard, I deliver clean, maintainable code and a seamless user experience.
								</p>
							</div>
							<div className="flex-1 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 shadow">
								<h3 className="text-xl font-semibold mb-2 text-primary">WordPress Development</h3>
								<p className="text-zinc-700 dark:text-zinc-200 text-base">
									I create custom WordPress websites tailored to your business needs. From theme customization and plugin development to SEO optimization and e-commerce solutions, I ensure your site is secure, responsive, and easy to manage. Perfect for blogs, portfolios, and business sites.
								</p>
							</div>
						</div>
					</section>
								<section id="pricing" className="scroll-mt-24">
									<h2 className="text-3xl font-bold mb-6 tracking-tight text-center">Pricing</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
										{pricingTiers.map((tier) => (
											<div
												key={tier.name}
												className={`flex flex-col border rounded-lg shadow-lg p-8 bg-white dark:bg-zinc-900 transition-all ${
													tier.highlighted ? 'border-primary ring-2 ring-primary scale-105 shadow-2xl' : 'border-zinc-200 dark:border-zinc-700'
												}`}
												id={
													tier.name === 'Starter Website' ? 'starter' :
													tier.name === 'Business Website' ? 'business' :
													tier.name === 'Advanced Web App' ? 'advanced' : undefined
												}
											>
												<h3 className="text-xl font-bold mb-2 text-center">{tier.name}</h3>
												{/* Add a label for React/WordPress focus */}
												<div className="flex justify-center mb-2">
													{tier.name === 'Starter Website' && (
														<span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 mr-2">WordPress</span>
													)}
													{tier.name === 'Business Website' && (
														<span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 mr-2">React / WordPress</span>
													)}
													{tier.name === 'Advanced Web App' && (
														<span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 mr-2">React</span>
													)}
												</div>
												<div className="text-4xl font-extrabold text-center mb-4">{tier.price}</div>
												<ul className="flex-1 space-y-2 mb-6">
													{tier.features.map((feature) => (
														<li key={feature} className="flex items-center gap-2">
															<span className="inline-block w-2 h-2 rounded-full bg-green-500" />
															<span>{feature}</span>
														</li>
													))}
												</ul>
												<button
													className={`w-full py-3 rounded font-semibold text-lg transition-colors ${
														tier.highlighted
															? 'bg-primary text-white hover:bg-primary/90'
															: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700'
													}`}
												>
													{tier.ctaText}
												</button>
											</div>
										))}
									</div>
								</section>
				</div>
			</main>
		</div>
	);
}

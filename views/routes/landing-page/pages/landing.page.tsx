import { Suspense } from 'react'
import MainLayout from '@/components/common/layouts/main-layout'
import LandingPageContent from '@/views/routes/landing-page/components/content-section/content'
import HeroSection from '@/views/routes/landing-page/components/hero-section'

function LandingPageView() {
	return (
		<div>
			<Suspense fallback={<div>Loading Hero Section...</div>}>
				<HeroSection />
			</Suspense>

			<MainLayout>
				<Suspense fallback={<div>Loading Content...</div>}>
					<LandingPageContent />
				</Suspense>
			</MainLayout>
		</div>
	)
}

export default LandingPageView

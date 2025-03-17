'use client'

import Pagination from '@/components/common/pagination'
import AsideContent from '@/views/routes/landing-page/components/content-section/aside-content'
import LandingPageMainContent from '@/views/routes/landing-page/components/content-section/main-content'
import { useSearchParams } from 'next/navigation'

function LandingPageContent() {
	const params = useSearchParams()

	return (
		<div className="pb-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
				<div className="col-span-2">
					<LandingPageMainContent />
				</div>
				<div className="col-span-1 hidden lg:block">
					<AsideContent />
				</div>
			</div>

			<Pagination currentPage={Number(params?.get('page')) || 0} totalPages={5} />
		</div>
	)
}

export default LandingPageContent

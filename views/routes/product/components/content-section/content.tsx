import AsideContent from '@/views/routes/product/components/content-section/aside-content'
import ProductPageMainContent from '@/views/routes/product/components/content-section/main-content'

function ProductPageContent() {
	return (
		<div className="pb-10 pt-20">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
				<div className="col-span-2">
					<ProductPageMainContent />
				</div>
				<div className="col-span-1 hidden lg:block">
					<AsideContent />
				</div>
			</div>
		</div>
	)
}

export default ProductPageContent

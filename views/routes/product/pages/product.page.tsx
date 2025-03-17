import Breadcrumb from '@/components/common/breadcrumb'
import ProductPageContent from '@/views/routes/product/components/content-section/content'

const breadcrumbItems = [
	{ label: 'Trang chủ', href: '/' },
	{ label: 'Tài nguyên', href: '/' },
	{ label: 'Blog', href: '/' },
	{ label: 'Quản lý sản xuất', href: '/' },
]

function ProductPageView() {
	return (
		<div className="py-24">
			<Breadcrumb items={breadcrumbItems} />

			<ProductPageContent />
		</div>
	)
}

export default ProductPageView

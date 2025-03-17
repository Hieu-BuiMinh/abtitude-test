import MainLayout from '@/components/common/layouts/main-layout'
import React from 'react'

function ProductPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <MainLayout>{children}</MainLayout>
}

export default ProductPageLayout

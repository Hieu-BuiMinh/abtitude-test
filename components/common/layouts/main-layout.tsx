import React from 'react'

function MainLayout({ children }: { children: React.ReactNode }) {
	return <div className="max-w-[1420px] px-5 m-auto">{children}</div>
}

export default MainLayout

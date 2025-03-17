import React from 'react'

interface ICategoryList {
	categories: {
		label: string
		count: number
	}[]
}

function AsideCategory({ categories }: ICategoryList) {
	return (
		<div className="w-full p-4">
			<h2 className="font-semibold text-xl mb-4">Danh Mục</h2>
			<ul>
				{categories.map((category, index) => (
					<li key={index} className="flex justify-between py-2 border-b border-[#F1F5F7]">
						<span className="text-lg">{category.label}</span>
						<span className="text-gray-600">{category.count}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AsideCategory

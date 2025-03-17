'use client'

import {
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as ShadcnPagination,
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange?: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

	const handlePageChange = (page: number) => {
		if (onPageChange) {
			onPageChange(page)
		}
	}

	return (
		<ShadcnPagination>
			<PaginationContent className="flex w-full justify-between">
				{currentPage !== 1 ? (
					<PaginationItem>
						<PaginationPrevious
							href={`?page=${currentPage - 1}`}
							onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
						/>
					</PaginationItem>
				) : (
					<span />
				)}

				<div className="flex gap-3">
					{pages.map((page) => (
						<PaginationItem key={page}>
							<PaginationLink
								href={`?page=${page}`}
								isActive={page === currentPage}
								onClick={() => handlePageChange(page)}
								className={cn(
									'px-4 py-2 rounded-sm border-none font-semibold',
									page === currentPage
										? 'bg-[#D1F7EA] text-[#052B1E]'
										: 'bg-transparent text-[#809FB8]'
								)}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					))}

					{/* {currentPage < totalPages && (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					)} */}
				</div>

				{currentPage !== totalPages ? (
					<PaginationItem>
						<PaginationNext
							href={`?page=${currentPage + 1}`}
							onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
						/>
					</PaginationItem>
				) : (
					<span />
				)}
			</PaginationContent>
		</ShadcnPagination>
	)
}

export default Pagination

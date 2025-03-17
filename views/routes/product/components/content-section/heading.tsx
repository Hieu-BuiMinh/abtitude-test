import React from 'react'

import { cn } from '@/lib/utils'

type Types = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingProps<T extends Types> = Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
	as?: T
}

const Heading = <T extends Types = 'h1'>(props: HeadingProps<T>) => {
	const { as, className, children, ...rest } = props
	const Component = as ?? 'h1'

	// Apply different styles based on the heading type using a switch case
	let headingClass = ''

	switch (Component) {
		case 'h1':
			headingClass = 'font-bold text-lg text-[#15AA7A] my-2'
			break
		case 'h2':
			headingClass = 'font-bold text-base text-[#15AA7A] my-2'
			break
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
			headingClass = 'font-bold text-sm text-[#15AA7A] my-2'
			break
		default:
			headingClass = 'font-bold text-[#15AA7A]'
	}

	return (
		<Component className={cn(headingClass, className)} id={children?.toString()} {...rest}>
			<span className="not-prose group">{children}</span>
		</Component>
	)
}

export default Heading

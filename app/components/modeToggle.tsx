'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			size={'icon'}
			variant={'ghost'}
			onClick={() => setTheme('light')}
		>
			<Sun />
		</Button>
	) : (
		<Button
			onClick={() => setTheme('dark')}
			variant={'ghost'}
			size={'icon'}
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle

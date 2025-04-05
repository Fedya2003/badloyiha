'use client';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ModeToggle from './modeToggle';
import Mobile from './mobile';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function Navbar() {
    const pathname = usePathname();
    return (
        <div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
            <div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
                <Link href={'/'}>
                    <h1 className='text-4xl font-oswald'>Bads</h1>
                </Link>

                <div className='gap-2 hidden md:flex'>
                    {navLinks.map(nav => (
                        <Link
                            href={nav.route}
                            key={nav.route}
                            className={cn(
                                'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                                pathname === nav.route && 'text-blue-400'
                            )}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-4'>
                    {/* <GlobalSearch /> */}
                    <ModeToggle />
                    <Mobile />
                    <SignedOut>
                        <SignInButton mode='modal' />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import { LogMessage } from '@/app/log-message';

import './globals.css';

export const metadata: Metadata = {
  title: 'Houses We Die In',
  description: 'Houses We Die In - Austin, TX metalcore',
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Link className="px-2 text-xl font-bold md:text-2xl" href={href}>
      {children}
    </Link>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LogMessage />
        <div className="mx-auto w-full max-w-[768px] overflow-hidden py-8 md:overflow-visible">
          <div className="paper-bg group flex -rotate-[4deg] items-center justify-center p-4 transition-all hover:scale-105 md:p-8">
            <img
              className="transition-all group-hover:scale-125"
              alt="Logo"
              src="/logos/logo-main.svg"
            />
          </div>
          <main className="mt-4 flex min-h-[600px] flex-col bg-orange-50 pb-8">
            <nav className="flex flex-wrap items-center justify-evenly gap-4 bg-orange-50 px-8 py-6">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/live">Live</NavItem>
              <NavItem href="/songs">Songs</NavItem>
              <NavItem href="/about">About</NavItem>
            </nav>
            {children}
          </main>
          <div className="flex items-center justify-center gap-4 p-8">
            <div className="flex flex-col">
              <Link href="/very-important">
                <img src="/images/click-here-button.gif" alt="click here" />
              </Link>
            </div>
            {process.env.NODE_ENV === 'production' && (
              <a href="https://www.free-website-hit-counter.com">
                <img
                  src="https://www.free-website-hit-counter.com/c.php?d=6&id=155129&s=1"
                  alt="Free Website Hit Counter"
                />
              </a>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import { LogMessage } from '@/app/log-message';

import './globals.css';
import Marquee from 'react-fast-marquee';

export const metadata: Metadata = {
  title: 'Houses We Die In',
  description: 'Houses We Die In - Austin, TX metalcore',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/favicon-black-32x32.png',
        href: '/icons/favicon-black-32x32.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icons/favicon-white-32x32.png',
        href: '/icons/favicon-white-32x32.png',
      },
    ],
  },
};

interface NavItemProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export const NavItem = ({ href, external, children }: NavItemProps) => {
  return (
    <Link
      className="px-2 text-xl font-bold md:text-2xl"
      href={href}
      target={external ? '_blank' : undefined}
    >
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
          <div className="paper-bg group flex h-[100px] -rotate-[6deg] items-center justify-center px-4 transition-all hover:scale-105 md:h-[120px] md:-rotate-[4deg] md:px-8">
            <img
              className="mt-2 w-[460px] opacity-90 transition-all group-hover:scale-110"
              alt="Logo"
              src="/assets/main-logo.png"
            />
          </div>
          <main className="mt-4 flex min-h-[600px] flex-col bg-orange-50 pb-8">
            <nav className="flex flex-wrap items-center justify-evenly gap-4 bg-orange-50 px-4 py-4 md:px-8 md:py-6">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/shows">Shows</NavItem>
              <NavItem href="/releases">Releases</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem external href="https://houseswedieintx.bandcamp.com">
                Store
              </NavItem>
            </nav>
            {children}
          </main>
          <div className="flex items-center justify-center gap-4 p-4">
            <a href="https://www.entrances2hell.co.uk/" target="_blank">
              <img src="/images/click-here-button.gif" alt="click here" />
            </a>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
          <Marquee className="bg-black py-1 text-[lawngreen]" speed={40}>
            NEW SONG &quot;PORTRAITS OF YOU&quot; OUT NOW WORLDWIDE&nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </Marquee>
        </div>
      </body>
    </html>
  );
}

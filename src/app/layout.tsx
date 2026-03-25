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
        url: '/favicon-flower/favicon-32x32.png',
        href: '/favicon-flower/favicon-32x32.png',
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
      className="px-2 text-xl font-bold"
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
  function renderMarqueeLine(text: string, spacesAfter = 60) {
    return (
      <>
        {text}
        {'\u00A0'.repeat(spacesAfter)}
      </>
    );
  }

  return (
    <html lang="en">
      <body>
        <LogMessage />
        <div className="mx-auto w-full max-w-[768px] overflow-hidden py-8 md:overflow-visible">
          <div className="flex items-center justify-center bg-stone-800 px-4 md:px-8">
            <Link href="/">
              <img
                className="mt-2 w-[460px] invert transition-all md:hover:scale-110"
                alt="Logo"
                src="/assets/main-logo.png"
              />
            </Link>
          </div>
          <main className="flex min-h-[600px] flex-col bg-orange-50 pb-8">
            <nav className="mb-6 flex flex-wrap items-center justify-evenly gap-2 bg-stone-200 px-4 py-4 md:gap-4 md:px-8">
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
          <Marquee className="bg-black py-1 text-orange-500" speed={40}>
            {renderMarqueeLine('NEW EP OUT APRIL 3RD ON PAPER WINGS RECORDS')}
            {renderMarqueeLine(
              'EP RELEASE SHOW APRIL 12TH AT BRUSHY STREET COMMONS',
            )}
          </Marquee>
        </div>
      </body>
    </html>
  );
}

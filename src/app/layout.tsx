import { Metadata } from 'next';
import Link from 'next/link';

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
        <div className="mx-auto w-full max-w-[768px] overflow-hidden py-8">
          <div className="paper-bg flex -rotate-[4deg] items-center justify-center p-8">
            <h1 className="whitespace-nowrap text-5xl">houseswediein</h1>
          </div>
          <main className="mt-4 flex min-h-[600px] flex-col bg-orange-50 pb-8">
            <nav className="flex flex-wrap items-center justify-evenly gap-4 bg-orange-50 px-8 py-6">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/live">Live</NavItem>
              <NavItem href="/lyrics">Lyrics</NavItem>
              <NavItem href="/tabs">Tabs</NavItem>
            </nav>
            {children}
          </main>
          <div className="flex items-center justify-center gap-4 p-8">
            <div className="flex flex-col">
              <Link href="/very-important">
                <img src="/images/click-here-button.gif" alt="click here" />
              </Link>
            </div>
            <div className="bg-black text-2xl text-[lime]">HIT COUNTER</div>
          </div>
        </div>
      </body>
    </html>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Songs | HWDI',
  description: 'Songs by Houses We Die In',
};

export default function Page() {
  return (
    <div className="px-8">
      <div className="text-2xl">SOON™️</div>
      {/* <ul className="list-disc px-8">
        <li>
          <Link className="text-xl" href="/songs/test-song">
            Test Song
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

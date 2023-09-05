import Link from 'next/link';

export default function Page() {
  return (
    <div className="px-8">
      <ul className="list-disc px-8">
        <li>
          <Link className="text-xl" href="/songs/room-409">
            Room 409
          </Link>
        </li>
      </ul>
    </div>
  );
}

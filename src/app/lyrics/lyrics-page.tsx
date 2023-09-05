interface LyricsPageProps {
  title: string;
  children: React.ReactNode;
}

export const LyricsPage = ({ title, children }: LyricsPageProps) => {
  return (
    <div className="px-8 text-center">
      <h2 className="text-3xl font-medium">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
};

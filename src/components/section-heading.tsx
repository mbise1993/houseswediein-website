import { cn } from '@/util/cn';

export interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

export const SectionHeading = ({
  className = '',
  children,
}: SectionHeadingProps) => {
  return (
    <h2 className={cn('mb-2 text-3xl font-medium', className)}>{children}</h2>
  );
};

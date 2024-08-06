import { cn } from '@/util/cn';

/* eslint-disable jsx-a11y/alt-text */
export interface PromoPhotoProps {
  className?: string;
  src: string;
  alt: string;
  photographer?: string;
}

export const PromoPhoto = ({
  className = '',
  photographer,
  ...imgProps
}: PromoPhotoProps) => {
  return (
    <>
      <img className={cn('max-h-[300px]', className)} {...imgProps} />
      {photographer && (
        <span className="text-sm">
          Credit:{' '}
          <a href={`https://instagram.com/${photographer}`} target="_blank">
            @{photographer}
          </a>
        </span>
      )}
    </>
  );
};

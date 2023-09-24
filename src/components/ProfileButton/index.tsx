import { useRouter } from 'next/router';

interface ProfileButtonProps {
  width: number;
  height: number;
}

export default function ProfileButton({ width, height }: ProfileButtonProps) {
  const router = useRouter();
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="rounded-full bg-[url('/assets/onboarding1.jpeg')] object-fill bg-center border-2 border-[#F34E4E] border-solid cursor-pointer"
      onClick={() => router.push('/mypage')}
    />
  );
}

import { useRouter } from 'next/router';

export default function ProfileButton() {
  const router = useRouter();
  return (
    <div
      className="rounded-full bg-[url('/assets/onboarding1.jpeg')] w-[52.563px] h-[52.563px] object-fill bg-[center] border-2 border-[#F34E4E] border-solid"
      onClick={() => router.push('/mypage')}
    />
  );
}

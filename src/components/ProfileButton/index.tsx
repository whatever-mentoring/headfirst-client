import { useRouter } from 'next/router';
import Image from 'next/image';
interface ProfileButtonProps {
  width: number;
  height: number;
}

export default function ProfileButton({ width, height }: ProfileButtonProps) {
  const router = useRouter();
  return (
    <Image
      src="/assets/user-circle.svg"
      alt="mypage"
      className="bg-white rounded-[100%]"
      width={width}
      height={height}
      onClick={() => router.push('/mypage')}
    />
  );
}

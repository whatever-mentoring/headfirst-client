import Image from 'next/image';
import Link from 'next/link';
import KakaoButton from '@/components/KakaoButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface OnboardingMessage {
  id: number;
  message: string;
}

const onboardingMessageList: OnboardingMessage[] = [
  {
    id: 1,
    message: `여러분이 남기고 싶은 \n 사연을 적어보세요`,
  },
  {
    id: 2,
    message: `장소를 선택하거나 검색어를 \n 입력해 여러분의 사연을 \n 작성해보세요!`,
  },
  // {
  //   id: 3,
  //   message: `다른 사연을 읽고 \n 답글을 남길 수도 있어요!`,
  // },
  {
    id: 4,
    message: '',
  },
];

export default function OnboardingSwiper() {
  const router = useRouter();
  const [initialSlide, setInitialSlide] = useState<number | null>(null);

  // 첫방문 유저 캐러셀 상태 제어
  useEffect(() => {
    localStorage.getItem('isFirstVisitor') ? setInitialSlide(3) : setInitialSlide(0);
  }, []);

  const handleStart = () => {
    localStorage.setItem('isFirstVisitor', 'true');
    router.push('/main');
  };

  if (initialSlide === null) {
    return null;
  }

  return (
    <div className="flex h-screen mx-auto bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white">
        <Swiper
          initialSlide={initialSlide}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          loop={false}
          pagination={{ clickable: true }}
          navigation
        >
          {onboardingMessageList.map((item) => (
            <SwiperSlide key={item.id}>
              {item.id !== 4 ? (
                <>
                  <div
                    className="w-[288px] h-[145px] text-xl text-start"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {item.message}
                  </div>
                  <Image
                    src={`/assets/onboarding${item.id}.png`}
                    width={240}
                    height={388}
                    alt="onboarding-img"
                  />
                  {/* <div className="w-[240px] h-[388px] bg-blue-200"></div> */}
                </>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[192px] h-[87px] flex flex-col justify-center items-center mb-[73px]">
                    <div className="text-4xl font-extrabold text-[#EF6262]">사서함 1호</div>
                    <div className="text-base font-medium text-[#EF6262]">
                      장소 기반 사연 작성 서비스
                    </div>
                  </div>
                  <Image
                    alt="logo"
                    src="/assets/logo.svg"
                    width={360}
                    height={306}
                    className="mb-[72px]"
                  />
                  <KakaoButton />
                  <Link
                    href="/main"
                    className="text-[#939393] text-sm mt-[11px]"
                    onClick={() => {
                      handleStart;
                    }}
                  >
                    건너뛰기
                  </Link>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

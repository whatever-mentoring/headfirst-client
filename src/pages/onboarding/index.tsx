import Image from 'next/image';
import Link from 'next/link';
import KakaoButton from '@/components/KakaoButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  {
    id: 3,
    message: `다른 사연을 읽고 \n 답글을 남길 수도 있어요!`,
  },
  {
    id: 4,
    message: '',
  },
];

export default function OnboardingSwiper() {
  return (
    <div className="flex h-screen mx-auto bg-red-200">
      <div className="flex w-[360px] h-screen mx-auto bg-white">
        <Swiper
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
                  <div className="w-[288px] text-xl text-start" style={{ whiteSpace: 'pre-line' }}>
                    {item.message}
                  </div>
                  <Image
                    src={`/assets/onboarding${item.id}.jpeg`}
                    width={288}
                    height={388}
                    alt="onboarding-img"
                    className="w-[240px] y-[380px] text-xl text-center"
                  />
                </>
              ) : (
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <Image
                    alt="logo"
                    src="/assets/logo.svg"
                    width={180}
                    height={30}
                    className="mb-[20px]"
                  />
                  <KakaoButton />
                  <Link href="/main" className="text-[#939393] text-sm">
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

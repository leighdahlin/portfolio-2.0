import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import FlatButtonLink from './FlatButtonLink';
import Image from 'next/image';
import checkImage from './img/circle-check.png';

// import PackagesAtAGlanceSlide from './PackagesAtAGlanceSlide';

export default function PackagesAtAGlance() {
  const slides = [
    {
      secondaryTitle: 'Full Service',
      secondaryTitleSubtext: 'Starting at $1,000',
      title: 'Design + Development Package',
      link: '/work-with-me/?package=dev-and-design',
      bulletPoints: [
        'Website Design (up to 10 pages)',
        'Hosting set-up and performance optimization',
        'React web-site development',
        'First month of website maintenance included',
      ],
    },
    {
      secondaryTitle: 'Development Only',
      secondaryTitleSubtext: 'Starting at $500',
      title: 'React Development Package',
      link: '/work-with-me/?package=dev',
      bulletPoints: [
        'Web Page Development (up to 8 pages)',
        'Hosting set-up and performance optimization',
        'Choice of Github or Netlify Hosting',
        'First month of website maintenance included',
      ],
    },
    {
      secondaryTitle: 'Design Only',
      secondaryTitleSubtext: 'Starting at $400',
      title: 'Figma Design Package',
      link: '/work-with-me/?package=design',
      bulletPoints: [
        'Website design (up to 8 pages)',
        'All designs provided in Figma for pixel-perfect',
        'Custom graphics and interaction design included',
        'Exclusive use of design elements included',
      ],
    },
    {
      secondaryTitle: 'Maintenance',
      secondaryTitleSubtext: 'Starting at $50',
      title: 'Monthly Maintenance Package',
      link: '/work-with-me/?package=maintenance',
      bulletPoints: [
        'Performance improvements',
        'Backups',
        'Page Speed Analysis',
        'Code Optimization',
      ],
    },
  ];
  return (
    <Swiper
      slidesPerView="auto"
      loop={true}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="packages-at-a-glance"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.title} className="mx-auto">
          <div className="bg-off-white rounded-xl w-full max-w-[450px] lg:max-w-[550px] h-full lg:h-[310px] p-[25px] border border-darkGreen flex flex-col gap-[20px] mb-[30px] lg:mb-[40px] mt-[40px] mx-auto">
            <div className="flex flex-col sm:flex-row gap-[1rem] justify-between">
              <div className="flex flex-col">
                <h3 className="uppercase">{s.secondaryTitle}</h3>
                <p className="text-[12px]">{s.secondaryTitleSubtext}</p>
              </div>
              <FlatButtonLink
                text="Learn More"
                link={s.link}
                bgColor={'transparent'}
                hoverBgColor={'darkGreen'}
                border={true}
                textColor="darkGreen"
                hoverTextColor="off-white"
              />
            </div>
            <h1 className="text-[1.65rem] lg:text-[2rem]">{s.title}</h1>
            <ul>
              {s.bulletPoints.map((p) => (
                <li key={p} className="flex gap-[8px] pb-[8px] items-center">
                  <Image
                    src={checkImage}
                    alt="check"
                    width={60}
                    height={60}
                    className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                  />
                  <p>{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

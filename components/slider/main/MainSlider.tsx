import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick'
import MainNextArrow from './MainNextArrow';
import MainPrevArrow from './MainPrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideWrapper = styled.section`
  position: relative;
  width: 100%;
  margin:0;
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
  /** 다음 화살표 */
  nextArrow?: any
  /** 이전 화살표 */
  prevArrow?: any
}

const MainSlider = ({
  children,
  className,
  autoplay = true,
  speed = 400,
  loop = true,
  nextArrow,
  prevArrow
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
      nextArrow: <MainNextArrow />,
      prevArrow: <MainPrevArrow />
    }),
    [autoplay, loop, speed],
  );

  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  )
}

export default MainSlider
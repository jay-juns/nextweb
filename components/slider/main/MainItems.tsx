import React from 'react'
import styled from 'styled-components'
import MainSlider from './MainSlider'

interface itemsProps {
  item: string,
  name: string
}
const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: auto;
  }
`;

const items:itemsProps[] = [
  {
    item: '/images/slider/slider_01.jpg',
    name: '이미지01'
  },
  {
    item: '/images/slider/slider_02.jpg',
    name: '이미지02'
  },
  {
    item: '/images/slider/slider_03.jpg',
    name: '이미지03'
  },    
]

const MainItems = () => {
  return (
    <MainSlider>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </MainSlider>
  )
}

export default MainItems
import React from 'react'
import styled from 'styled-components'
import MainSlider from './MainSlider'

interface itemsProps {
  item: string,
  name: string
}
const SliderItem = styled.div`
  max-width: 100%;
  height: 800px;
  img{
    width: 100%;
    height: auto;
    object-fit:cover;
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
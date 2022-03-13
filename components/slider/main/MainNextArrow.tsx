import React from 'react'

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MainNextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <div className='next-arrow' onClick={onClick}>다음 버튼</div>
  )
}

export default MainNextArrow
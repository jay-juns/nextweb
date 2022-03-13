import React from 'react'

interface PrevArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MainPrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <div className='prev-arrow' onClick={onClick}>이전버튼</div>
  )
}

export default MainPrevArrow
import React from 'react'
import { Icon } from '@iconify/react';

interface PrevArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MainPrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <div className='prev-arrow' onClick={onClick}>
      <Icon className="prev" icon="ooui:previous-ltr" />
    </div>
  )
}

export default MainPrevArrow
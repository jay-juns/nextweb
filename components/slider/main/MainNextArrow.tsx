import React from 'react'
import { Icon } from '@iconify/react';

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MainNextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <div className='next-arrow' onClick={onClick}>
      <Icon className="next" icon="ooui:next-ltr" />
    </div>
  )
}

export default MainNextArrow
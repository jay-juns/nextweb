import React from 'react';

interface NavProps {
  navIsShow: boolean;
  children: React.ReactNode
}

const MobileNavMenu = ({ navIsShow, children }: NavProps) => {

  if(navIsShow) return null;

  return (
    <>
      <div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default MobileNavMenu
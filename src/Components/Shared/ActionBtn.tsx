import React from 'react';

type Props = {
    children: React.ReactNode;
}

const ActionBtn = ({children}: Props) => {
  return (
    <div>
        <button
            className='bg-primary-20 w-full font-poppins p-3 rounded-sm mt-3 text-[#FFFFFF] font-semibold'>
            {children}
        </button>
    </div>
  )
}

export default ActionBtn
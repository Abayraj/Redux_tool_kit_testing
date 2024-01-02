import React from 'react'

export const Header = () => {
  return (
    <div className='bg-black text-white font-sans text-xl '>
      <div className='flex justify-between p-4'>
        <h1>Logo</h1>
        <div className='flex gap-4 p-4'>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Cart</a>
        </div>
      </div>
    </div>
  )
}

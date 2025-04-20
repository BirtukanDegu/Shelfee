'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ number }: {number: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            end={number} 
            decimal=','
            duration={2.75}
        />
    </div>
  )
}

export default AnimatedCounter
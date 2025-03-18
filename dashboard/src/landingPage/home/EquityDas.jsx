import React from 'react'

const EquityDas = () => {
  return (
    <div className='p-6'>
      <h1 className='text-xl font-semibold py-11'>Equity</h1>
      <div className='flex'>
        <div className='w-6/12'>
          <h1 className='text-4xl font-bold py-8'>3.74k</h1>
          <h4 className='text-sm font-light pb-10'>
            Margin available
          </h4>
        </div>
        <div className='w-6/12'>
          <h4 className='text-sm text-gray-600'>
            Margin used: 0
          </h4>
          <h4 className='text-sm text-gray-600'>
            Opening balance: 3.74k
          </h4>
        </div>
      </div>
      <hr className='text-gray-300'/>
    </div>
  )
}

export default EquityDas
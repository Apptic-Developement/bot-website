import React from 'react'
import Loading from '../../../components/Loading/Loading'
type Props = {}

function Callback({ }: Props) {
  return (
    <div className='flex items-center justify-center h-40'>
      <Loading />
    </div>
  )
}

export default Callback
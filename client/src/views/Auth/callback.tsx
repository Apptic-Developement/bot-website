import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading/Loading'
import { useLocation } from 'react-router-dom'
import config from '../../../config.json'


type Props = {}

function Callback({ }: Props) {
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (!code) {
      window.location.href = config.LOGIN_URL
    } else {
      const getAccessToken = async (code: string) => {
        const res = await (await fetch(`${config.API_URL}/callback?code=${code}`, { method: 'POST' })).json()
      }
      getAccessToken(code)
    }

  }, [])

  return (
    <div className='flex items-center justify-center h-40'>
      <Loading />
    </div>
  )
}

export default Callback
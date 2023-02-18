import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../../components/Loading/Loading'
import { useLocation } from 'react-router-dom'
import config from '../../../config.json'
import { AuthContext } from '../../contexts/authContext'
import getLoginUrl from '../../../helpers/getLoginUrl'

type Props = {}

function Callback({ }: Props) {


  const { accessToken, setAccessToken } = useContext(AuthContext);
  const location = useLocation();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log("Code is", code)
    if (!code) {
      window.location.href = getLoginUrl()
    } else {
      const getAccessToken = async (code: string) => {
        const req = await fetch(`${config.API_URL}/callback?code=${code}`, { method: 'POST' })
        if(req.status !== 200){
          window.location.href = getLoginUrl()
          console.log("Status", req.status)
          console.log(await req.json())
        } else {
          const res = await req.json()
          setAccessToken(res.access_token)
          window.location.href = '/'
        }
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
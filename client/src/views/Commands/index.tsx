import React, { useState } from 'react'
import config from '../../../config.json'
import {FaSearch} from 'react-icons/fa'
type Props = {}

function Commands({ }: Props) {
  const [getCommands, setCommands] = useState('Fetching commands...');

  const fetchCommands = async () => {
    const req = await fetch(config.API_URL + '/commands');
    setCommands(JSON.stringify(await req.json()))
  }
  fetchCommands()
  return (
    <main className='container px-4 flex flex-col items-center justify-center w-full mx-auto'>

      <section className='w-full'>
        <div className='text-center font-bold text-3xl'>
          <h1>
            Apptic Commands
          </h1>
          <p className='font-normal text-sm'>
            Are you new to Apptic and want to know about all the commands and their usage?
            You've come to the right place!
          </p>
        </div>
      </section>

      {/* Search Bar */}

      <section className='w-full'>
        <div className='w-full flex bg-ancent-black border-dark-black border px-4 py-2 rounded-md mt-5'>
          <input
            className='bg-transparent border-none focus:outline-none '
            type="custom"
            name="Search commands"
            id="search_commands"
            autoComplete='off'
            placeholder='Search for command 🔍'
          />
        </div>
      </section>

      {/* Commands Button */}


    </main>
  )
}

export default Commands
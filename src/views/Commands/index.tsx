import React, { MouseEventHandler, useState } from 'react'
import commands from '../../../helpers/commands.json'
import { BsFillSlashSquareFill } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';
import Loading from '../../../components/Loading/Loading';


type CommandType = {
  name: string;
  description: string;
}

type CommandsType = {
  category: string;
  commands: Array<CommandType>
}

function Commands() {
  const [getCommands, setCommands] = useState<Array<CommandsType>>(commands);
  const [getActiveCategory, setActiveCategory] = useState('All');

  function handleSearch(input: string): void {
    const filteredCommands = commands.reduce((acc: Array<CommandsType>, command) => {
      const matchedCommands = command.commands.filter(cmd =>
        cmd.name.toLowerCase().includes(input.toLowerCase())
      );
      if (matchedCommands.length > 0) {
        acc.push({ category: command.category, commands: matchedCommands });
      }
      return acc;
    }, []);
    setCommands(filteredCommands);
  }
  
  

  const handleCommandChange = (name: string) => {
    setActiveCategory(name)
    if (name.toLowerCase() == 'all') {
      setCommands(commands)
    } else {

      const FilterCommands = (cmds: CommandsType) => {
        return name === cmds.category
      }

      setCommands(commands.filter(FilterCommands))
    }

  }

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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => (handleSearch(event.target.value))}
          />
        </div>
      </section>

      {/* Commands Buttons */}
      <section className="flex flex-wrap mt-4 w-full gap-2 justify-center">
        {
          commands && commands.map((command, index) => {
            return <CategoryButton
              key={index}
              name={command.category}
              activeName={getActiveCategory}
              onClick={() => (handleCommandChange(command.category))}
            />
          })
        }
      </section>

      {/* Commands */}
      <section className='flex flex-col w-full mt-5 gap-3'>
        {
          getCommands && getCommands.length > 0 ? (getCommands.map((cmds) => {
            return cmds && cmds.commands.map((cmd, index) => {
              return <CommandBox name={cmd.name} description={cmd.description} />
            })
          })) : (
            <div className='flex mx-auto h-screen'>
              <Loading/>
            </div>
          )
        }
      </section>


    </main>
  )
}

export default Commands;

type CategoryButtonProps = {
  name: string;
  activeName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}


const CategoryButton = ({ name, activeName, onClick }: CategoryButtonProps) => {

  const nonActiveCss = "px-5 py-3 bg-ancent-black rounded-md hover:bg-light-blurple transition-all duration-300 shadow-md shadow-dark-black";
  const activeCss = "px-5 py-3 rounded-md bg-dark-blurple transition-all duration-300 shadow-md shadow-dark-black";

  return (
    <button onClick={onClick} className={activeName.toLowerCase() === name.toLowerCase() ? activeCss : nonActiveCss}>
      {name}
    </button>
  )
}



const CommandBox = ({ name, description }: CommandType) => {
  const [isOpen, toggleAccordion] = useState<boolean>(false);
  return (
    <div className='bg-ancent-black px-4 py-2 w-full rounded-lg shadow-md shadow-light-black flex flex-col gap-2'>

      {/* Header */}
      <div
        onClick={() => (toggleAccordion(!isOpen))}
        className='flex items-center gap-1 justify-between'>
        <div className='flex items-center gap-1'>
          <BsFillSlashSquareFill className='text-dark-blurple' />
          <h2 className='font-medium'>{name}</h2>
        </div>
        <div>
          <FiArrowDown className={isOpen ? 'rotate-0' : 'rotate-180'} />
        </div>
      </div>

      {
        isOpen ? (
          <div className='flex flex-col px-3 py-2 bg-dark-black rounded-md text-md'>
            <div className='flex gap-1 flex-col'>
              <strong className='text-gray-400 text-sm'>Description</strong>
              <small>{description}</small>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}

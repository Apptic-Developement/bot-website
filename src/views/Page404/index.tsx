import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Page404() {
    const nagigate = useNavigate();
    return (
        <main className="container px-4 flex flex-col mx-auto h-screen">
            <section className="justify-center items-center gap-4 flex flex-col">
                {/* Head */}
                <div className="text-center flex flex-col gap-3">
                    <small className='text-light-blurple text-lg font-medium'>404 Error</small>
                    <h1 className='text-3xl font-bold'>We lost this page</h1>
                    <p className="text-gray-400 text-sm">
                        {'We searched high and low, but couldn’t find what you’re looking for.Let’s find a better place for you to go.'}
                    </p>
                </div>

                {/* Buttons */}
                <div className='flex flex-wrap gap-2 items-center justify-center'>
                    <div className='flex items-center justify-center gap-2 bg-ancent-black px-4 py-2 text-md font-medium rounded-lg border-2 border-transparent hover:border-white hover:bg-dark-black duration-300 transition-all'>
                        <AiOutlineArrowLeft />
                        <button onClick={() => (nagigate(-1))}>Go Back</button>
                    </div>

                    <div className='text-white flex items-center justify-center gap-2 bg-light-blurple px-4 py-2 text-md font-medium rounded-lg border-2 border-transparent hover:bg-dark-blurple duration-300 transition-all'>
                        <Link to={'/'}>Take me home</Link>
                    </div>
                </div>

                {/* Useful links */}

                <div className='w-full flex flex-col items-center'>


                    {/* Heading */}
                    <div className='text-3xl font-bold my-5'>
                        <h1>Useful Links</h1>
                    </div>


                    <div className="flex flex-col items-start justify-start gap-4">
                        <div className='flex flex-col text-start'>
                            <div className='flex items-center gap-2 text-light-blurple hover:underline'>
                                <p>Documentation</p>
                                <AiOutlineArrowRight />
                            </div>
                            <p>{'Dive in to learn all about our product.'}</p>
                        </div>

                        <div className='flex flex-col text-start'>
                            <div className='flex items-center gap-2 text-light-blurple hover:underline'>
                                <p>Commands List</p>
                                <AiOutlineArrowRight />
                            </div>
                            <p>{"Get a list of apptic's commands."}</p>
                        </div>

                        <div className='flex flex-col text-start'>
                            <div className='flex items-center gap-2 text-light-blurple hover:underline'>
                                <p>Get Support</p>
                                <AiOutlineArrowRight />
                            </div>
                            <p>{'Can’t find what you’re looking for?'}</p>
                        </div>
                    </div>

                </div>



            </section>
        </main>
    )
}

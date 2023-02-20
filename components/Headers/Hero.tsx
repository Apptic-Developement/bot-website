// imports 
import { FaDiscord } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// TODO ADD BACKGROUND DESIGN 
// hero 
const Hero = () => {
    return (
        <main className="bg-light-black w-full h-screen">
            <motion.div
                initial={{y: 150, opacity: 0}}
                animate={{y: 111, opacity: 100}}
                transition={{ease: 'easeOut', duration: 2}}
                className="m-auto py-10 container px-4 flex items-center justify-center flex-col text-center gap-2">
                <div className="md:text-5xl text-3xl font-bold text-dark-blurple">
                    <h1>Build the best discord server</h1>
                </div>
                <div className="text-sm w-[80%] text-gray-500">
                    <p>
                    Imagine a Discord bot with Welcome system, Giveaways, Button Roles, Drop-Down Roles, Embed Builder and lots of utility commands for the users.
                    </p>
                </div>

                <div className="flex mx-6 gap-1 flex-wrap items-center justify-center mt-6">
                    {/* invite button  */}
                    <Link to="/invite" target="_blank" className="cursor-pointer">
                    <div className="flex duration-500 transition-all items-center justify-center gap-1 text-sm font-medium bg-gradient-to-r from-light-blurple to-dark-blurple rounded-3xl px-5 py-2.5 text-center mr-2 mb-2 hover:scale-110 hover:shadow-sm hover:shadow-dark-blurple">
                        <FaDiscord className="text-2xl" />
                        <button
                            type="button">
                            Add to server
                        </button>
                    </div>
                    </Link>
                    {/* scroll button  */}
                    <div className="flex items-center justify-center gap-1 text-sm font-medium bg-gradient-to-br hover:bg-gradient-to-bl rounded-3xl px-5 py-2.5 text-center mr-2 mb-2">
                        <BsMouse className="text-lg animate-bounce" />
                        <a
                            href="#features"
                            type="button">
                            See features
                        </a>
                    </div>
                </div>
            </motion.div>

        </main >
    )
}

// export 
export default Hero;
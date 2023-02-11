import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';


const SocketHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // @ts-ignore
    if (res.socket.server.io) {
        console.log("> Socket already exists.");
        while (true){
            // res.socket?.emit('try', "Message from server: Connected successfully!")
            console.log("Emmited a new msg!")
        }
    } else{
        console.log("> Preparing socket...");
        // @ts-ignore
        const io = new Server(res.socket?.server, {
            cors: {
              origin: "*",
              methods: ["GET", "POST"]
            }
          });
        // @ts-ignore
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log("> Socket successfully created!")
            socket.on('from_bot', (msg: string) => {
                socket.emit('try', "Message from server: Connected successfully!")
                console.log(msg)
            })
        })
        res.socket?.emit('verify_connection', "Message from server: Connected successfully!")

    }
    res.end()
}

export default SocketHandler;
"use client";

import Hero from "@/components/headers/Hero";
import { io } from "socket.io-client";

const HomePage = () => {
  const sio = io({
    host: "https://3000-appticdevelopem-website-807og5np51k.ws-us86.gitpod.io"
  });
  
  sio.emit('test_connection', "Page reloaded!")
  console.log("Emmited")

  sio.on("verification_success", (data) => {
    console.log("Received verification success event from server: ", data);
  });
  return (
    <>
      <Hero/>
    </>
  )
}
export default HomePage;
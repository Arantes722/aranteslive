"use client";

import { useState } from "react";
import { LoginModal } from "./LoginModal";


export default function LoginButton() {


  const [open, setOpen] = useState(false);



  return (

    <>

      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          border
          border-red-500/30
          bg-red-600
          px-5
          py-2
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-red-500
          hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]
        "
      >

        Login

      </button>



      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>

  );

}
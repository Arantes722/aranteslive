"use client";

import { useState } from "react";
import { redeemVoucher } from "@/app/profile/actions";


export function RedeemModal() {

  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");



  async function handleRedeem() {

    const result = await redeemVoucher(code);


    if(result?.error){

      setMessage(result.error);

      return;

    }


    setMessage("Voucher redeemed successfully!");

    setCode("");

  }




  return (

    <>


      <button
        onClick={() => setOpen(true)}
        className="
          mt-4
          rounded-lg
          border
          border-neutral-700
          px-4
          py-2
          text-sm
          hover:bg-white/5
        "
      >
        Redeem
      </button>





      {open && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
          "
        >


          <div
            className="
              w-full
              max-w-md
              rounded-3xl
              border
              border-neutral-800
              bg-neutral-950
              p-8
            "
          >


            <h2 className="
              text-2xl
              font-bold
            ">
              Redeem Voucher
            </h2>




            <input

              value={code}

              onChange={(e)=>setCode(e.target.value)}

              placeholder="Enter your code"

              className="
                mt-6
                w-full
                rounded-xl
                border
                border-neutral-800
                bg-neutral-900
                p-4
              "

            />





            <button

              onClick={handleRedeem}

              className="
                mt-4
                w-full
                rounded-xl
                bg-red-600
                py-3
                font-semibold
              "

            >

              Redeem

            </button>





            {message && (

              <p className="
                mt-4
                text-sm
                text-neutral-400
              ">
                {message}
              </p>

            )}






            <button

              onClick={()=>setOpen(false)}

              className="
                mt-4
                w-full
                rounded-xl
                border
                border-neutral-700
                py-3
              "

            >

              Close

            </button>



          </div>


        </div>

      )}


    </>

  );

}
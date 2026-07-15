"use client";


import { useState } from "react";
import { LoginModal } from "@/components/auth/LoginModal";
import { LogOut } from "lucide-react";


interface Props {
    user: any;
}



export function AuthButton({
    user
}: Props) {


    const [open, setOpen] = useState(false);



    async function logout() {

        await fetch("/auth/logout");

        window.location.reload();

    }



    return (

        <>


            {
                user ?

                    (

                        <div className="flex items-center gap-3">


                            <button
                                onClick={logout}
                                className="
rounded-lg
bg-red-600
px-3
py-2
text-sm
font-semibold
hover:bg-red-500
"
                            >

                                <LogOut size={16} />

                            </button>


                        </div>

                    )

                    :

                    (

                        <button

                            onClick={() => setOpen(true)}

                            className="
rounded-xl
bg-purple-600
px-5
py-2
font-semibold
hover:bg-purple-500
"

                        >

                            Login

                        </button>

                    )

            }



            <LoginModal
                open={open}
                onClose={() => setOpen(false)}
            />


        </>


    )

}
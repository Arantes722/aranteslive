import Link from "next/link";
import { Bell } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

import LogoutButton from "@/components/auth/LogoutButton";
import LoginButton from "../auth/LoginButton";



export async function TopBar() {


    const supabase = await createClient();



    const {
        data:{
            user
        }
    } = await supabase.auth.getUser();



    const profile = user?.user_metadata;



    return (

        <header
            className="
                fixed
                top-0
                left-0
                z-50
                flex
                h-20
                w-full
                items-center
                justify-between
                border-b
                border-neutral-800
                bg-[#050505]/95
                px-8
                backdrop-blur
            "
        >



            {/* Logo */}

            <Link
                href="/"
                className="
                    text-3xl
                    font-bold
                    tracking-tight
                "
            >

                Arantes
                <span className="text-red-500">
                    Live
                </span>


                <p className="text-xs text-neutral-500">
                    Casino • Community • Entertainment
                </p>


            </Link>







            {/* Right Side */}


            <div
                className="
                    flex
                    items-center
                    gap-5
                "
            >



                {/* Notifications */}

                <button
                    className="
                        relative
                        rounded-xl
                        p-3
                        text-neutral-400
                        transition
                        hover:bg-white/5
                        hover:text-white
                    "
                >

                    <Bell size={22}/>


                </button>







                {
                    user ?


                    (

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-neutral-800
                            bg-neutral-950
                            px-4
                            py-2
                        "
                    >


                        <Link href="/profile">

                            <img
                                src={
                                    profile?.avatar_url ??
                                    "/default-avatar.png"
                                }
                                alt="avatar"
                                className="
                                    h-10
                                    w-10
                                    rounded-full
                                    cursor-pointer
                                    transition
                                    hover:ring-2
                                    hover:ring-red-500
                                "
                            />

                        </Link>





                        <Link
                            href="/profile"
                            className="
                                transition
                                hover:text-red-500
                            "
                        >

                            <p className="font-semibold">

                                {
                                    profile?.name ??
                                    profile?.preferred_username ??
                                    "User"
                                }

                            </p>


                            <p className="text-xs text-neutral-500">
                                Twitch
                            </p>


                        </Link>





                        <LogoutButton />


                    </div>


                    )

                    :


                    (

                        <LoginButton />

                    )

                }




            </div>



        </header>

    );

}
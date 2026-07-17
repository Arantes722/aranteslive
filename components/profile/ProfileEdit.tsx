"use client";


import {
    useState
} from "react";

import {
    Pencil,
    Save,
    X
} from "lucide-react";

import {
    createClient
} from "@/lib/supabase/client";




interface ProfileEditProps {

    profile:any;

}




export function ProfileEdit({
    profile
}:ProfileEditProps){



    const supabase = createClient();



    const [editing,setEditing] = useState(false);


    const [displayName,setDisplayName] = useState(
        profile?.display_name ?? ""
    );


    const [error,setError] = useState("");

    const [loading,setLoading] = useState(false);





    async function save(){



        const value = displayName.trim();



        if(value.length < 3){

            setError(
                "Display name must have at least 3 characters"
            );

            return;

        }



        if(value.length > 25){

            setError(
                "Display name cannot exceed 25 characters"
            );

            return;

        }




        if(!/^[a-zA-Z0-9 _-]+$/.test(value)){


            setError(
                "Only letters, numbers, spaces and - _ are allowed"
            );


            return;

        }






        setLoading(true);


        const {
            error
        } = await supabase
            .from("profiles")
            .update({

                display_name:value

            })
            .eq(
                "id",
                profile.id
            );





        setLoading(false);



        if(error){

            setError(
                error.message
            );

            return;

        }



        setEditing(false);

        window.location.reload();


    }







    return (


        <section
            className="
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
                p-6
            "
        >




            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >


                <div>

                    <h2
                        className="
                            text-lg
                            font-bold
                        "
                    >
                        Profile Settings
                    </h2>


                    <p
                        className="
                            mt-1
                            text-sm
                            text-neutral-500
                        "
                    >
                        Manage your public profile information
                    </p>


                </div>





                {
                    !editing && (

                        <button
                            onClick={()=>{
                                setEditing(true)
                            }}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-neutral-700
                                px-4
                                py-2
                                text-sm
                                hover:bg-neutral-900
                            "
                        >

                            <Pencil size={16}/>

                            Edit


                        </button>

                    )
                }



            </div>









            <div
                className="
                    mt-6
                    space-y-4
                "
            >



                <div>

                    <label
                        className="
                            text-xs
                            text-neutral-500
                        "
                    >
                        Twitch Username
                    </label>


                    <div
                        className="
                            mt-2
                            rounded-xl
                            bg-neutral-900
                            px-4
                            py-3
                            text-neutral-400
                        "
                    >

                        @{profile.username}

                    </div>


                    <p
                        className="
                            mt-1
                            text-xs
                            text-neutral-600
                        "
                    >
                        Connected Twitch username cannot be changed.
                    </p>


                </div>









                <div>


                    <label
                        className="
                            text-xs
                            text-neutral-500
                        "
                    >
                        Display Name
                    </label>





                    {
                        editing ? (


                            <input

                                value={displayName}

                                onChange={(e)=>{

                                    setDisplayName(
                                        e.target.value
                                    );

                                    setError("");

                                }}

                                className="
                                    mt-2
                                    w-full
                                    rounded-xl
                                    border
                                    border-neutral-700
                                    bg-neutral-900
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-red-500
                                "

                            />


                        ):(


                            <div
                                className="
                                    mt-2
                                    rounded-xl
                                    bg-neutral-900
                                    px-4
                                    py-3
                                "
                            >

                                {profile.display_name}

                            </div>


                        )
                    }





                </div>






                {
                    error && (

                        <p
                            className="
                                text-sm
                                text-red-500
                            "
                        >

                            {error}

                        </p>

                    )
                }







                {
                    editing && (


                        <div
                            className="
                                flex
                                gap-3
                            "
                        >


                            <button

                                onClick={save}

                                disabled={loading}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-red-600
                                    px-5
                                    py-2
                                    text-sm
                                    font-semibold
                                "

                            >

                                <Save size={16}/>

                                {
                                    loading
                                    ?
                                    "Saving..."
                                    :
                                    "Save"
                                }


                            </button>






                            <button

                                onClick={()=>{

                                    setEditing(false)

                                    setError("")

                                }}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-neutral-700
                                    px-5
                                    py-2
                                "

                            >

                                <X size={16}/>

                                Cancel


                            </button>



                        </div>


                    )
                }





            </div>





        </section>


    );


}
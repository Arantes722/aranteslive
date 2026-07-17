"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";


export function DeleteAccount() {


    const [loading, setLoading] = useState(false);



    async function handleDelete() {


        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?"
        );


        if (!confirmDelete) return;


        setLoading(true);


        // Vamos ligar ao Supabase Auth depois


        setLoading(false);

    }



    return (

        <button
            onClick={handleDelete}
            disabled={loading}
            className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-3
                text-sm
                font-semibold
                text-red-500
                transition
                hover:bg-red-500/20
            "
        >

            <Trash2 size={16}/>

            {
                loading
                ? 
                "Deleting..."
                :
                "Delete Account"
            }


        </button>

    );

}
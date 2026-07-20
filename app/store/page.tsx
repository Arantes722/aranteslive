import { ShoppingBag } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

import StoreGrid from "@/components/store/StoreGrid";


export default async function StorePage() {

    const supabase = await createClient();


    const { data: items, error } =
        await supabase
            .from("store_items")
            .select("*")
            .eq("active", true)
            .order("price");


    console.log("STORE ITEMS:", items);
    console.log("STORE ERROR:", error);



    return (

        <main
            className="
                mx-auto
                max-w-7xl
                space-y-8
                px-6
                py-6
            "
        >

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-500/10
                    "
                >

                    <ShoppingBag
                        className="text-red-500"
                        size={24}
                    />

                </div>


                <div>

                    <h1
                        className="
                            text-4xl
                            font-black
                        "
                    >
                        Store
                    </h1>


                    <p
                        className="
                            mt-1
                            text-neutral-500
                        "
                    >
                        Redeem your points for exclusive rewards.
                    </p>

                </div>

            </div>



            <StoreGrid
                items={items ?? []}
            />


        </main>

    );

}
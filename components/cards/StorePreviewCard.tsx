import { Coins, ShoppingBag } from "lucide-react";

interface StorePreviewCardProps {
    item: any;
}

export function StorePreviewCard({
    item,
}: StorePreviewCardProps) {

    return (
        <div
            className="
                min-w-[260px]
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
                p-5
            "
        >

            <div
                className="
                    flex
                    h-32
                    items-center
                    justify-center
                    rounded-2xl
                    bg-neutral-900
                "
            >

                {item.image_url ? (
                    <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-20 object-contain"
                    />
                ) : (
                    <ShoppingBag
                        size={36}
                        className="text-neutral-600"
                    />
                )}

            </div>


            <h3
                className="
                    mt-4
                    text-lg
                    font-bold
                "
            >
                {item.name}
            </h3>


            <div
                className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    font-bold
                    text-yellow-400
                "
            >
                <Coins size={16}/>
                {item.price}
            </div>

        </div>
    );
}
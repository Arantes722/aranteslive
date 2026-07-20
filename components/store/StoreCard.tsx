import {
    Coins,
    ShoppingBag,
} from "lucide-react";

interface StoreCardProps {
    item: any;
}

export default function StoreCard({
    item,
}: StoreCardProps) {

    return (

        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
                transition-all
                duration-300
                hover:border-red-500/40
                hover:-translate-y-1
            "
        >

            <div
                className="
                    h-1
                    bg-gradient-to-r
                    from-red-600
                    via-red-500
                    to-red-400
                "
            />

            <div className="p-6">

                {/* Image */}

                <div
                    className="
                        flex
                        h-36
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-neutral-800
                        bg-neutral-900
                    "
                >

                    {item.image_url ? (

                        <img
                            src={item.image_url}
                            alt={item.name}
                            className="
                                h-24
                                object-contain
                            "
                        />

                    ) : (

                        <ShoppingBag
                            size={42}
                            className="text-neutral-600"
                        />

                    )}

                </div>

                {/* Category */}

                <div
                    className="
                        mt-5
                        inline-flex
                        rounded-full
                        bg-red-500/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-red-400
                    "
                >
                    {item.category}
                </div>

                {/* Name */}

                <h2
                    className="
                        mt-4
                        text-xl
                        font-bold
                    "
                >
                    {item.name}
                </h2>

                {/* Description */}

                <p
                    className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-neutral-500
                    "
                >
                    {item.description}
                </p>

                {/* Footer */}

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            font-bold
                            text-yellow-400
                        "
                    >

                        <Coins size={18} />

                        {item.price.toLocaleString()}

                    </div>

                    <button
                        className="
                            rounded-xl
                            bg-red-600
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            transition
                            hover:bg-red-500
                        "
                    >
                        Redeem
                    </button>

                </div>

            </div>

        </section>

    );

}
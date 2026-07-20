import { Gift, ShoppingBag } from "lucide-react";

interface ActivityItemProps {
    type: string;
    title: string;
    description: string;
    points: number | null;
    createdAt: string;
}

export default function ActivityItem({
    type,
    title,
    description,
    points,
    createdAt,
}: ActivityItemProps) {

    const icon =
        type === "giveaway"
            ? <Gift size={18} className="text-red-500" />
            : <ShoppingBag size={18} className="text-blue-400" />;

    const date =
        new Date(createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-900/40
                px-5
                py-4
            "
        >

            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-neutral-800
                    "
                >
                    {icon}
                </div>

                <div>

                    <h3 className="font-semibold">
                        {title}
                    </h3>

                    <p className="text-sm text-neutral-500">
                        {description}
                    </p>

                </div>

            </div>

            <div className="text-right">

                {points !== null && (

                    <p
                        className="
                            font-bold
                            text-red-500
                        "
                    >
                        {points} pts
                    </p>

                )}

                <p
                    className="
                        text-xs
                        text-neutral-500
                    "
                >
                    {date}
                </p>

            </div>

        </div>

    );

}
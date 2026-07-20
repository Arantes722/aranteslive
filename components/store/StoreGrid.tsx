import StoreCard from "./StoreCard";

interface StoreGridProps {
    items: any[];
}

export default function StoreGrid({
    items,
}: StoreGridProps) {

    return (

        <div
            className="
                grid
                gap-6
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >

            {items.map((item) => (

                <StoreCard
                    key={item.id}
                    item={item}
                />

            ))}

        </div>

    );

}
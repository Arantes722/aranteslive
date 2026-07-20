interface WatchtimeReward {
    tier: string | null;
    points: number;
}


export function calculateWatchtimePoints(
    tier: string | null
): WatchtimeReward {


    switch (tier) {


        case "3000":
            // Tier 3
            return {
                tier,
                points: 50,
            };


        case "2000":
            // Tier 2
            return {
                tier,
                points: 30,
            };


        case "1000":
            // Tier 1
            return {
                tier,
                points: 20,
            };


        default:
            // Viewer normal
            return {
                tier,
                points: 10,
            };

    }

}
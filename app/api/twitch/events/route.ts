import { NextRequest, NextResponse } from "next/server";

import {
    hasProcessedEvent,
    saveTwitchEvent,
} from "@/lib/twitch/events";

import { verifyTwitchSignature } from "@/lib/twitch/verifySignature";

import { rewardFollow } from "@/lib/points/rewardFollow";
import { rewardSubscription } from "@/lib/points/rewardSubscription";


export async function POST(
    request: NextRequest
) {


    const rawBody =
        await request.text();



    const messageId =
        request.headers.get(
            "Twitch-Eventsub-Message-Id"
        );


    const timestamp =
        request.headers.get(
            "Twitch-Eventsub-Message-Timestamp"
        );


    const signature =
        request.headers.get(
            "Twitch-Eventsub-Message-Signature"
        );



    if (
        !messageId ||
        !timestamp ||
        !signature
    ) {

        return NextResponse.json(
            {
                error: "Missing Twitch headers"
            },
            {
                status: 400
            }
        );

    }



    const isValid =
        verifyTwitchSignature({

            messageId,

            timestamp,

            signature,

            body: rawBody

        });



    if (!isValid) {

        return NextResponse.json(
            {
                error: "Invalid signature"
            },
            {
                status: 403
            }
        );

    }



    const body =
        JSON.parse(rawBody);



    /*
        Twitch challenge verification
    */

    if (
        body.challenge
    ) {

        return new NextResponse(
            body.challenge,
            {
                status: 200
            }
        );

    }



    const eventId =
        body.metadata?.message_id;



    const eventType =
        body.metadata?.subscription?.type;



    const event =
        body.event;



    if (
        !eventId ||
        !eventType ||
        !event
    ) {

        return NextResponse.json(
            {
                error: "Invalid event"
            },
            {
                status: 400
            }
        );

    }



    // Evitar eventos duplicados
    const alreadyProcessed =
        await hasProcessedEvent(
            eventId
        );



    if (alreadyProcessed) {

        return NextResponse.json({

            received: true

        });

    }



    /*
        FOLLOW EVENT
    */

    if (
        eventType === "channel.follow"
    ) {


        const userId =
            event.user_id;



        await rewardFollow({

            userId

        });



        await saveTwitchEvent({

            eventId,

            userId,

            type: "FOLLOW",

            data: event

        });

    }




    /*
        SUB EVENT
    */

    if (
        eventType === "channel.subscribe"
    ) {


        const userId =
            event.user_id;



        const tier =
            event.tier;



        await rewardSubscription({

            userId,

            tier

        });



        await saveTwitchEvent({

            eventId,

            userId,

            type: "SUB",

            data: event

        });

    }



    return NextResponse.json({

        received: true

    });

}
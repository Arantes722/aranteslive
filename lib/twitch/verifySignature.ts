import crypto from "crypto";


interface VerifySignatureProps {

    messageId: string;

    timestamp: string;

    signature: string;

    body: string;

}



export function verifyTwitchSignature({

    messageId,

    timestamp,

    signature,

    body,

}: VerifySignatureProps) {


    const secret =
        process.env.TWITCH_EVENTSUB_SECRET;



    if (!secret) {

        throw new Error(
            "Missing Twitch EventSub secret"
        );

    }



    const message =
        messageId +
        timestamp +
        body;



    const hmac =
        crypto
            .createHmac(
                "sha256",
                secret
            )
            .update(message)
            .digest("hex");



    const expected =
        `sha256=${hmac}`;



    return crypto.timingSafeEqual(

        Buffer.from(signature),

        Buffer.from(expected)

    );

}
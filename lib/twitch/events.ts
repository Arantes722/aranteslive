import { createClient } from "@/lib/supabase/server";


export async function hasProcessedEvent(
    eventId: string
) {

    const supabase = await createClient();


    const { data, error } =
        await supabase
            .from("twitch_events")
            .select("id")
            .eq(
                "event_id",
                eventId
            )
            .maybeSingle();



    if (error) {
        throw error;
    }


    return !!data;

}



interface SaveEventProps {

    eventId: string;

    userId: string;

    type: string;

    data?: any;

}



export async function saveTwitchEvent({

    eventId,

    userId,

    type,

    data,

}: SaveEventProps) {


    const supabase = await createClient();



    const { error } =
        await supabase
            .from("twitch_events")
            .insert({

                event_id: eventId,

                user_id: userId,

                type,

                data,

                processed: true

            });



    if (error) {
        throw error;
    }

}
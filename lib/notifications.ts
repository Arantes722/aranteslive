"use server";

import { createClient } from "@/lib/supabase/server";

interface NotificationInput {
    userId: string;
    type: string;
    title: string;
    description?: string;
}

export async function createNotification({
    userId,
    type,
    title,
    description,
}: NotificationInput) {

    const supabase = await createClient();

    await supabase
        .from("notifications")
        .insert({

            user_id: userId,

            type,

            title,

            description,

        });

}
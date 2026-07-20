"use server";

import { createClient } from "@/lib/supabase/server";

interface AddActivityProps {
    userId: string;
    type: string;
    title: string;
    description: string;
    points?: number | null;
}

export async function addActivity({
    userId,
    type,
    title,
    description,
    points = null,
}: AddActivityProps) {

    const supabase = await createClient();

    const { error } = await supabase
        .from("activities")
        .insert({

            user_id: userId,
            type,
            title,
            description,
            points,

        });

    if (error) {

        console.error(
            "Failed to create activity:",
            error
        );

    }

}
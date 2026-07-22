"use server";

import { createClient } from "@/lib/supabase/server";
import { addPoints } from "@/lib/points";
import { addActivity } from "@/lib/activity";
import { createNotification } from "@/lib/notifications";

export async function redeemVoucher(code: string) {

    const supabase = await createClient();

    const {
        data: {
            user,
        },
    } = await supabase.auth.getUser();

    if (!user) {

        return {
            error: "Not authenticated",
        };

    }

    const {
        data: voucher,
    } = await supabase
        .from("vouchers")
        .select("*")
        .eq("code", code)
        .single();

    if (!voucher) {

        return {
            error: "Invalid voucher",
        };

    }

    if (voucher.used) {

        return {
            error: "Voucher already used",
        };

    }

    await addPoints(
        user.id,
        voucher.points
    );

    await supabase
        .from("vouchers")
        .update({

            used: true,
            used_by: user.id,
            used_at: new Date().toISOString(),

        })
        .eq("id", voucher.id);

    await addActivity({

        userId: user.id,

        type: "voucher",

        title: "Voucher Redeemed",

        description: `Redeemed voucher ${code}`,

        points: voucher.points,

    });

    await createNotification({

        userId: user.id,

        type: "voucher",

        title: "Voucher Redeemed",

        description: `+${voucher.points} Store Points`,

    });

    return {
        success: true,
    };

}
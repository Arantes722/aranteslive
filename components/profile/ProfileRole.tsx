import {
    Shield,
    Crown,
    Radio,
    Star,
    User,
} from "lucide-react";



interface ProfileRoleProps {

    profile:any;

}





export function ProfileRole({
    profile,
}:ProfileRoleProps){



    const role =
        profile?.twitch_role
        ??
        "Viewer";





    const roles = {

        Broadcaster:{
            icon:<Radio size={18}/>,
            color:"text-red-400",
            bg:"bg-red-500/10",
            border:"border-red-500/30",
        },


        Moderator:{
            icon:<Shield size={18}/>,
            color:"text-green-400",
            bg:"bg-green-500/10",
            border:"border-green-500/30",
        },


        VIP:{
            icon:<Star size={18}/>,
            color:"text-pink-400",
            bg:"bg-pink-500/10",
            border:"border-pink-500/30",
        },


        Subscriber:{
            icon:<Crown size={18}/>,
            color:"text-yellow-400",
            bg:"bg-yellow-500/10",
            border:"border-yellow-500/30",
        },


        Follower:{
            icon:<User size={18}/>,
            color:"text-blue-400",
            bg:"bg-blue-500/10",
            border:"border-blue-500/30",
        },


        Viewer:{
            icon:<User size={18}/>,
            color:"text-neutral-400",
            bg:"bg-neutral-900",
            border:"border-neutral-800",
        },


    };




    const current =
        roles[
            role as keyof typeof roles
        ]
        ??
        roles.Viewer;







    return (

        <div
            className={`
                rounded-2xl
                border
                ${current.border}
                ${current.bg}
                p-6
            `}
        >


            <h3
                className="
                    text-sm
                    text-neutral-500
                    uppercase
                "
            >
                Twitch Role
            </h3>



            <div
                className={`
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-xl
                    font-bold
                    ${current.color}
                `}
            >

                {current.icon}


                {role}


            </div>


        </div>

    );

}
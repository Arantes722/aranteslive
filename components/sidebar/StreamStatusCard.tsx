import Link from "next/link";
import { Radio, Users } from "lucide-react";


interface StreamStatusCardProps {

  live: boolean;

  title?: string;

  game?: string;

  viewers?: number;

  thumbnail?: string;

  avatar?: string;

}



export function StreamStatusCard({

  live,

  title,

  game,

  viewers,

  thumbnail,

  avatar,

}: StreamStatusCardProps) {


  return (

    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-500

        ${
          live
          ?
          `
          border-red-500/40
          shadow-[0_0_35px_rgba(239,68,68,0.25)]
          `
          :
          `
          border-neutral-800
          `
        }

        bg-neutral-950

      `}
    >




      {/* Background thumbnail */}

      {
        live && thumbnail && (

          <img
            src={thumbnail}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-30
              transition
              duration-700
              group-hover:scale-110
            "
          />

        )
      }



      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
        "
      />




      <div
        className="
          relative
          p-5
        "
      >




        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >


          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className={`
                h-3
                w-3
                rounded-full

                ${
                  live
                  ?
                  "bg-red-500 animate-pulse"
                  :
                  "bg-neutral-500"
                }

              `}
            />


            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
              "
            >

              {
                live
                ?
                "LIVE NOW"
                :
                "OFFLINE"
              }

            </span>


          </div>



          {
            live &&

            <Radio
              size={18}
              className="
                text-red-500
                animate-pulse
              "
            />

          }


        </div>







        {/* User */}

        <div
          className="
            mt-14
            flex
            items-center
            gap-3
          "
        >


          {
            avatar && (

              <img
                src={avatar}
                alt="avatar"
                className={`
                  h-12
                  w-12
                  rounded-full
                  border

                  ${
                    live
                    ?
                    "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                    :
                    "border-neutral-700"
                  }

                `}
              />

            )
          }



          <div>

            <p
              className="
                font-bold
              "
            >
              ArantesLive
            </p>


            <p
              className="
                text-xs
                text-neutral-400
              "
            >

              {
                live
                ?
                game
                :
                "Waiting for stream"
              }

            </p>


          </div>


        </div>







        {/* Live info */}

        {
          live && (

            <div className="mt-4">


              <p
                className="
                  text-sm
                  text-neutral-300
                  line-clamp-2
                "
              >
                {title}
              </p>



              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-neutral-400
                "
              >

                <Users size={14}/>

                {viewers} viewers


              </div>


            </div>

          )
        }








        {/* Button */}

        <Link

          href="https://twitch.tv/aranteslive"

          target="_blank"

          className="
            mt-5
            flex
            justify-center
            rounded-xl
            bg-red-600
            py-2.5
            text-sm
            font-bold
            transition
            hover:bg-red-500
            hover:scale-[1.02]
          "

        >

          {
            live
            ?
            "Watch Stream"
            :
            "Follow Channel"
          }


        </Link>



      </div>



    </div>


  );

}
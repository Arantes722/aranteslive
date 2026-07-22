export function LivePlayer() {
  const isLive = false;

  return (
    <section
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-800
        bg-[#080808]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-neutral-800
          px-8
          py-5
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.20em]
              text-neutral-500
            "
          >
            Live Stream
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-black
            "
          >
            ArantesLive
          </h2>
        </div>

        <div
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-bold
            ${
              isLive
                ? "bg-red-500/15 text-red-500"
                : "bg-neutral-800 text-neutral-400"
            }
          `}
        >
          {isLive ? "LIVE" : "OFFLINE"}
        </div>
      </div>

      <div
        className="
          aspect-video
          w-full
          bg-neutral-950
        "
      >
        {isLive ? (
          <iframe
            src="https://player.twitch.tv/?channel=aranteslive&parent=localhost"
            className="h-full w-full"
            allowFullScreen
          />
        ) : (
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              gap-6
            "
          >
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-red-500/10
              "
            >
              <div
                className="
                  h-6
                  w-6
                  rounded-full
                  bg-red-500
                "
              />
            </div>

            <div className="text-center">
              <h3
                className="
                  text-3xl
                  font-black
                "
              >
                Currently Offline
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-neutral-500
                "
              >
                The stream isn't live right now. Follow the community so you
                never miss the next broadcast.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

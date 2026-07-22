export function LiveChat() {
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
          border-b
          border-neutral-800
          px-6
          py-5
        "
      >
        <h2
          className="
            text-xl
            font-black
          "
        >
          Live Chat
        </h2>
      </div>

      <div
        className="
          flex
          h-[600px]
          items-center
          justify-center
          bg-neutral-950
        "
      >
        {isLive ? (
          <iframe
            src="https://www.twitch.tv/embed/aranteslive/chat?parent=localhost"
            className="h-full w-full"
          />
        ) : (
          <div
            className="
              max-w-xs
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Chat Offline
            </h3>

            <p
              className="
                mt-4
                text-neutral-500
              "
            >
              When the stream starts, the live chat will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

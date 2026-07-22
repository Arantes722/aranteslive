"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bell, CheckCheck } from "lucide-react";
import { markAllNotificationsAsRead } from "@/app/actions/notifications";

interface Notification {
  id: string;
  title: string;
  description: string;
  read: boolean;
  created_at: string;
}

interface NotificationBellProps {
  notifications: Notification[];
}

export default function NotificationBell({
  notifications,
}: NotificationBellProps) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          rounded-xl
          border
          border-neutral-800
          bg-neutral-950
          p-3
          text-neutral-400
          transition
          hover:border-red-500/30
          hover:bg-white/5
          hover:text-white
        "
      >
        <Bell size={22} />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              right-2
              top-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        )}
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-16
            w-[380px]
            overflow-hidden
            rounded-2xl
            border
            border-neutral-800
            bg-[#080808]
            shadow-2xl
            animate-in
            fade-in
            slide-in-from-top-2
            duration-200
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-neutral-800
              px-5
              py-4
            "
          >
            <h2
              className="
                font-bold
                text-lg
              "
            >
              Notifications
            </h2>

            <button>Mark all</button>
          </div>

          {/* Notifications */}

          <div
            className="
              max-h-[350px]
              overflow-y-auto
            "
          >
            {notifications.length === 0 && (
              <div
                className="
                  px-6
                  py-10
                  text-center
                  text-sm
                  text-neutral-500
                "
              >
                No notifications yet.
              </div>
            )}

            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="
                  flex
                  gap-4
                  border-b
                  border-neutral-900
                  px-5
                  py-4
                  transition
                  hover:bg-white/5
                "
              >
                <div
                  className="
                    pt-2
                  "
                >
                  {!notification.read && (
                    <div
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-red-500
                      "
                    />
                  )}
                </div>

                <div
                  className="
                    flex-1
                  "
                >
                  <h3
                    className="
                      font-semibold
                    "
                  >
                    {notification.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-neutral-500
                    "
                  >
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="
              block
              border-t
              border-neutral-800
              py-3
              text-center
              text-sm
              text-neutral-400
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            View all activity
          </Link>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ButtonAction } from "@/components/ui/Button";

const STORAGE_KEY = "studioz-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage isn't available during SSR, so this has to run as an
    // effect rather than a useState lazy initializer — there's no way to
    // know the stored consent choice until we're on the client.
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. blocked) — skip the banner entirely
      // rather than show it every time with no way to dismiss it.
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/98 px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/75">
          We use cookies to run this site and understand how it&apos;s used. See our{" "}
          <a href="/privacy" className="focus-ring underline underline-offset-2 hover:text-plum">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <ButtonAction variant="outline" className="px-4 py-2 text-sm" onClick={() => decide("declined")}>
            Decline
          </ButtonAction>
          <ButtonAction variant="primary" className="px-4 py-2 text-sm" onClick={() => decide("accepted")}>
            Accept
          </ButtonAction>
        </div>
      </div>
    </div>
  );
}

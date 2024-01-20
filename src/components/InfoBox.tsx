import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  if (mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>{mode}</h2>
        <p>{children}</p>
      </aside>
    );
  }
}

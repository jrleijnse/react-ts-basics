import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  if (mode === "warning") {
    return (
      <aside className="infobox infobox-warning warning--medium">
        <h2>{mode}</h2>
        <p>{children}</p>
      </aside>
    );
  }
}

import { ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {children}
      <img {...image} />
    </header>
    /* Destructure src and alt props using spread operator   */
  );
}

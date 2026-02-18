import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[1.4] md:leading-[1.2] mb-12 text-center md:text-left text-polystate-dark">
      {children}
    </h1>
  );
}

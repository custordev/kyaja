import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <body className=" ">{children}</body>;
}

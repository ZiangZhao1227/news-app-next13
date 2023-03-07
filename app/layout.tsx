import "../styles/globals.css";
import Header from "./Header";
import NavLinks from "./NavLinks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <NavLinks />
        <div> {children}</div>
      </body>
    </html>
  );
}

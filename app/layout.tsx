import "../styles/globals.css";
import Header from "./Header";
import Provider from "./Provider";

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

      <body className="bg-gray-50 dark:bg-zinc-900 transition-all duration-700">
        <Provider>
          <Header />
          <div className="max-w-6xl mx-auto"> {children}</div>
        </Provider>
      </body>
    </html>
  );
}

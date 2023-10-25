import "./globals.css";

export const metadata = {
  title: "SERP Visibility Checker",
  description: "Keep track of your ads' visibility in Google",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <header className="layout__header">SERP Visibility Checker</header>
        {children}
        <footer className="layout__footer">&copy; Thor Seglem Löfgren</footer>
      </body>
    </html>
  );
}

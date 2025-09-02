import "./globals.css";

export const metadata = {
  title: "DepEd Helpdesk",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-image min-h-screen flex flex-col">{children}</body>
    </html>
  );
}



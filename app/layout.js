import "./globals.scss";

export const metadata = {
  title: "Invite",
  description: "Invite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./ui/globals.css";
import { geistMono, geistSans } from "./ui/fonts";

export const metadata = {
  title: "¿Deseas fiesta?",
  description: "¿Deseas fiesta?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen bg-slate-100 dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

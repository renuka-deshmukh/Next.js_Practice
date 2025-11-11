import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Practice App",
  description: "Learning Next.js quickly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}

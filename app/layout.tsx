import type { NextLayout } from "./lib/types";
import { inter } from "@/app/lib/fonts";
import "@/app/ui/global.css";

const RootLayout: NextLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;

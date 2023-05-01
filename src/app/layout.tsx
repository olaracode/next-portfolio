import ChakraProvider from "@/theme/ChakraProvider";
import GoTop from "@/components/GoTop";
import LanguageProvider from "@/language/LanguageContext";
export const metadata = {
  title: "Octavio Lara - Portfolio",
  description: "Desarrollo y programación web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="top" />

        <ChakraProvider>
          <LanguageProvider>
            {children}
            <GoTop />
          </LanguageProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

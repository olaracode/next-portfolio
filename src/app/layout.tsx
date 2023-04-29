import ChakraProvider from "@/theme/ChakraProvider";
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
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Ecommerce Webiste",
  description: "Developed by ISM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

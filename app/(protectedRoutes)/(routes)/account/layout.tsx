

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="p-4 lg:px-16 bg-muted">
      {children}
    </main>
  );
}

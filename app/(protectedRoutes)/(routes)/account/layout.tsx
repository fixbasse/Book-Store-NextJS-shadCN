import getCurrentUser from "@/hooks/getCurrentUser";
import AccoutHeroSidebar from "./_components/AccoutHeroSidebar";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <main className='p-4 lg:px-16 bg-muted'>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className='bg-background py-4 lg:w-[30%] rounded-md'>
          <AccoutHeroSidebar
            user={user}
          />
        </aside>
        <section className='bg-background py-4 px-4 lg:w-[70%] rounded-md'>
          {children}
        </section>
      </div>

    </main>
  );
}


import { cartData } from "@/data";
import Hero from "./_components/Hero/Hero";
import SingleBookCard from "./_components/SingleBookCard";
import Typography from "@/components/text/Typography";

export default function Home() {
  return (
    <main className="lg:px-16">
      <Hero />
      
      <Typography className="my-20 text-center font-bold text-primary text-4xl">
        New Book
      </Typography>

      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-lg:px-4">
        {cartData.map((item) => (
          <SingleBookCard key={item.id} item={item} />
        ))}
        
      </div>
    </main>
  );
}

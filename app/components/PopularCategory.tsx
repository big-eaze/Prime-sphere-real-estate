import Image from "next/image";

type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Apartments", image: "/home/home1.jpg" },
  { name: "Duplexes", image: "/home/home2.jpg" },
  { name: "Villas", image: "/home/home3.jpg" },
  { name: "Studio", image: "/home/home4.jpg" },
  { name: "Condos", image: "/home/home5.jpg" },
  { name: "Houses", image: "/home/home6.jpg" },
  { name: "Single Family Home", image: "/home/home7.jpg" },
  { name: "Multi Family House", image: "/home/home8.jpg" },
];

export default function PopularCategories() {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-lg drop-shadow-md">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

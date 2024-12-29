import Image from "next/image";
import trendingTopics from "@/data/blogs";
import Link from "next/link";

export default function TrendingSection() {
  return (
    <section className="pt-24 pb-14 border-b-2 border-gray-300 mx-10">
      <div className="text-center md:text-left mb-12">
        <h3 className="text-[#B76E79] text-lg">Trending Topics</h3>
        <h1 className="text-4xl font-semibold text-[#333333]">
          Stay Trendy with Our <br /> Latest Insights
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingTopics.map((topic, index) => {
          // Skip the last blog post
          if (index === trendingTopics.length - 1) {
            return null; // Skip rendering the last blog post
          }

          return (
            <div
              key={topic.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={topic.image}
                alt={topic.title}
                width={350}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium text-[#333333] truncate">
                  {topic.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 mb-4">
                  {topic.description.length > 100
                    ? `${topic.description.substring(0, 100)}...`
                    : topic.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{topic.author}</span>
                  <span>{topic.readTime}</span>
                </div>
                <Link href={`/blogs/${topic.id}`}>
                  <button className="mt-4 text-[#FFB6C1] hover:underline">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

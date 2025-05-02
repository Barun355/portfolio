import { useContext, useEffect, useState } from "react";
import { fetchTopBlogPosts } from "../utils/blog";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { cn } from "../utils";
import { Theme } from "../types";
import { ThemeContext } from "../context/themeContext";

const BlogSection = () => {
  const publicationId = "blog.baruntiwary.dev";
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchTopBlogPosts(publicationId);
        setPosts(data.publication.posts.edges);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
        Blog Posts
      </h1>
      {/* Add blog post items here */}

      {loading || posts.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse flex flex-col items-center">
            <div className="rounded-full bg-indigo-300 h-16 w-16 mb-4"></div>
            <div className="h-4 bg-indigo-300 rounded w-32 mb-2"></div>
            <div className="h-3 bg-indigo-200 rounded w-24"></div>
            <span className="text-md italic mt-2">Searching for posts...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((edge) => {
            const post = edge.node;
            return (
              <div
                key={post.slug}
                className={cn(
                  "rounded-xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col h-full transform hover:-translate-y-1 hover:scale-[1.01] transition-transform duration-300",
                  theme === Theme.dark
                    ? "bg-white/10 text-white border-8 border-blue-600/10"
                    : "bg-white text-gray-800 border-8 border-gray-200"
                )}
              >
                <div className="relative h-48 bg-indigo-100 overflow-hidden">
                  {post.coverImage?.url ? (
                    <img
                      src={post.coverImage.url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`}
                      alt="Placeholder"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center text-white">
                      <span className="inline-flex items-center bg-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.dateAdded)}
                      </span>
                      <span className="inline-flex items-center bg-purple-600 px-2 py-1 rounded-full text-xs font-medium ml-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTimeInMinutes} min read
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-grow">
                  <h3 className={"text-xl font-bold mb-3 line-clamp-2"}>
                    {post.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm mb-4 line-clamp-3",
                      theme === Theme.dark ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {post.brief}
                  </p>
                </div>

                <div className="px-5 pb-5">
                  <a
                    href={`https://${publicationId}/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <a href="https://blog.baruntiwary.dev" className="text-white bg-indigo-600 py-2 px-4 rounded-full w-fit text-center align-middle mt-3">view all blogs</a>
      {!loading && posts.length === 0 && !error && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-700">No posts found</h3>
          <p className="text-gray-500 mt-2">
            Try searching for a different Hashnode blog
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogSection;

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { useBlogPosts } from '../../../hooks/useBlogPosts';
import { BlogPost } from '../../../types/blog';

const BlogGrid = () => {
  const { posts, loading } = useBlogPosts();
  const [expandedPost, setExpandedPost] = useState<BlogPost | null>(null);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-t-2xl" />
            <div className="bg-white p-6 rounded-b-2xl">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            isExpanded={expandedPost?.id === post.id}
            onExpand={() => setExpandedPost(post)}
            onCollapse={() => setExpandedPost(null)}
          />
        ))}
      </div>
      {expandedPost && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setExpandedPost(null)} />
      )}
    </div>
  );
};

export default BlogGrid;
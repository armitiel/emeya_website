import React from 'react';
import BlogGrid from './components/BlogGrid';
import AdminPanel from './components/AdminPanel';
import { useAuth } from '../../contexts/AuthContext';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const Blog = () => {
  const { user } = useAuth();
  const { posts, loading, addPost, deletePost, editPost } = useBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6">
        {user?.isAdmin && (
          <AdminPanel
            posts={posts}
            onAddPost={addPost}
            onDeletePost={deletePost}
            onEditPost={editPost}
          />
        )}
        <BlogGrid />
      </div>
    </div>
  );
};

export default Blog;
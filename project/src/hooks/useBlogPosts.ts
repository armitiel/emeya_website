import { useState, useEffect, useCallback } from 'react';
import { BlogPost } from '../types/blog';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = useCallback(() => {
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      const defaultPosts = [
        {
          id: 1,
          title: 'Medytacja jako droga do wewnętrznego spokoju',
          titleEn: 'Meditation as a Path to Inner Peace',
          slug: 'medytacja-droga-do-spokoju',
          excerpt: 'Odkryj, jak regularna praktyka medytacji może transformować Twoje życie i prowadzić do głębokiego spokoju wewnętrznego.',
          excerptEn: 'Discover how regular meditation practice can transform your life and lead to deep inner peace.',
          imageUrl: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3',
          date: '2024-01-15',
          readTime: 5,
        },
        {
          id: 2,
          title: 'Holistyczne podejście do zdrowia',
          titleEn: 'A Holistic Approach to Health',
          slug: 'holistyczne-podejscie-do-zdrowia',
          excerpt: 'Poznaj, jak całościowe spojrzenie na zdrowie może pomóc Ci osiągnąć harmonię ciała, umysłu i ducha.',
          excerptEn: 'Learn how a comprehensive view of health can help you achieve harmony of body, mind, and spirit.',
          imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
          date: '2024-01-10',
          readTime: 7,
        },
        {
          id: 3,
          title: 'Moc uważności w codziennym życiu',
          titleEn: 'The Power of Mindfulness in Daily Life',
          slug: 'moc-uwaznosci',
          excerpt: 'Praktyczne wskazówki, jak wprowadzić mindfulness do codziennego życia i czerpać z tego korzyści.',
          excerptEn: 'Practical tips on how to incorporate mindfulness into daily life and reap its benefits.',
          imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88',
          date: '2024-01-05',
          readTime: 6,
        },
      ];
      setPosts(defaultPosts);
      localStorage.setItem('blog_posts', JSON.stringify(defaultPosts));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = {
      ...post,
      id: Math.max(0, ...posts.map(p => p.id)) + 1,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    loadPosts(); // Refresh posts after adding
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    loadPosts(); // Refresh posts after deleting
  };

  const editPost = (updatedPost: BlogPost) => {
    const updatedPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    loadPosts(); // Refresh posts after editing
  };

  return { posts, loading, addPost, deletePost, editPost };
};
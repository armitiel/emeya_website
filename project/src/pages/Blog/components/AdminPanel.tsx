import React, { useState } from 'react';
import { Trash2, Edit, Globe } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { BlogPost } from '../../../types/blog';
import ImageUpload from './ImageUpload';

interface AdminPanelProps {
  posts: BlogPost[];
  onAddPost: (post: Omit<BlogPost, 'id'>) => void;
  onDeletePost: (id: number) => void;
  onEditPost: (post: BlogPost) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  posts,
  onAddPost,
  onDeletePost,
  onEditPost,
}) => {
  const { language } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    excerpt: '',
    excerptEn: '',
    imageUrl: '',
    readTime: 5,
  });

  const t = language === 'pl' ? {
    title: 'Panel Administratora',
    addPost: 'Dodaj Post',
    editPost: 'Edytuj Post',
    deletePost: 'Usuń Post',
    save: 'Zapisz',
    cancel: 'Anuluj',
    postTitle: 'Tytuł (PL)',
    postTitleEn: 'Tytuł (EN)',
    excerpt: 'Opis (PL)',
    excerptEn: 'Opis (EN)',
    image: 'Zdjęcie',
    readTime: 'Czas czytania (min)',
  } : {
    title: 'Admin Panel',
    addPost: 'Add Post',
    editPost: 'Edit Post',
    deletePost: 'Delete Post',
    save: 'Save',
    cancel: 'Cancel',
    postTitle: 'Title (PL)',
    postTitleEn: 'Title (EN)',
    excerpt: 'Excerpt (PL)',
    excerptEn: 'Excerpt (EN)',
    image: 'Image',
    readTime: 'Read Time (min)',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (editingPost) {
      onEditPost({
        ...editingPost,
        ...formData,
        slug,
      });
      setEditingPost(null);
    } else {
      onAddPost({
        ...formData,
        slug,
        date: new Date().toISOString().split('T')[0],
      });
    }
    setFormData({ title: '', titleEn: '', excerpt: '', excerptEn: '', imageUrl: '', readTime: 5 });
    setIsAdding(false);
  };

  const startEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      titleEn: post.titleEn || '',
      excerpt: post.excerpt,
      excerptEn: post.excerptEn || '',
      imageUrl: post.imageUrl,
      readTime: post.readTime,
    });
    setIsAdding(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-heading text-primary mb-6">{t.title}</h2>

      {!isAdding ? (
        <Button
          variant="primary"
          className="mb-6"
          onClick={() => setIsAdding(true)}
        >
          {t.addPost}
        </Button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.postTitle}
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.postTitleEn}
              </label>
              <input
                type="text"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.excerpt}
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.excerptEn}
              </label>
              <textarea
                value={formData.excerptEn}
                onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={3}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.image}
            </label>
            <ImageUpload
              onImageSelect={(imageUrl) => setFormData({ ...formData, imageUrl })}
              currentImage={formData.imageUrl}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.readTime}
            </label>
            <input
              type="number"
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              min="1"
              required
            />
          </div>

          <div className="flex space-x-4">
            <Button variant="primary" type="submit">
              {t.save}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsAdding(false);
                setEditingPost(null);
                setFormData({ title: '', titleEn: '', excerpt: '', excerptEn: '', imageUrl: '', readTime: 5 });
              }}
            >
              {t.cancel}
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Image and Title */}
                <div className="flex items-center flex-grow min-w-0 gap-4">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded flex-shrink-0"
                  />
                  <div className="min-w-0 flex-grow">
                    <h3 className="font-medium text-gray-900 truncate pr-8 sm:pr-0">
                      {post.title}
                    </h3>
                    {post.titleEn && (
                      <p className="text-sm text-gray-500 flex items-center truncate">
                        <Globe className="w-3 h-3 mr-1 flex-shrink-0" />
                        {post.titleEn}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => startEdit(post)}
                    className="p-2 text-gray-600 hover:text-primary transition-colors"
                    aria-label={t.editPost}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDeletePost(post.id)}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    aria-label={t.deletePost}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../utils/supabaseClient';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Errore nel caricamento dei post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mt-5 pt-5"><h2>Caricamento...</h2></div>;
  }

  return (
    <div className="blog-container container">
      <h1 className="text-center blog-title display-4">Blog Supercazzole</h1>
      <h3 className='blog-title'>Benvenuti nel blog ufficiale delle Supercazzole: qui si raccontano storie vere (più o meno), gesta epichee personaggi fuori dal comune.
Chi scenderà in campo, chi le combinerà grosse, chi farà finta di avere un piano: li conoscerete tutti, uno dopo l'altro.

      </h3>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            {post.image_url && (
              <div className="blog-card-image-container">
                <img
                  src={post.image_url}
                  className="blog-card-image"
                  alt={post.title}
                />
              </div>
            )}
            <div className="blog-card-content">
              <div>
                <h2 className="blog-card-title">{post.title}</h2>
                <h3 className="blog-card-subtitle">{post.subtitle.substring(0, 91)}</h3>
              </div>
              <div className="blog-card-footer">
                <span className="blog-date">
                  {new Date(post.created_at).toLocaleDateString('it-IT')}
                </span>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Leggi di più
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
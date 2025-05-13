import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../utils/supabaseClient";
import "./BlogPost.css";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [blogId]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', blogId)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Errore nel caricamento del post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <h2>Caricamento...</h2>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <h2>Post non trovato</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="container">
        <article className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <h2 className="blog-post-subtitle">{post.subtitle}</h2>
          <div className="blog-post-date">
            {new Date(post.created_at).toLocaleDateString('it-IT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="blog-post-image"
            />
          )}
        </article>
        <div className="blog-post-content text-center">
          {post.content}
        </div>
        <div className="end-post-blog ">
            <Link to={`/blog`} >
                  <button className="goback-btn mt-5">Torna al blog</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
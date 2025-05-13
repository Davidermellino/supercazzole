import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabaseClient';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Gestione drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadImage = async () => {
    if (!imageFile) return '';
    
    try {
      // Creiamo un nome di file univoco con timestamp
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      
      // Assicuriamoci che il file sia nel formato corretto per l'upload
      // Supabase richiede File o Blob, ma non ArrayBuffer
      
      // Eseguiamo l'upload con le opzioni corrette
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(fileName, imageFile, {
          cacheControl: '3600',
          upsert: false,
          contentType: imageFile.type // Specifichiamo esplicitamente il tipo MIME
        });
  
      if (error) {
        console.error('Errore nell\'upload:', error);
        alert(`Errore nel caricamento dell'immagine: ${error.message}`);
        return '';
      }
      
      // Otteniamo l'URL pubblico
      const { data: publicUrlData } = supabase
        .storage
        .from('blog-images')
        .getPublicUrl(fileName);
        
      return publicUrlData.publicUrl;
    } catch (e) {
      console.error('Eccezione durante l\'upload:', e);
      alert(`Eccezione durante l'upload: ${e.message}`);
      return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let finalImageUrl = '';
      if (imageFile) {
        finalImageUrl = await uploadImage();
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title,
            subtitle,
            content,
            image_url: finalImageUrl,
          },
        ])
        .select();

      if (error) throw error;
      navigate('/blog');
    } catch (error) {
      console.error('Errore nella creazione del post:', error);
      alert('Errore nella creazione del post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4">Crea Nuovo Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Sottotitolo</label>
          <input
            type="text"
            className="form-control"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </div>
        <div
          className="mb-3 p-3 border border-secondary rounded"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ background: '#f8f9fa', textAlign: 'center' }}
        >
          <label className="form-label">Trascina qui un'immagine oppure selezionala dal PC</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            style={{ display: 'block', margin: '0 auto' }}
            onChange={handleFileChange}
          />
          {imageFile && (
            <div className="mt-2">
              <strong>Immagine selezionata:</strong> {imageFile.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Contenuto</label>
          <textarea
            className="form-control"
            id="content"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Pubblicazione...' : 'Pubblica Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
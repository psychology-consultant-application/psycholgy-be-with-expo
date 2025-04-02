// src/services/articleService.ts
import { supabase } from '../lib/supabase';

interface ArticleParams {
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'published' | 'archived';
}

class ArticleService {
  async createArticle(authorId: string, article: ArticleParams) {
    const { data, error } = await supabase
      .from('articles')
      .insert({
        ...article,
        author_id: authorId,
        created_at: new Date().toISOString()
      });

    if (error) throw error;
    return data;
  }

  async getArticles(filters?: { category?: string, status?: string }) {
    let query = supabase.from('articles').select('*');
    
    if (filters?.category) {
      query = query.eq('category', filters.category);
    }
    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }
}

export default new ArticleService();

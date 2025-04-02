// src/services/conversationService.ts
import { supabase } from '../lib/supabase';

class ConversationService {
  async startConversation(userId: string, psychologistId: string) {
    const { data, error } = await supabase
      .from('conversations')
      .insert({
        user_id: userId,
        psychologist_id: psychologistId,
        status: 'active'
      });

    if (error) throw error;
    return data;
  }

  async sendMessage(conversationId: string, senderId: string, content: string) {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        conversation_id: conversationId,
        sender_id: senderId,
        content
      });

    if (error) throw error;
    return data;
  }

  async getConversationMessages(conversationId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at');

    if (error) throw error;
    return data;
  }
}

export default new ConversationService();

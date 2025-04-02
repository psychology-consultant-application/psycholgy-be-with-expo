// src/services/profileService.ts
import { supabase } from '../lib/supabase';

interface ProfileUpdateParams {
  fullName?: string;
  phoneNumber?: string;
  profilePicture?: string;
}

class ProfileService {
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  }

  async updateProfile(userId: string, params: ProfileUpdateParams) {
    const { data, error } = await supabase
      .from('users')
      .update(params)
      .eq('id', userId);

    if (error) throw error;
    return data;
  }
}

export default new ProfileService();

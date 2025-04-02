// src/services/authService.ts
import { supabase } from '../lib/supabase';

interface RegisterParams {
  email: string;
  password: string;
  fullName: string;
  role: 'user' | 'psychologist';
}

class AuthService {
  async register(params: RegisterParams) {
    const { data, error } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
      options: {
        data: {
          full_name: params.fullName,
          role: params.role
        }
      }
    });

    if (error) throw error;
    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  }

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
}

export default new AuthService();

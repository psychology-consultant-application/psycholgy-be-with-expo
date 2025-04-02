// src/services/psychologistService.ts
import { supabase } from '../lib/supabase';

interface PsychologistRegistrationParams {
  specialization: string;
  experienceYears: number;
  consultationFee: number;
  academicCredentials: string;
  licenseNumber: string;
}

class PsychologistService {
  async registerPsychologist(userId: string, params: PsychologistRegistrationParams) {
    const { data, error } = await supabase
      .from('psychologists')
      .insert({
        id: userId,
        ...params
      });

    if (error) throw error;
    return data;
  }

  async getPsychologists(filters?: { specialization?: string }) {
    let query = supabase.from('psychologists').select('*, users(*)');
    
    if (filters?.specialization) {
      query = query.eq('specialization', filters.specialization);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }
}

export default new PsychologistService();

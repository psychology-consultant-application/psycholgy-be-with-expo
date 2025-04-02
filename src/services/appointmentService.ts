// src/services/appointmentService.ts
import { supabase } from '../lib/supabase';

interface AppointmentParams {
  psychologistId: string;
  date: Date;
  duration?: number;
  consultationMode: 'online' | 'offline';
  notes?: string;
}

class AppointmentService {
  async createAppointment(userId: string, params: AppointmentParams) {
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        user_id: userId,
        ...params,
        status: 'pending'
      });

    if (error) throw error;
    return data;
  }

  async getUserAppointments(userId: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select('*, psychologists(*, users(*))')
      .eq('user_id', userId);

    if (error) throw error;
    return data;
  }
}

export default new AppointmentService();

import AuthService from '../../src/services/authService';

describe('AuthService', () => {
    it('should register a new user', async () => {
      const result = await AuthService.register({
        email: 'test@example.com',
        password: 'password123',
        fullName: 'Test User',
        role: 'user'
      });
  
      expect(result).toBeDefined();
    });
  });


  const testLogin = async () => {
    try {
      const result = await AuthService.login(
        'test_user@example.com', 
        'StrongPassword123!'
      );
      console.log('Login Berhasil:', result);
    } catch (error) {
      console.error('Login Gagal:', error);
    }
  };
  

  const testGetCurrentUser = async () => {
    try {
      const user = await AuthService.getCurrentUser();
      console.log('User Saat Ini:', user);
    } catch (error) {
      console.error('Gagal Mendapatkan User:', error);
    }
  };
  
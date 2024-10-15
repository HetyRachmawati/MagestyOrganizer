export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!process.client) return;

  const token = localStorage.getItem('token');

  if (!token) {
    return navigateTo('/auth/login');
  }

  try {
    const user = await fetchUserProfile(token);
    if (!user || user.level.role !== 'admin') {
      return navigateTo('/');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return navigateTo('/');
  }
});

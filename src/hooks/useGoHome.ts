import { useRouter } from 'expo-router';
export const useGoHome = () => {
  const router = useRouter();
  return () => router.replace('/');
};

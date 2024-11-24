
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SignupPage from '@/app/components/signup';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
   
    router.push('/signup'); 
  }, [router]);

  return <SignupPage />;
};

export default HomePage;

'use client';

import { useDispatch, useSelector } from 'react-redux';
import { getValidAuthTokens } from '@/lib/cookies';
import { useGetAuthDataQuery } from '@/redux/services/authApiSlice';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { removeUser } from '@/redux/features/userSlice';
import { useRouter } from 'next/navigation';

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { email } = useSelector((state: RootState) => state.user.user);
  const token = getValidAuthTokens();

  const [authChecked, setAuthChecked] = useState(false);

  const { error, isLoading } = useGetAuthDataQuery(
    { token: token || '' },
    {
      skip: !!email || !token,
    }
  );

  useEffect(() => {
    if (!token) {
      dispatch(removeUser());
      router.replace('/sign-in'); 
      return;
    }

    if (!isLoading && error) {
      dispatch(removeUser());
      router.replace('/sign-in');
    }

    if (!!email || (!isLoading && !error)) {
      setAuthChecked(true); 
    }
  }, [token, email, error, isLoading, dispatch, router]);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

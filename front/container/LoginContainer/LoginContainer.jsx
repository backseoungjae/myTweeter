import React, { useCallback } from 'react';
import Login from '../../components/Login';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import * as api from '../../apis';

export default function LoginContainer() {
  const router = useRouter();

  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await api.login({ email, password });
        router.push('/');
      } catch (error) {
        if (error.response.data) {
          return alert(error.response.data);
        }
        console.error(error);
      }
    },
    [email, password]
  );

  return (
    <Login
      email={email}
      password={password}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
    />
  );
}

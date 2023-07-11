import React, { useCallback, useEffect, useState } from 'react';
import Signup from '../../components/Signup';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import * as api from '../../apis';

export default function SignupContainer() {
  const router = useRouter();

  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [nickname, handleNickname] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 에러메세지
  const [emailErrorMessage, setEmailErrorMesssage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('');
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState('');

  // 비밀번호 확인 이벤트

  const handleComfirmPassword = useCallback((e) => {
    setPasswordConfirm(e.target.value);
  }, []);

  // 이메일 유효성 검사
  useEffect(() => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = email;

    if (email.length < 1) {
      setEmailErrorMesssage('');
      setIsEmail(false);
    } else if (!emailRegex.test(emailCurrent)) {
      setEmailErrorMesssage('이메일 형식에 맞게 다시 작성해 주세요.');
      setIsEmail(false);
    } else {
      setEmailErrorMesssage('');
      setIsEmail(true);
    }
  }, [email]);

  // 닉네임 유효성 검사
  useEffect(() => {
    if (nickname.length < 1) {
      setNicknameErrorMessage('');
      setIsNickname(false);
    } else if (nickname.length <= 1 || nickname.length > 9) {
      setNicknameErrorMessage('닉네임은 2자 이상 8자 이하로 작성해 주세요.');
      setIsNickname(false);
    } else {
      setNicknameErrorMessage('');
      setIsNickname(true);
    }
  }, [nickname]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = password;

    if (password.length < 1) {
      setPasswordErrorMessage('');
      setIsPassword(false);
    } else if (!passwordRegex.test(passwordCurrent)) {
      setPasswordErrorMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해 주세요.'
      );
      setIsPassword(false);
    } else {
      setPasswordErrorMessage('');
      setIsPassword(true);
    }
  }, [password]);

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    const passwordConfirmCurrunt = passwordConfirm;
    if (passwordConfirmCurrunt.length < 0) {
      setPasswordConfirmErrorMessage('');
      setIsPasswordConfirm(false);
    }
    if (passwordConfirmCurrunt !== password) {
      setPasswordConfirmErrorMessage('비밀번호를 다시 확인해 주세요.');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmErrorMessage('');
      setIsPasswordConfirm(true);
    }
  }, [passwordConfirm]);

  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await api.signup({ email, nickname, password });
        router.push('/login');
      } catch (error) {
        if (error.response.data) {
          return alert(error.response.data);
        }
        console.error(error);
      }
    },
    [email, nickname, password, passwordConfirm]
  );

  return (
    <Signup
      email={email}
      password={password}
      nickname={nickname}
      isEmail={isEmail}
      isNickname={isNickname}
      isPassword={isPassword}
      isPasswordConfirm={isPasswordConfirm}
      passwordConfirm={passwordConfirm}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      nicknameErrorMessage={nicknameErrorMessage}
      passwordConfirmErrorMessage={passwordConfirmErrorMessage}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleNickname={handleNickname}
      handleComfirmPassword={handleComfirmPassword}
      handleSignup={handleSignup}
    />
  );
}

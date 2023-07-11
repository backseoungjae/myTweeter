import React from "react";
import * as S from "./SignupStyles";

export default function Signup({
  email,
  password,
  nickname,
  isEmail,
  isNickname,
  isPassword,
  passwordConfirm,
  isPasswordConfirm,
  emailErrorMessage,
  passwordErrorMessage,
  nicknameErrorMessage,
  passwordConfirmErrorMessage,
  handleEmail,
  handlePassword,
  handleNickname,
  handleComfirmPassword,
  handleSignup,
}) {
  return (
    <S.Container onSubmit={handleSignup}>
      <S.InputBox>
        <label>이메일</label>
        <S.Input
          name="email"
          value={email || ""}
          onChange={handleEmail}
          type="email"
          placeholder="이메일을 입력해 주세요."
          autoComplete="on"
        />
        <S.ErrorText>{emailErrorMessage}</S.ErrorText>
      </S.InputBox>
      <S.InputBox>
        <label>닉네임</label>
        <S.Input
          maxLength="8"
          name="nickname"
          value={nickname || ""}
          onChange={handleNickname}
          type="text"
          placeholder="닉네임을 입력해 주세요."
          autoComplete="on"
        />
        <S.ErrorText>{nicknameErrorMessage}</S.ErrorText>
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <S.Input
          name="password"
          value={password || ""}
          onChange={handlePassword}
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="on"
        />
        <S.ErrorText>{passwordErrorMessage}</S.ErrorText>
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label>
        <S.Input
          name="passwordConfirm"
          value={passwordConfirm || ""}
          onChange={handleComfirmPassword}
          type="password"
          placeholder="비밀번호를 확인해 주세요."
          autoComplete="on"
        />
        <S.ErrorText>{passwordConfirmErrorMessage}</S.ErrorText>
      </S.InputBox>
      <S.Button
        disabled={!(isEmail && isNickname && isPassword && isPasswordConfirm)}
      >
        회원가입
      </S.Button>
    </S.Container>
  );
}

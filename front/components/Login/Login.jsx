import React from "react";
import * as S from "./LoginStyles";

export default function Login({
  email,
  password,
  handleEmail,
  handlePassword,
  handleLogin,
}) {
  return (
    <S.Container onSubmit={handleLogin}>
      <S.InputBox>
        <label>이메일</label>
        <S.Input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleEmail}
          placeholder="이메일을 입력해 주세요."
          autoComplete="on"
        />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <S.Input
          type="password"
          name="password"
          value={password || ""}
          onChange={handlePassword}
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="on"
        />
      </S.InputBox>
      <S.Button disabled={!(email || password)}>로그인</S.Button>
    </S.Container>
  );
}

import React, { useCallback } from "react";
import * as S from "./LayoutStyles";
import { useRouter } from "next/router";
import Link from "next/link";
import useInput from "../../hooks/useInput";
import * as api from "../../apis";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const router = useRouter();

  const { me } = useSelector((state) => state.user);

  // 로그아웃
  const handleLogout = useCallback(async (e) => {
    e.preventDefault();
    try {
      await api.logout();
      alert("로그아웃 되었습니다.");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }, []);

  const NAV_MENU = [
    {
      id: 1,
      name: "게시글",
      path: "/",
    },
    {
      id: 2,
      name: "로그인",
      path: "/login",
    },
    {
      id: 3,
      name: "회원가입",
      path: "/signup",
    },
  ];

  const LOGIN_NAV_MENU = [
    {
      id: 1,
      name: "게시글",
      path: "/",
    },
    {
      id: 2,
      name: me?.nickname + " " + "님",
      path: "/profile",
      logout: <S.LogoutIcon onClick={handleLogout} />,
    },
  ];

  // 태그 검색 하기
  const [searchInput, handleSearchInput] = useInput("");

  const handleSearch = useCallback(() => {
    router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const searchKeypress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <S.Container>
      <S.Inner>
        {me ? (
          <>
            {LOGIN_NAV_MENU.map((menu) => (
              <Link key={menu.id} href={menu.path}>
                <S.NavMenu active={menu.path === router.pathname}>
                  {menu.name}
                  {menu.logout}
                </S.NavMenu>
              </Link>
            ))}
          </>
        ) : (
          <>
            {NAV_MENU.map((menu) => (
              <Link key={menu.id} href={menu.path}>
                <S.NavMenu active={menu.path === router.pathname}>
                  {menu.name}
                </S.NavMenu>
              </Link>
            ))}
          </>
        )}
        <S.searchInputBox>
          <S.searchInput
            type="text"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={searchKeypress}
            placeholder="검색할 해시태그를 작성해 주세요."
          />
          <S.SearchIcon onClick={handleSearch} />
        </S.searchInputBox>
      </S.Inner>
      <div>{children}</div>
    </S.Container>
  );
}

import styled from "@emotion/styled";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";

export const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 10px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 20px 0 10px;
  border-bottom: 1px solid #e9e9e9;
`;

export const NavMenu = styled.a`
  cursor: pointer;
  color: ${({ active }) => (active ? "#ff5360" : "#333")};
  font-size: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

export const searchInputBox = styled.div`
  max-width: 250px;
  width: 100%;
  position: relative;
`;

export const searchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  outline: none;
  &::placeholder {
    transition: all 0.3s ease-in-out;
    color: #333;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const LogoutIcon = styled(AiOutlineLogout)`
  cursor: pointer;
  display: block;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  color: #333;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

import React from "react";
import logo1 from "../assets/logo1.png"; // 로고 이미지 경로

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-gray-700 h-11">
      <div>
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="F.INFO 로고" className="h-10 w-22" />
          <div class="flex gap-4 ml-4 text-white text-sm">
            <a className="hover:text-cyan-300 transition duration-300">선수정보</a>
            |
            <a className="hover:text-cyan-300 transition duration-300">강화 시뮬레이터</a>
            |
            <a className="hover:text-cyan-300 transition duration-300">스쿼드 메이커</a>
            |
            <a className="hover:text-cyan-300 transition duration-300">커뮤니티</a>
          </div>
        </div>
      </div>
    </header>
  );
}
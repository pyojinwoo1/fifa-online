import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.png"; // 로고 이미지 경로
import 영상1 from "../assets/영상1.png"; // 실제 파일명에 맞게 수정
import 영상2 from "../assets/영상2.png";
import 영상3 from "../assets/영상3.png";
import 배너1 from "../assets/배너1.png";
import 배너2 from "../assets/배너2.png";
import 배너3 from "../assets/배너3.png";
import 배너4 from "../assets/배너4.png";
import 배너5 from "../assets/배너5.png";
import 배너6 from "../assets/배너6.png";

function Fhome() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname.trim()) {
      navigate(`/search?nickname=${encodeURIComponent(nickname)}`);
    }
  };

  return (
    <div className="min-h-screenflex flex-col"
      style={{
        minHeight: "100vh",
    backgroundColor: "#18181c",
    backgroundImage: `repeating-linear-gradient(
      135deg,
      rgba(255,255,255,0.1),
      rgba(255,255,255,0.1) 1px,
      transparent 1px,
      transparent 20px
    )`,
    backgroundSize: "40px 40px"
      }}
    >
      
      <Header />
      {/* 나중에 메인 콘텐츠가 들어갈 자리 */}
        <div className="flex flex-col items-center mt-10">
          <img
            src={logo}
            alt="F.INFO 메인 로고"
            className="w-96"/>
          <div className="w-[500px] flex shadow-lg rounded-[30px] overflow-hidden bg-black">
          <form onSubmit={handleSubmit} className="flex w-full">
            <input
              type="text"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요."
              className="flex-1 px-6 py-4 bg-black text-white text-lg rounded-l-[18px] focus:outline-none"/>
            <button type="submit" className="px-6 py-4 bg-[#333] text-white text-lg rounded-r-[18px] hover:bg-[#444] transition duration-300">검색</button>
          </form>
        </div>
        <div className="w-full flex flex-col items-center mt-16">
          <h2 className="text-white text-lg font-semibold mb-6">최신 FC 온라인 영상</h2>
          <div className="flex gap-8">
            <a href="https://www.youtube.com/shorts/lekQZ4-zbKA" target="_blank" rel="noopener noreferrer">
            <img
              src={영상1}
              alt="FC 온라인 영상 1"
              className="w-30 h-44 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a href="https://www.youtube.com/shorts/q2AEwq0vZ8A" target="_blank" rel="noopener noreferrer">
            <img
              src={영상2}
              alt="FC 온라인 영상 2"
              className="w-30 h-44 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a href="https://www.youtube.com/shorts/pF75C4f4Ld4" target="_blank" rel="noopener noreferrer">
            <img
              src={영상3}
              alt="FC 온라인 영상 3"
              className="w-30 h-44 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
          </div>
          <div className="w-full flex justify-center gap-1 mt-12 mb-1">          
            <a
            href="https://shop.fconline.nexon.com/Events/250430/SevenHitsLucky?utm_source=pc&utm_medium=TI&utm_campaign=250430_7thSSS"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={배너1}
              alt="배너1"
              className="h-16 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a
            href="https://events.fconline.nexon.com/250515/awards?utm_source=pc&utm_medium=TI&utm_campaign=250515_7thawards"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={배너2}
                alt="배너2"
                className="h-16 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a
            href="https://events.fconline.nexon.com/250424/play?utm_source=pc&utm_medium=list&utm_campaign=250424_play"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={배너3}
                alt="배너3"
                className="h-16 rounded-lg shadow-md hover:scale-105 transition"
              /></a>
          </div>
          <div className="w-full flex justify-center gap-1 mt-0 mb-12">
            <a
            href="https://events.fconline.nexon.com/collabo250515/collabo?utm_source=pc&utm_medium=boardThumb&utm_campaign=250515_collabo"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={배너4}
                alt="배너4"
                className="h-16 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a
            href="https://events.fconline.nexon.com/TheIconRoad?utm_source=pc&utm_medium=boardThumb&utm_campaign=iconroad"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={배너5}
                alt="배너5"
                className="h-16 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            <a
            href="https://events.fconline.nexon.com/250529/connect"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={배너6}
                alt="배너6"
                className="h-16 rounded-lg shadow-md hover:scale-105 transition"
            /></a>
            
          </div>
        </div>
        </div>
        
      <main className="flex-1 flex flex-col items-center"></main>
      <Footer />
    </div>
  );
}

export default Fhome;

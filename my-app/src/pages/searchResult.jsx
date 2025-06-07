import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const nickname = searchParams.get("nickname") || "";
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!nickname) return;
    setUserInfo(null);
    setError("");
    // 실제로는 백엔드 서버에 요청해야 함
    fetch(`/api/search?nickname=${encodeURIComponent(nickname)}`)
      .then((res) => {
        if (!res.ok) throw new Error("유저 정보를 찾을 수 없습니다.");
        return res.json();
      })
      .then((data) => setUserInfo(data))
      .catch((err) => setError(err.message));
  }, [nickname]);

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
      }}>
        <Header />
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-xl text-white font-bold mb-4">
            {nickname ? `"${nickname}" 검색 결과` : "검색어가 없습니다."}
          </h2>
          {error && <div className="text-red-500">{error}</div>}
          {!error && !userInfo && <div className="text-white">로딩 중...</div>}
          {userInfo && (
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white w-[400px]">
              <div className="mb-2"><span className="font-bold">닉네임:</span> {userInfo.nickname}</div>
              <div className="mb-2"><span className="font-bold">레벨:</span> {userInfo.level}</div>
              {/* 필요하다면 추가 정보 표시 */}
            </div>
          )}
        </div>
        <Footer />
        <div>

        </div>
    </div>
  );
};

export default SearchResult;
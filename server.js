const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// 발급받은 넥슨 API 키를 입력하세요!
const NEXON_API_KEY = 'live_824fd84978dddd3774b432cb1b361125bb494183d7fb4aec70155e966c53a5c0efe8d04e6d233bd35cf2fabdeb93fb0d';

app.get('/api/search', async (req, res) => {
  const nickname = req.query.nickname;
  if (!nickname) {
    return res.status(400).json({ error: '닉네임이 필요합니다.' });
  }
  try {
    const headers = { 'x-nxopen-api-key': NEXON_API_KEY };

    // 1. 닉네임으로 ouid 조회 (최신 엔드포인트)
    const userRes = await axios.get(
      `https://open.api.nexon.com/fconline/v1/id?nickname=${encodeURIComponent(nickname)}`,
      { headers }
    );
    const ouid = userRes.data.ouid;

    // 2. ouid로 기본 정보 조회
    const infoRes = await axios.get(
      `https://open.api.nexon.com/fconline/v1/user/basic?ouid=${ouid}`,
      { headers }
    );

    res.json({
      nickname: infoRes.data.nickname,
      level: infoRes.data.level,
      // 필요하다면 추가 정보도 전달
    });
  } catch (err) {
    // 넥슨 API 응답 코드와 메시지 콘솔에 출력
    console.log('넥슨 API 오류:', err.response?.status, err.response?.data);

    // 넥슨 API 에러코드가 있으면 그대로 반환, 없으면 500
    const status = err.response?.status || 500;
    const message = err.response?.data?.message || "유저 정보를 찾을 수 없습니다.";
    res.status(status).json({ error: message });
  }
});

app.listen(port, () => {
  console.log(`백엔드 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
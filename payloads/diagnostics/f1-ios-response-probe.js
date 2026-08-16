const body = `WEBVTT

00:00:00.000 --> 00:00:10.000
手机 Surge response script 测试
`;

$done({
  status: 200,
  headers: {
    "Content-Type": "text/vtt; charset=utf-8",
    "Cache-Control": "no-store, max-age=0",
    "Pragma": "no-cache",
    "Expires": "0",
  },
  body,
});

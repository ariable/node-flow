const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// 健康检查接口
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 求和接口：GET /sum?a=1&b=2 -> { result: 3 }
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'a and b must be numbers' });
  }

  res.json({ result: a + b });
});

// 新增：乘法接口：GET /multiply?a=2&b=3 -> { result: 6 }
app.get('/multiply', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'a and b must be numbers' });
  }

  res.json({ result: a * b });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;


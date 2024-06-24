const app = require('./app.js');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 8081;

const options = {
  cert: fs.readFileSync('D:\\Project\\socialinsurance\\backend\\cert.pem'),
  key: fs.readFileSync('D:\\Project\\socialinsurance\\backend\\cert.key'),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

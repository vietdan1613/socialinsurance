module.exports = {
  apps: [
    {
      name: "bhxh",
      script: "src/server.js",
      instances: 1,
      autorestart: true,
      watch: false
    },
    {
      name: "cloudflare-tunnel",
      script: "cmd.exe",
      args: '/c "cloudflared tunnel run bhxh"',
      autorestart: true
    }
  ]
};
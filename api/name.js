const { parse } = require('url')

module.exports = (req, res) => {
  res.end(`Hello ${process.env.TEAM_NAME} ${process.env.SUDO_LOGO}`)
}
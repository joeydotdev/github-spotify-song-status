# Github Spotify Song Status

Share what you are currently listening to on Spotify on your Github Profile Status

---

## Setup
1. Clone project
2. Obtain your bops.fm API token (reach out to me if you want early access!)
3. Setup `.env` file with `BEARER_TOKEN` and `GITHUB_ACCESS_TOKEN`
4. Run `npm install`, then `node index.js` (ideally you set this up on a cronjob on a server!)

### Example cron:
`* * * * * cd /root/github-spotify-song-status/ && node index.js > /dev/null 2>&1`

## Useful links:
[bops.fm](https://www.bops.fm/)

[github.com/settings/tokens](https://github.com/settings/tokens)

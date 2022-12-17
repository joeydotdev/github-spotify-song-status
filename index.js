const fetch = require('node-fetch');
const { GitHubProfileStatus } = require('github-profile-status');
const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, './.env') });

const ENDPOINT = 'https://api.bops.fm/v1/tracks/playing';

async function updateProfile() {
  const profileStatus = new GitHubProfileStatus({
    token: process.env.GITHUB_ACCESS_TOKEN,
  });

  const response = await fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: process.env.BEARER_TOKEN,
    },
  }).then((res) => res.json());

  if (response.track) {
    await profileStatus.set({
      emoji: ':musical_note:',
      message: `${response.track.name} - ${response.track.artists.join(
        ', '
      )}`.toLowerCase(),
    });
  } else {
    // no active playing song
    await profileStatus.set({
      emoji: ':eyes:',
      message: 'looking for corgis',
    });
  }
}

updateProfile();

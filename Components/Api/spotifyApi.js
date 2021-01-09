export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "60aab7ad549d4c0d8a4f12da1fbe6fdd";

const redirectUrl = "http://localhost:3000/main";

const scopes = [
  "user-read-recently-played", //Read access to a user’s recently played tracks.
  "user-follow-read", //Read access to the list of artists and other users that the user follows.
  "user-read-currently-playing", //Read access to a user’s currently playing content.
  "user-read-playback-state", //Read access to a user’s player state.
  "user-modify-playback-state", //Write access to a user’s playback state
  "streaming", //Control playback of a Spotify track.
  "user-library-read", //Read access to a user's "Your Music" library.
  "playlist-read-private", //Read access to user's private playlists.
  "user-top-read", //Read access to a user's top artists and tracks.
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//Get the hash of the url
export const accessToken = () => {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  window.location.hash = "";

  return hash;
};

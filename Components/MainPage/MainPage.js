import { useState, useEffect } from "react";
import { accessToken } from "../Api/spotifyApi";
import Login from "../Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";

const spotify = new SpotifyWebApi();

// function Redirect({ to }) {
//   const router = useRouter();

//   useEffect(() => {
//     router.push(to);
//   }, []);

//   return null;
// }

export default function main() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = accessToken();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div>
      {token ? (
        <Player />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

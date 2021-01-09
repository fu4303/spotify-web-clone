import { useState, useEffect } from "react";
import SpotifyNameLogoGreen from "../Images/SpotifyNameLogoGreen";
import { loginUrl, accessToken } from "../Api/spotifyApi";

export default function Login() {
  //   const [token, setToken] = useState("");

  //   console.log(token);

  //   useEffect(() => {
  //     const hash = accessToken();
  //     window.location.hash = "";

  //     const _token = hash.access_token;

  //     if (_token) {
  //       setToken(_token);
  //     }
  //   }, []);

  return (
    <div className="login">
      <SpotifyNameLogoGreen />
      <a aria-label="login button" className="login__a" href={loginUrl}>
        LOG IN WITH SPOTIFY
      </a>
    </div>
  );
}

// <div className="login">
//       {token ? (
//         <h1 style={{ color: "white" }}>logged in</h1>
//       ) : (
//         <>
//           <SpotifyNameLogoGreen />
//           <a aria-label="login button" className="login__a" href={loginUrl}>
//             LOG IN WITH SPOTIFY
//           </a>
//         </>
//       )}
//     </div>

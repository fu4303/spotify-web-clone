import { useContext } from "react";
import Login from "../Login/Login";
import Player from "../Player/Player";
import { StateContext } from "../StateContext";

export default function main() {
  const { user, token, spotify } = useContext(StateContext);

  console.log(spotify);

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

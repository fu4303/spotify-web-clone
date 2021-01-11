import { useContext } from "react";
import Login from "../Login/Login";
import PlayerHome from "../PlayerHome/Player";
import { StateContext } from "../Context/StateContext";

export default function main() {
  const { user, token, spotify } = useContext(StateContext);

  console.log(spotify);

  return (
    <div>
      {token ? (
        <PlayerHome />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

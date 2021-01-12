import { useContext } from "react";
import Login from "../Login/Login";
import PlayerHome from "../PlayerHome/Player";
import { StateContext } from "../Context/StateContext";

export default function main() {
  const { token } = useContext(StateContext);

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

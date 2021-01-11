import { useState, createContext, useEffect } from "react";
import { accessToken } from "./Api/spotifyApi";
import SpotifyWebApi from "spotify-web-api-js";

export const StateContext = createContext();

const spotify = new SpotifyWebApi();

const StateContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(
    "BQAk431737rzxmVSbgiKI_zChNB4FMiEqmFSjHlbCO_o2HAQm7nMv0R_gO6Q125Dno5peq68EPYubEfY6URrKe_llR3Gwn46VEyaJsxzIVXB_T_erO4fXYVBM844LcbVwhZdWne8ngoGreSpdxNJBjV59tbRJZkRtqkVKKGaecDjj7HCrepRDwEKZLoB"
  );

  useEffect(() => {
    const hash = accessToken();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        setUser(user);
      });
    }
  }, []);


  return (
    <StateContext.Provider value={{ user, token, spotify}}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;

// // HOW TO ESTABLISH STATE AND PROVIDE CONTEXT
// import {useState, createContext} from 'react'

// //create a new context called 'StateContext'
// export const StateContext = createConetext()

// // then create a provider function as a default export
// // include props in the functions

// const StateContextProvider = (props) => {
//   //define useState to define initial state
//   const [user, setUser] = useState("");

//   return (
//     //in jsx return StateContext.Provider and pass props.children in them
//     //as value pass the value of useState
//     <StateContext.Provider value={{ user }}>
//       {props.children}
//     </StateContext.Provider>
//   );
// };

//export default StateContextProvider;

////WRAPPING CONTEXT AROUND THE COMPONENT THAT NEEDS IT
////import the context file in the main while where the component sits
//import StateContext from ''./StateContext

////Wrap the component in the context

// <StateContextProvider>
//   <MainPage />
// </StateContextProvider>;

// HOW TO USE CONTEXT IN VARIOUS COMPONENTS

//import {useContext} from 'react'

//const {'insert what state you need'} = useContext('insert what state context you need')
//eg: const { user } = useContext(StateContext);

//now you can use 'user' anywhere like normal state

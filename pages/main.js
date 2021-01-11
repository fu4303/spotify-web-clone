import MainPage from "../Components/MainPage/MainPage";
import StateContextProvider from "../Components/Context/StateContext";

export default function main() {
  return (
    <div>
      <StateContextProvider>
        <MainPage />
      </StateContextProvider>
    </div>
  );
}

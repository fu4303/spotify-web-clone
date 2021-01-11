import MainPage from "../Components/MainPage/MainPage";
import StateContextProvider from "../Components/StateContext";

export default function main() {
  return (
    <div>
      <StateContextProvider>
        <MainPage />
      </StateContextProvider>
    </div>
  );
}

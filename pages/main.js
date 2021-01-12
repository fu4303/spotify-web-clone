import MainPage from "../Components/MainPage/MainPage";
import StateContextProvider from "../Components/Context/StateContext";

export default function main() {
  return (
    <div className="font-body">
      <StateContextProvider>
        <MainPage />
      </StateContextProvider>
    </div>
  );
}

import MainPage from "../Components/MainPage/MainPage";
import StateProvider from '../Components/StateProvider'

export default function main() {
  return (
    <div>
      <StateProvider reducer initialState>
        <MainPage />
      </StateProvider>
    </div>
  );
}

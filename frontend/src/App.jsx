import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { APP_ROUTES } from "./constants/routes";
import Home from "@/views/Home/Home";
import CreateGame from "@/views/Blackjack/CreateGame/CreateGame";
import GameBoard from "@/views/Blackjack/GameBoard/GameBoard";

const App = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.BLACKJACK} element={<CreateGame />} />
        <Route
          path={`${APP_ROUTES.BLACKJACK}${APP_ROUTES.GAME}`}
          element={<GameBoard />}
        />
      </Routes>
    </BaseLayout>
  );
};

export default App;

import BaseInput from "@/components/BaseInput/BaseInput";
import { useEffect, useState } from "react";
import "./CreateGame.scss";
import BaseButton from "@/components/BaseButton/BaseButton";
import useCreateGame from "@/hooks/useCreateGame";
import { Outlet, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/routes";

const CreateGame = () => {
  const navigate = useNavigate();
  const { createGame } = useCreateGame();

  const [gameName, setGameName] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerThree, setPlayerThree] = useState("");
  const [playerFour, setPlayerFour] = useState("");

  const [game, setGame] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gameName.trim().length) return;

    const players = [playerOne, playerTwo, playerThree, playerFour].filter(
      (player) => !!player?.trim().length
    );

    createGame({ name: gameName, players }).then((res) => setGame(res));
  };

  useEffect(() => {
    if (game) {
      console.log(game);
      navigate(`${APP_ROUTES.BLACKJACK}/game/${game.id}`, { state: game });
    }
  }, [game]);

  return (
    <>
      <section>
        <h2>Blackjack</h2>

        <form className="form" onSubmit={handleSubmit}>
          <BaseInput
            id="game-name"
            label="Game name"
            placeholder="Enter game name"
            value={gameName}
            onChange={(value) => setGameName(value)}
          />
          <BaseInput
            id="player-one"
            label="Player 1"
            placeholder="Enter player name"
            value={playerOne}
            onChange={(value) => setPlayerOne(value)}
          />
          <BaseInput
            id="player-two"
            label="Player 2"
            placeholder="Enter player name"
            value={playerTwo}
            onChange={(value) => setPlayerTwo(value)}
          />
          <BaseInput
            id="player-three"
            label="Player 3"
            placeholder="Enter player name"
            value={playerThree}
            onChange={(value) => setPlayerThree(value)}
          />
          <BaseInput
            id="player-four"
            label="Player 4"
            placeholder="Enter player name"
            value={playerFour}
            onChange={(value) => setPlayerFour(value)}
          />

          <BaseButton type="submit" btnText="Start Game" />
        </form>
        <Outlet />
      </section>
    </>
  );
};

export default CreateGame;

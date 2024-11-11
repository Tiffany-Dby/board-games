import BaseInput from "@/components/BaseInput/BaseInput";
import { useEffect, useState } from "react";
import "./CreateGame.scss";
import BaseButton from "@/components/BaseButton/BaseButton";
import useCreateGame from "@/hooks/useCreateGame";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/routes";

const CreateGame = () => {
  const navigate = useNavigate();
  const { createGame } = useCreateGame();

  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState([""]);

  const [game, setGame] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gameName.trim().length) return;

    const nonEmptyPlayers = players.filter((player) => !!player.trim());
    setPlayers(nonEmptyPlayers);

    createGame({ name: gameName, players: nonEmptyPlayers }).then((response) =>
      setGame(response)
    );
  };

  useEffect(() => {
    if (game) {
      navigate(`${APP_ROUTES.BLACKJACK}/game/${game.id}`);
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

          <div className="form__players">
            {players?.map((player, index) => (
              <div className="form__player-input" key={index}>
                <BaseInput
                  id={`player-${index + 1}`}
                  label={`Player ${index + 1}`}
                  placeholder="Enter player name"
                  value={player}
                  onChange={(value) =>
                    setPlayers(players.map((p, i) => (i === index ? value : p)))
                  }
                />
                <BaseButton
                  btnText="X"
                  onBtnClick={() =>
                    setPlayers(players.filter((p, i) => i !== index))
                  }
                  disabled={index === 0}
                />
              </div>
            ))}
          </div>
          <div className="form__buttons">
            <BaseButton
              btnText="Add Player"
              onBtnClick={() => setPlayers([...players, ""])}
            />
            <BaseButton type="submit" btnText="Start Game" />
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateGame;

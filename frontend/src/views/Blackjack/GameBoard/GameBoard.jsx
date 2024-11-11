import BaseSelect from "@/components/BaseSelect/BaseSelect";
import { useEffect, useState } from "react";
import "./GameBoard.scss";
import { useParams } from "react-router-dom";
import BaseTable from "@/components/BaseTable/BaseTable";
import BaseButton from "@/components/BaseButton/BaseButton";
import usePlayGame from "@/hooks/usePlayGame";

const GameBoard = () => {
  const { id } = useParams();
  const { getGame, playerRoll, playerEndTurn, getWinners } = usePlayGame();

  const [game, setGame] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameTurn, setGameTurn] = useState(0);
  const [winners, setWinners] = useState([]);

  const fields = ["ID", "Name", "Score"];
  const diceOpts = [
    { label: "None", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
  const [diceValue, setDiceValue] = useState(diceOpts[0].value);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handlePlayerRoll = () => {
    playerRoll({ player_id: currentPlayer.id, dice_amount: diceValue }).then(
      (response) => {
        setGame((prevGame) => ({
          ...prevGame,
          players: prevGame.players.map((player) =>
            player.id === currentPlayer.id
              ? { ...player, ...response.player }
              : player
          ),
        }));
        setCurrentPlayer(response.next_player);
        setIsGameOver(response.is_game_over);
      }
    );
  };

  const handlePlayerEndTurn = () => {
    playerEndTurn({ player_id: currentPlayer.id }).then((response) => {
      setCurrentPlayer(response.next_player);
      setIsGameOver(response.is_game_over);
    });
  };

  useEffect(() => {
    if (id) {
      getGame(id).then((response) => {
        setGame(response);
        setGameTurn(response.turn);
        setCurrentPlayer(response.players[0]);
        setIsGameOver(response.ended);
      });
    }
  }, [id]);

  useEffect(() => {
    if (gameTurn > 0) {
      setCurrentPlayer(game.players[gameTurn]);
    }
  }, [game]);

  useEffect(() => {
    if (isGameOver && id) {
      getWinners(id).then((response) => setWinners(response.winners));
    }
  }, [isGameOver, id]);

  return (
    <>
      <h2>Blackjack: {game?.name}</h2>
      <div className="game-board__wrapper">
        {!!winners?.length && (
          <div>
            <p>Winner{winners.length > 1 && "s"} ! 🎉</p>
            <div className="game-board__table">
              <BaseTable fields={fields} data={winners ?? []} />
            </div>
          </div>
        )}
        <p>Player: {currentPlayer?.name}</p>
        <div
          className="game-board__display"
          style={{
            backgroundColor: isGameOver ? "var(--black)" : "transparent",
          }}
        >
          <span>{currentPlayer?.score}</span>
        </div>
        <BaseSelect
          id="dice-amount"
          label="Choose the number of dice to roll"
          value={diceValue}
          onChange={(value) => setDiceValue(value)}
          options={diceOpts}
          disabled={isGameOver}
        />
        <div className="game-board__controls">
          <BaseButton
            btnText="End Turn"
            onBtnClick={handlePlayerEndTurn}
            disabled={isGameOver}
          />
          <BaseButton
            btnText="Roll Dice"
            onBtnClick={handlePlayerRoll}
            disabled={isGameOver}
          />
        </div>
        <div>
          <p>Score board</p>
          <div className="game-board__table">
            <BaseTable fields={fields} data={game?.players ?? []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;

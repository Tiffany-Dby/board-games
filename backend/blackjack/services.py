from blackjack.models import Game, Player

def create_game(game_name: str, players: list[str]):
  game = Game(name=game_name)
  game.save()
  
  for name in players:
    Player.objects.create(name=name, game=game)
  
  return game

def get_game_players(game_id: int):
  game = Game.objects.get(pk=game_id)
  players = game.players.all()
  
  return players

def get_winners(game_id: int):
  game = Game.objects.get(pk=game_id)
  players = game.players.all()

  if not (valid_players := [player for player in players if player.score <= 21]):
    return []
  
  max_score = max(player.score for player in valid_players)
  winners = [player for player in valid_players if player.score == max_score]

  return winners

def update_player_score(player_id: int, score: int):
  player = Player.objects.get(pk=player_id);
  player.score = score
  player.save()

  return player
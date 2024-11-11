from blackjack.models import Game, Player
import random
import logging

logging.basicConfig(level=logging.DEBUG)

def create_game(game_name: str, players: list[str]):
  game = Game(name=game_name)
  game.save()
  
  for name in players:
    Player.objects.create(name=name, game=game)
  
  return game

def get_game(game_id: int):
  game = Game.objects.get(pk=game_id)

  return game

def get_game_players(game_id: int):
  game = get_game(game_id)
  players = game.players.all()
  
  return players

def get_game_player(player_id: int):
  player = Player.objects.get(pk=player_id)

  return player

def player_action_roll(dice_amount: int, player_id: int):
  player = get_game_player(player_id)

  current_score = player.score
  new_score = roll_dice(dice_amount, current_score)
  updated_player = update_player_score(player_id, new_score)

  next_player = updated_player
  if new_score >= 21:
    add_game_turn(player.game.id)
    next_player = get_next_player(player.game.id)

  is_ended = is_game_over(player.game.id)

  return { "player": updated_player, "next_player": next_player, "is_game_over": is_ended }

def player_action_end_turn(player_id: int):
  player = get_game_player(player_id)

  add_game_turn(player.game.id)
  next_player = get_next_player(player.game.id)

  is_ended = is_game_over(player.game.id)

  return { "player": player, "next_player": next_player, "is_game_over": is_ended }

def get_next_player(game_id: int):
  game = get_game(game_id)
  players = game.players.all()

  if game.turn >= len(players):
    end_game(game_id)
    
    return None

  player = get_game_player(players[game.turn].id)
  return player

def roll_dice(dice_amount: int, current_score: int):
  new_score = current_score + sum(random.randint(1, 6) for _ in range(dice_amount))

  return new_score

def add_game_turn(game_id: int):
  game = get_game(game_id)
  game.turn += 1
  game.save()

def update_player_score(player_id: int, score: int):
  player = get_game_player(player_id)
  player.score = score
  player.save()

  return player

def end_game(game_id: int):
  game = get_game(game_id)
  game.ended = True
  game.save()

def is_game_over(game_id: int):
  game = get_game(game_id)
  
  return True if game.ended == True else False

def get_winners(game_id: int):
  game = Game.objects.get(pk=game_id)
  players = game.players.all()

  if not (valid_players := [player for player in players if player.score <= 21]):
    return { "winners": [] }
  
  max_score = max(player.score for player in valid_players)
  winners = [player for player in valid_players if player.score == max_score]

  return { "winners": winners }
from ninja import Router, ModelSchema, Schema
from blackjack.models import Game, Player
from blackjack import services

router = Router()

class PlayerSchema(ModelSchema):
  class Meta:
    model = Player
    fields = ["id", "name", "score"]

class GameSchema(ModelSchema):
  class Meta:
    model = Game
    fields = ["id", "name", "turn", "ended"]

  players: list[PlayerSchema]

class StartGameSchema(Schema):
  name: str
  players: list[str]

class ActionRollSchema(Schema):
  player_id: int
  dice_amount: int

class ActionEndTurnSchema(Schema):
  player_id: int

class ActionResultSchema(Schema):
  player: PlayerSchema
  next_player: PlayerSchema | None
  is_game_over: bool

class WinnersSchema(Schema):
  winners: list[PlayerSchema]

@router.get("/game/{game_id}", response=GameSchema)
def get_game(request, game_id: int):
  # return Game.objects.get(pk=game_id)
  return services.get_game(game_id)

@router.get("/game/{game_id}/winners", response=WinnersSchema)
def get_winners(request, game_id: int):
  return services.get_winners(game_id)

@router.post("/start_game", response=GameSchema)
def start_game(request, new_game: StartGameSchema):
  return services.create_game(new_game.name, new_game.players)

@router.post("/player_roll_dice", response=ActionResultSchema)
def player_roll_dice(request, new_roll: ActionRollSchema):
  return services.player_action_roll(new_roll.dice_amount, new_roll.player_id)

@router.post("/player_end_turn", response=ActionResultSchema)
def player_end_turn(request, new_action: ActionEndTurnSchema):
  return services.player_action_end_turn(new_action.player_id)
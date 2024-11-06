from ninja import NinjaAPI
from blackjack.api import router as blackjack_router

api = NinjaAPI()

api.add_router("/blackjack/", blackjack_router)
import unittest
from bot.main import start

class TestBot(unittest.TestCase):
    def test_start(self):
        # This is a simple test to check if the start function runs without errors.
        # A more comprehensive test suite would mock the Telegram API and check the bot's responses.

        class MockUpdate:
            class MockMessage:
                def reply_text(self, text):
                    pass
            message = MockMessage()

        update = MockUpdate()
        start(update, None)

if __name__ == '__main__':
    unittest.main()

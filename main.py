from app import start_socketio_server
from dotenv import load_dotenv
load_dotenv()

if __name__ == "__main__":
    # cds_helper_ddx.run({"transcript": "hello world"}, callbacks=None)
    print("[main] Running server thread")
    start_socketio_server()

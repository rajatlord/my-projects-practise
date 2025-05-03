
function GameBoard ({onEmojiClick , position}){
    const emoji = "😎";

    return(
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Emoji */}
          <div
            className="text-6xl cursor-pointer absolute transition-all duration-300"
            style={{ top: position.top, left: position.left }}
            onClick={onEmojiClick}
            onTouchStart={onEmojiClick}
          >
            {emoji}
          </div>
        </div>
      );
}

export default GameBoard;
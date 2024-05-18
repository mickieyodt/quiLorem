function showGameOver(gameLoopInterval) {
  // Attempt to display the game over screen
  const gameOverScreen = document.getElementById("game-over-screen");
  if (gameOverScreen) {
    gameOverScreen.style.display = "flex";
  } else {
    console.error("Game over screen element not found.");
  }

  // Attempt to stop the game loop
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
  } else {
    console.error("Game loop interval not provided or invalid.");
  }
}

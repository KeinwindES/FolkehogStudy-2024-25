// Setup the canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
let player;
let zombie;
let isGameOver = false;
let playerSpeed = 5;
let score = 0;

// Player class
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.velocityX = 0;
        this.velocityY = 0;
        this.color = 'blue';
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Keep player within bounds of the canvas
        this.x = Math.max(0, Math.min(canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Zombie class
class Zombie {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.color = 'green';
    }

    update() {
        // Move zombie towards player
        if (this.x < player.x) this.x += 1;
        if (this.x > player.x) this.x -= 1;
        if (this.y < player.y) this.y += 1;
        if (this.y > player.y) this.y -= 1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Initialize game objects
player = new Player(canvas.width / 2, canvas.height / 2);
zombie = new Zombie(100, 100);

// Music (using a simple sound play for now)
function playMusic() {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play();
}

// Game loop
function gameLoop() {
    if (isGameOver) {
        ctx.fillStyle = 'black';
        ctx.font = '48px Arial';
        ctx.fillText('Game Over!', canvas.width / 2 - 150, canvas.height / 2);
        return;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game objects
    player.update();
    zombie.update();

    // Draw game objects
    player.draw();
    zombie.draw();

    // Check for collision
    if (checkCollision(player, zombie)) {
        isGameOver = true;
    }

    // Call the next frame
    requestAnimationFrame(gameLoop);
}

// Collision detection
function checkCollision(player, zombie) {
    return player.x < zombie.x + zombie.width &&
           player.x + player.width > zombie.x &&
           player.y < zombie.y + zombie.height &&
           player.y + player.height > zombie.y;
}

// Handle keyboard input for player movement
let isUpPressed = false;
let isDownPressed = false;
let isLeftPressed = false;
let isRightPressed = false;

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && !isUpPressed) {
        player.velocityY = -playerSpeed;
        isUpPressed = true;
    }
    if (event.key === 'ArrowDown' && !isDownPressed) {
        player.velocityY = playerSpeed;
        isDownPressed = true;
    }
    if (event.key === 'ArrowLeft' && !isLeftPressed) {
        player.velocityX = -playerSpeed;
        isLeftPressed = true;
    }
    if (event.key === 'ArrowRight' && !isRightPressed) {
        player.velocityX = playerSpeed;
        isRightPressed = true;
    }
});

// Stop player movement when keys are released
window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        player.velocityY = 0;
        isUpPressed = false;
    }
    if (event.key === 'ArrowDown') {
        player.velocityY = 0;
        isDownPressed = false;
    }
    if (event.key === 'ArrowLeft') {
        player.velocityX = 0;
        isLeftPressed = false;
    }
    if (event.key === 'ArrowRight') {
        player.velocityX = 0;
        isRightPressed = false;
    }
});

// Start the game music
playMusic();

// Start the game loop
gameLoop();

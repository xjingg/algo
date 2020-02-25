class Character {
    constructor(id, name, x, y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        // initially the character will face right
        this.dx = 1;
        this.dy = 0;
    }
    get position() {
        return {
            x: this.x,
            y: this.y
        };
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) this.x = 0;
        if (this.x > 9) this.x = 9;
        if (this.y < 0) this.y = 0;
        if (this.y > 9) this.y = 9;
    }
    logPosition() {
        console.log(this.name, this.position);
    }
    collidesWith(character) {
        return character.position.x === this.x &&
            character.position.y === this.y;
    }
}
class PlayerCharacter extends Character {
    constructor(id, name, x, y) {
        super(id, name, x, y);
        this.score = 0;
    }
    faceUp() {
        this.dx = 0;
        this.dy = -1;
    }
    faceDown() {
        this.dx = 0;
        this.dy = 1;
    }
    faceLeft() {
        this.dx = -1;
        this.dy = 0;
    }
    faceRight() {
        this.dx = 1;
        this.dy = 0;
    }
    increaseScore(points) {
        this.score += points;
    }
}
class NonPlayerCharacter extends Character {
    faceRandom() {
        let dir = Math.floor(Math.random() * 4);
        this.dx = [0, 0, -1, 1][dir];
        this.dy = [-1, 1, 0, 0][dir];
    }
}

function createPlayer(id, name) {
    let x = Math.floor(Math.random() * 10),
        y = Math.floor(Math.random() * 10);
    return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
    let x = Math.floor(Math.random() * 10),
        y = Math.floor(Math.random() * 10);
    return new NonPlayerCharacter(id, name, x, y);
}
let npcArray = '23456'.split('').map(i => {
    return createNonPlayer(i, 'Wumpus_' + i)
});
let player = createPlayer(1, 'Hero');

function gameLoop() {
    function changeNpcDirections() {
        npcArray.forEach(npc => {
            npc.faceRandom();
        });
    }

    function moveCharacters() {
        player.move();
        npcArray.forEach(npc => {
            npc.move();
        });
    }

    function logPositions() {
        player.logPosition();
        npcArray.forEach(npc => {
            npc.logPosition();
        });
    }

    function processCollisions() {
        let len = npcArray.length;
        npcArray = npcArray.filter(
            npc => !npc.collidesWith(player));
        player.increaseScore(len - npcArray.length);
    }
    console.log('move starts');
    changeNpcDirections();
    moveCharacters();
    logPositions();
    processCollisions();
}
setInterval(gameLoop, 5000);
// influence the movement of the player by executing
// player.faceUp()
// player.faceDown()
// player.faceLeft()
// player.faceRight()
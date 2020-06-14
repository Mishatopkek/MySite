let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');

let w = window.innerWidth / 1.05; //Без этого кастыля, я не знаю как избавиться от scroolbar'а слево-направо
let h = window.innerHeight / 1.41; //Без этого UI сверху будет мешать змейке, снизу не будет видно футер
cnv.width = w;
cnv.height = h;

let s = 40; //Размер квадратов
let sw = ~~(w / s) - 1; //Кол-во квадратов по ширине
let sh = ~~(h / s) - 1; //Кол-во квадратов по высоте
let border = 4; //Толщина контура

let dirChanged = false;
let dir = 1;
let snake = [];
for (let i = 0; i < 3; i++) { //Где появляется змейка в нашей игре
	snake.push({x: ~~(sw / 2) - i, y: ~~(sh / 2)});
}

let foodX = 0;
let foodY = 0;
newFood();

function newFood() {
	let valid = true;
	do {
		foodX = ~~(Math.random() * sw);
		foodY = ~~(Math.random() * sh);
		valid = true;
		for (let i = 0; i < snake.length; i++) {
			if(foodX == snake[i].x && foodY == snake[i].y) {
				valid = false;
			}
		}
	} while(!valid);
}

function newSnake() {
	dir = 1;
	snake = [];
	for (let i = 0; i < 3; i++) {
		snake.push({x: ~~(sw / 2) - i, y: ~~(sh / 2)});
	}
}

setInterval(update, 200); //Скорость движение змейки (Меньше - быстрее)
document.onkeydown = keyDown;

update();
function update() {
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = '#1F1F1F';
	for (let i = 0; i <= sw; i++) { //Цикл чтобы расставить квадраты по высоте
		ctx.fillRect(i * s, 0, border, sh * s + border);
	}
	for (let i = 0; i <= sh; i++) { //Цикл чтобы расставить квадраты по ширине
		ctx.fillRect(0, i * s, sw * s + border, border);
	}
  ctx.fillStyle = '#47d';
	ctx.fillRect(foodX * s + border, foodY * s + border, s - border, s - border);
  ctx.fillStyle = '#'+Math.floor(Math.random()*2**24).toString(16).padStart(6, '0');
	let dx = snake[0].x;
	let dy = snake[0].y;
	if(dx == foodX && dy == foodY) {
		newFood();
		snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
	}
	for (let i = 0; i < snake.length; i++) {
		let x = snake[i].x;
		let y = snake[i].y;
		ctx.fillRect(x * s + border, y * s + border, s - border, s - border);
	}
	for (let i = snake.length - 1; i > 0; i--) {
		snake[i].x = snake[i - 1].x;
		snake[i].y = snake[i - 1].y;
	}
	if(dir == 0) {
		dy--;
	}
	else if(dir == 1) {
		dx++;
	}
	else if(dir == 2) {
		dy++;
	}
	else {
		dx--;
	}
	snake[0].x = (dx % sw + sw) % sw;
	snake[0].y = (dy % sh + sh) % sh;
	for (let i = 1; i < snake.length; i++) {
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
			newFood();
			newSnake();
		}
	}
	dirChanged = false;
}

function keyDown(e) {
	if(dirChanged) return;
	let newDir = -1;
	switch(e.keyCode) {
		case 87:
			newDir = 0;
			break;
		case 68:
			newDir = 1;
			break;
		case 83:
			newDir = 2;
			break;
		case 65:
			newDir = 3;
			break;
	}
  if(newDir == -1) return;
	if(((dir + 2) % 4) != newDir) {
		dir = newDir;
		dirChanged = true;
	}
}

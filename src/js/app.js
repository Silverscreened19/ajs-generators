import Team from './team';
import Character from './character';

const player1 = new Character('Jade', 'Bowman', 100, 1, 40, 30);
const player2 = new Character('Lucy', 'Magician', 100, 2, 30, 40);
const player3 = new Character('Nick', 'Daemon', 100, 1, 50, 40);
const team = new Team();
team.addAll(player1, player2, player3);

const generator = team[Symbol.iterator]();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

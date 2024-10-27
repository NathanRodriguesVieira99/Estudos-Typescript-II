

// Type ARRAY

let numbers: number[];

numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6)
console.log(`My numbers: ${numbers}`);

let movies: Array<string>; // outra maneira de declarar 

movies = ['Batman', 'Joker']
console.log(movies);

movies.push('Aquaman')
console.log(`My Movies: ${movies}`);


// ARRAY com mais de um tipo

let musics: Array<string | number>

musics = ['O PANA!', 666, 'Escape from BABYLOM'];
console.log(musics);

musics.push('Sold soul to satan waiting in line at the mall');
console.log(musics);


let games: (number | string)[]; // outra maneira de declarar

games = ['GTA', 'Elden Ring', 6];
console.log(games);

games.push('For Honor');
console.log(games);


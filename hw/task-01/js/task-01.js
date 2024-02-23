// Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
// який виводить на екран список фільмів у вибраному жанрі.


const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],
  
    // Метод, який виводить список фільмів в заданому жанрі
    listMoviesByGenre: function (genre) {

        // for (const everyGenre in this) {
        //     if (genre === everyGenre) {
        //         return this[genre];
        //     } else {
        //         return 'Фільмів з таким жанром не знайдено';
        //     }
            
        // }

        const genreExists = genre in this;
        if (genreExists) {
            return this[genre]
        } else {
            return 'Фільмів з таким жанром не знайдено'
        }

    },
};



console.log(movies.listMoviesByGenre('action'));

console.log(movies.listMoviesByGenre('comedy'));

console.log(movies.listMoviesByGenre('sci-fi'));

// Чекаю фідбек бо цікаво чи можна зробити код чистішим, не беручи тернарника до уваги


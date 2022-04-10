const cors = require('cors');
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 3300

const jsonParser = bodyParser.json()

const sampleMovies = [

    {
        Id: 1,
        Name: "Shrek",
        ImageCard: "https://via.placeholder.com/250x140",
        ImageCover: "https://firebasestorage.googleapis.com/v0/b/watch-it-55b11.appspot.com/o/shrek_cover.jpg?alt=media&token=7400db87-963e-4011-b2bc-12c4236b060a",
        ProductionYear: "2000",
        Actors: "Lorem ipsum, dolor sit amet, consectetur, adipiscing elit",
        VOD: "Netflix, HBO, Amazon",
        LongDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat sem. Suspendisse potenti. Suspendisse sed leo sit amet orci efficitur cursus. Sed vel aliquet tortor, ac pretium sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac laoreet ante. Fusce dictum non elit in ultrices. In id dapibus purus, at bibendum massa. Proin egestas sem et diam sodales feugiat. Integer ligula turpis, laoreet at justo vel, gravida eleifend ex. Duis sodales ut mi vitae luctus. Etiam neque neque, consequat vitae eros id, blandit auctor arcu. Mauris lacinia velit sit amet tincidunt mattis.",
        ShortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        Id: 2,
        Name: "Pan Tadeusz",
        ImageCard: "https://via.placeholder.com/250x140",
        ImageCover: "https://via.placeholder.com/360x540",
        ProductionYear: "2002",
        Actors: "Lorem ipsum, dolor sit amet, consectetur, adipiscing elit",
        VOD: "Netflix, HBO",
        LongDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat sem. Suspendisse potenti. Suspendisse sed leo sit amet orci efficitur cursus. Sed vel aliquet tortor, ac pretium sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac laoreet ante. Fusce dictum non elit in ultrices. In id dapibus purus, at bibendum massa. Proin egestas sem et diam sodales feugiat. Integer ligula turpis, laoreet at justo vel, gravida eleifend ex. Duis sodales ut mi vitae luctus. Etiam neque neque, consequat vitae eros id, blandit auctor arcu. Mauris lacinia velit sit amet tincidunt mattis.",
        ShortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        Id: 3,
        Name: "Avengers",
        ImageCard: "https://via.placeholder.com/250x140",
        ImageCover: "https://via.placeholder.com/360x540",
        ProductionYear: "2003",
        Actors: "Lorem ipsum, dolor sit amet, consectetur, adipiscing elit",
        VOD: "HBO, Amazon",
        LongDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat sem. Suspendisse potenti. Suspendisse sed leo sit amet orci efficitur cursus. Sed vel aliquet tortor, ac pretium sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac laoreet ante. Fusce dictum non elit in ultrices. In id dapibus purus, at bibendum massa. Proin egestas sem et diam sodales feugiat. Integer ligula turpis, laoreet at justo vel, gravida eleifend ex. Duis sodales ut mi vitae luctus. Etiam neque neque, consequat vitae eros id, blandit auctor arcu. Mauris lacinia velit sit amet tincidunt mattis.",
        ShortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

app.use(cors())

app.get('/api/movies/all', async (req, res) => {
    res.send(sampleMovies);
})

app.get('/api/movies/:movieId', async (req, res) => {
    const movie = sampleMovies.filter(x => x.Id == req.params.movieId);

    if (movie.length > 0) {
        res.send(movie[0]);
    }
    else {
        res.sendStatus(404);
    }
})

app.post('/api/movies/add', jsonParser, async (req, res) => {
    sampleMovies.push(req.body);

    res.send(200);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


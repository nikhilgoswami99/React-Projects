import styles from './Components.module.css'
import Card from "../card/Card"
const Component =() =>{
  
const data = [
    {
      "id": 1,
      "title": "The Dark Horizon",
      "genre": ["Action", "Thriller"],
      "release_date": "2024-11-15",
      "rating": 8.2,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.e0bJYb49xHGpKNzazl-75AHaLH&pid=Api&P=0&h=180",
      "description": "In a dystopian future, a group of rebels fights to uncover the truth behind the mysterious disappearance of the world's most powerful leader.",
      "cast": ["John Doe", "Jane Smith", "Carlos Ray"],
      "director": "Samuel L. Johnson"
    },
    {
      "id": 2,
      "title": "Future Rebels",
      "genre": ["Action", "Sci-Fi"],
      "release_date": "2023-12-01",
      "rating": 7.8,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.pV3VBmxyDDAVaerE8IIMnwHaK9&pid=Api&P=0&h=180",
      "description": "A group of young warriors must fight to save the last remaining city on Earth.",
      "cast": ["Emily Green", "Johnathan Black", "Sophia Lane"],
      "director": "Rachel Adams"
    },
    {
      "id": 3,
      "title": "Silent Waters",
      "genre": ["Drama", "Romance"],
      "release_date": "2023-08-10",
      "rating": 7.5,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.AT6iD1ZVXcf9_e7o6Rb4JgHaK-&pid=Api&P=0&h=180",
      "description": "A passionate love story unfolds between two individuals with dark pasts, set in a remote coastal village.",
      "cast": ["David Blue", "Grace Moon", "Lily Star"],
      "director": "Aaron Walker"
    },
    {
      "id": 4,
      "title": "The Last Revolution",
      "genre": ["Thriller", "Adventure"],
      "release_date": "2024-05-22",
      "rating": 8.0,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.m0WHztjn01Y2PyeUMF9mxwHaK2&pid=Api&P=0&h=180",
      "description": "An undercover operative must infiltrate a powerful political movement threatening global stability.",
      "cast": ["Alex Green", "John Reeves", "Maya Keller"],
      "director": "Sophia Lee"
    },
    {
      "id": 5,
      "title": "Code of Silence",
      "genre": ["Action", "Crime"],
      "release_date": "2024-03-18",
      "rating": 7.9,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.UAAYSmW86AlGe_XsSuf7xAHaJQ&pid=Api&P=0&h=180",
      "description": "A former detective is forced to confront his past when a new criminal mastermind rises in his city.",
      "cast": ["Mark Strong", "Jane Rivers", "Tom Hardy"],
      "director": "James Ford"
    },
    {
      "id": 6,
      "title": "The Eternal Flame",
      "genre": ["Fantasy", "Adventure"],
      "release_date": "2024-06-25",
      "rating": 8.3,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.ENVHHrv5oY9Fk-7v14YqlAHaLE&pid=Api&P=0&h=180",
      "description": "A young hero embarks on a perilous journey to retrieve a mystical artifact that could change the fate of the world.",
      "cast": ["Alicia Perry", "Chris Knight", "Dylan Fox"],
      "director": "Nancy Hall"
    },
    {
      "id": 7,
      "title": "Crimson Dawn",
      "genre": ["Horror", "Mystery"],
      "release_date": "2024-02-02",
      "rating": 7.3,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.EFkbfFdSlEcIVP7PZHFdxgHaK-&pid=Api&P=0&h=180",
      "description": "A detective investigates a string of mysterious deaths tied to an ancient curse.",
      "cast": ["Samuel Brooks", "Victoria Hill", "Carlos Woods"],
      "director": "Martin Green"
    },
    {
      "id": 8,
      "title": "Beyond the Void",
      "genre": ["Sci-Fi", "Adventure"],
      "release_date": "2024-07-30",
      "rating": 8.5,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.z-BvaMHwT-e4eDGIU910HwHaLH&pid=Api&P=0&h=180",
      "description": "A space exploration team is sent to a distant galaxy where they uncover the secrets of an ancient alien civilization.",
      "cast": ["Jake Barnes", "Lily Fox", "Isaac Storm"],
      "director": "David M. King"
    },
    {
      "id": 9,
      "title": "The Whispering Shadows",
      "genre": ["Horror", "Mystery"],
      "release_date": "2023-10-10",
      "rating": 6.9,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.tPk8LpWtZEXGXSoIDtEM9AHaLv&pid=Api&P=0&h=180",
      "description": "A family moves into an old mansion with a dark history, only to discover it's haunted by vengeful spirits.",
      "cast": ["Rachel White", "Chris Evans", "Margaret Wills"],
      "director": "Eliot Carter"
    },
    {
      "id": 10,
      "title": "Chasing the Storm",
      "genre": ["Action", "Adventure"],
      "release_date": "2023-11-20",
      "rating": 7.6,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.BcWIl8NLWQSbUzrX-tAiXQHaKz&pid=Api&P=0&h=180",
      "description": "A storm chaser and his team race against time to track the most dangerous storm ever recorded.",
      "cast": ["Tom Cruise", "Jake Johnson", "Megan Fox"],
      "director": "Emily Davis"
    },
    {
      "id": 11,
      "title": "Moonlit Dreams",
      "genre": ["Drama", "Romance"],
      "release_date": "2024-09-13",
      "rating": 7.8,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.td2uEuBRV1zv9cuqwkYA9gHaK9&pid=Api&P=0&h=180",
      "description": "Two strangers meet under the moonlight and form an unexpected bond that will change their lives forever.",
      "cast": ["Sam Brown", "Olivia Stone", "Daniel Craig"],
      "director": "Lena Turner"
    },
    {
      "id": 12,
      "title": "Echoes of the Past",
      "genre": ["Mystery", "Thriller"],
      "release_date": "2024-01-01",
      "rating": 8.0,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.iklRyrJeTN6NO_tUxzkuEgHaKo&pid=Api&P=0&h=180",
      "description": "A detective revisits an unsolved case from his past, only to uncover disturbing secrets.",
      "cast": ["Robert Redford", "Gina Davis", "Keith Harris"],
      "director": "Timothy Foster"
    },
    {
      "id": 13,
      "title": "The Serpent's Curse",
      "genre": ["Action", "Adventure"],
      "release_date": "2023-05-25",
      "rating": 8.4,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.A9K9T6GokBz258alUiTMbQHaLH&pid=Api&P=0&h=180",
      "description": "An archaeologist embarks on a dangerous journey to uncover the truth behind an ancient curse.",
      "cast": ["Harrison Ford", "Rachel Green", "Mark Wahlberg"],
      "director": "Sarah Collins"
    },
    {
      "id": 14,
      "title": "Shadow of the Moon",
      "genre": ["Sci-Fi", "Thriller"],
      "release_date": "2024-04-10",
      "rating": 7.5,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.tG0wXzivs16w5rnzXdmieAHaK_&pid=Api&P=0&h=180",
      "description": "In a future where Earth is dying, a space crew is sent to the moon to uncover a mysterious signal.",
      "cast": ["Chris Hemsworth", "Scarlett Johansson", "Idris Elba"],
      "director": "Victor Black"
    },
    {
      "id": 15,
      "title": "The Silent Vigil",
      "genre": ["Drama", "Mystery"],
      "release_date": "2024-12-15",
      "rating": 7.2,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.srbcmf5uQ3jx8eTazOk2zAHaKu&pid=Api&P=0&h=180",
      "description": "A small town holds a dark secret that a young woman is determined to uncover, despite the risks.",
      "cast": ["Julia Roberts", "Matthew McConaughey", "Emma Stone"],
      "director": "Samuel West"
    },
    {
      "id": 16,
      "title": "Rogue Galaxy",
      "genre": ["Sci-Fi", "Action"],
      "release_date": "2024-05-30",
      "rating": 8.1,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.aV3oiY_dd2UW5zUCQkVxAwHaLA&pid=Api&P=0&h=180",
      "description": "A rogue spaceship captain and her crew must battle intergalactic enemies while uncovering a galaxy-altering conspiracy.",
      "cast": ["Zoe Saldana", "Chris Pine", "John Boyega"],
      "director": "Michael Bay"
    },
    {
      "id": 17,
      "title": "Into the Abyss",
      "genre": ["Drama", "Action"],
      "release_date": "2024-07-21",
      "rating": 7.4,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.Lg-GidzqvBt1lqRBSgyRDQHaLQ&pid=Api&P=0&h=180",
      "description": "A former soldier must return to the battlefield to rescue his kidnapped family from a notorious warlord.",
      "cast": ["Matt Damon", "Jennifer Lawrence", "Oscar Isaac"],
      "director": "Christopher Nolan"
    },
    {
      "id": 18,
      "title": "Legacy of the Fallen",
      "genre": ["Action", "Drama"],
      "release_date": "2023-09-18",
      "rating": 7.7,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.UIeivvnEe0cBXODoxDAitQHaL3&pid=Api&P=0&h=180",
      "description": "A warrior seeks redemption for the mistakes of his past while leading a resistance against an evil empire.",
      "cast": ["Brad Pitt", "Charlize Theron", "Michael Fassbender"],
      "director": "Ridley Scott"
    },
    {
      "id": 19,
      "title": "Phoenix Rising",
      "genre": ["Fantasy", "Adventure"],
      "release_date": "2023-06-30",
      "rating": 8.0,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.RYkmZc52fmtPsqc8-jZXCQHaLH&pid=Api&P=0&h=180",
      "description": "In a world where magic reigns, a group of heroes must prevent an ancient evil from returning to power.",
      "cast": ["Emma Watson", "Henry Cavill", "Idris Elba"],
      "director": "Patty Jenkins"
    },
    {
      "id": 20,
      "title": "City of Ghosts",
      "genre": ["Horror", "Mystery"],
      "release_date": "2024-08-05",
      "rating": 7.0,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.Bqsv2cUZPL6mqgGLIsVi1gHaLH&pid=Api&P=0&h=180",
      "description": "A journalist investigates a series of strange disappearances in a city haunted by dark secrets.",
      "cast": ["Jessica Chastain", "James McAvoy", "Tom Hiddleston"],
      "director": "Guillermo del Toro"
    },
    {
      "id": 21,
      "title": "The Outlaw",
      "genre": ["Western", "Action"],
      "release_date": "2023-10-25",
      "rating": 6.8,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.EBOSZvxhYib3FMu8HWrjSAHaNK&pid=Api&P=0&h=180",
      "description": "In the wild west, a lawman must track down a ruthless outlaw who has escaped justice for years.",
      "cast": ["Clint Eastwood", "Matthew McConaughey", "Morgan Freeman"],
      "director": "Quentin Tarantino"
    },
    {
      "id": 22,
      "title": "The Divide",
      "genre": ["Sci-Fi", "Thriller"],
      "release_date": "2024-11-05",
      "rating": 7.9,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.Gg2xj5U52L3mp19Jbu1QFAHaKL&pid=Api&P=0&h=180",
      "description": "A global disaster leads to a group of survivors struggling to survive in a world divided by chaos.",
      "cast": ["Keanu Reeves", "Anne Hathaway", "Tom Hardy"],
      "director": "Denis Villeneuve"
    },
    {
      "id": 23,
      "title": "The Heist",
      "genre": ["Crime", "Action"],
      "release_date": "2024-03-15",
      "rating": 8.0,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.Lg-GidzqvBt1lqRBSgyRDQHaLQ&pid=Api&P=0&h=180",
      "description": "A group of skilled criminals plan the biggest heist of their careers, but things go awry when betrayal strikes.",
      "cast": ["Ryan Reynolds", "Sandra Bullock", "Jason Statham"],
      "director": "Guy Ritchie"
    },
    {
      "id": 24,
      "title": "Blood Ties",
      "genre": ["Drama", "Crime"],
      "release_date": "2023-12-05",
      "rating": 7.3,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.LoUGNFpdIDqxA83bYGG9pQHaK8&pid=Api&P=0&h=180",
      "description": "A family torn apart by crime must confront their past and decide whether to protect each other or go separate ways.",
      "cast": ["Daniel Day-Lewis", "Nicole Kidman", "Mark Ruffalo"],
      "director": "Martin Scorsese"
    },
    {
      "id": 25,
      "title": "Under the Stars",
      "genre": ["Romance", "Drama"],
      "release_date": "2024-01-12",
      "rating": 7.6,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.6SdPEvcgbGzTLpjAhzbKnAHaLH&pid=Api&P=0&h=180",
      "description": "Two star-crossed lovers meet under extraordinary circumstances and fight to be together against all odds.",
      "cast": ["Blake Lively", "Ryan Gosling", "Zendaya"],
      "director": "Nora Ephron"
    },
    {
      "id": 26,
      "title": "The Phantom's Mask",
      "genre": ["Mystery", "Crime"],
      "release_date": "2024-04-18",
      "rating": 7.8,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.mSt72svro5vNfkBFwI25yQHaK9&pid=Api&P=0&h=180",
      "description": "A private investigator searches for a missing woman who left behind a strange mask with mysterious powers.",
      "cast": ["Jake Gyllenhaal", "Emma Stone", "Robert Downey Jr."],
      "director": "David Fincher"
    },
    {
      "id": 27,
      "title": "Dark Matter",
      "genre": ["Sci-Fi", "Thriller"],
      "release_date": "2024-02-20",
      "rating": 8.3,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP._sWo_nE_B0t6z85C6De2twAAAA&pid=Api&P=0&h=180",
      "description": "In a world where dark matter holds the key to time travel, a scientist races against time to prevent a global disaster.",
      "cast": ["Benedict Cumberbatch", "Cate Blanchett", "Chris Hemsworth"],
      "director": "Christopher Nolan"
    },
    {
      "id": 28,
      "title": "Starlight Chronicles",
      "genre": ["Fantasy", "Adventure"],
      "release_date": "2024-06-12",
      "rating": 7.9,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.bEEDdOR5AihDTTbDcBSO2QHaLQ&pid=Api&P=0&h=180",
      "description": "In a world where stars have magical powers, a group of unlikely heroes set out to protect the galaxy from dark forces.",
      "cast": ["Shailene Woodley", "Tom Holland", "Finn Wolfhard"],
      "director": "James Gunn"
    },
    {
      "id": 29,
      "title": "The Path Less Taken",
      "genre": ["Drama", "Romance"],
      "release_date": "2024-03-03",
      "rating": 8.1,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.XXSxwZlW3lAHKOwsrAEjZQAAAA&pid=Api&P=0&h=180",
      "description": "Two individuals from different walks of life are brought together by fate, forcing them to choose between love and their dreams.",
      "cast": ["Ryan Reynolds", "Emma Stone", "Zoe Kravitz"],
      "director": "Richard Linklater"
    },
    {
      "id": 30,
      "title": "The Betrayal",
      "genre": ["Thriller", "Action"],
      "release_date": "2024-09-10",
      "rating": 7.8,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.TEf5xtcbzPVeOF7IURPvzQHaLu&pid=Api&P=0&h=180",
      "description": "A trusted agent must uncover the mastermind behind a high-profile betrayal that could destroy everything.",
      "cast": ["Dwayne Johnson", "Chris Hemsworth", "Tom Cruise"],
      "director": "Michael Bay"
    },
    {
      "id": 31,
      "title": "Wings of Freedom",
      "genre": ["Action", "Drama"],
      "release_date": "2024-07-15",
      "rating": 8.2,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.E2EPleUy3g_c_Zm59bHlFQHaK-&pid=Api&P=0&h=180",
      "description": "A former fighter pilot is called back into action to protect his country from a new form of aerial warfare.",
      "cast": ["Chris Pine", "Angelina Jolie", "Hugh Jackman"],
      "director": "Ridley Scott"
    },
    {
      "id": 32,
      "title": "The Invisible Enemy",
      "genre": ["Sci-Fi", "Thriller"],
      "release_date": "2023-10-15",
      "rating": 7.6,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.D2TaR1LsTyQ9Y8b9nE8v-AHaKo&pid=Api&P=0&h=180",
      "description": "A scientist discovers an invisible alien invasion and must warn humanity before it's too late.",
      "cast": ["Scarlett Johansson", "Oscar Isaac", "Ryan Gosling"],
      "director": "J.J. Abrams"
    },
    {
      "id": 33,
      "title": "The Last Chance",
      "genre": ["Drama", "Crime"],
      "release_date": "2023-11-30",
      "rating": 7.9,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.mOTq_oet0IJ76ybHQa8gmgHaK-&pid=Api&P=0&h=180",
      "description": "A hardened criminal is given one final chance to redeem himself, but must face his troubled past to do so.",
      "cast": ["Brad Pitt", "Johnny Depp", "Meryl Streep"],
      "director": "David Fincher"
    },
    {
      "id": 34,
      "title": "Time Travelers",
      "genre": ["Sci-Fi", "Adventure"],
      "release_date": "2024-08-15",
      "rating": 8.0,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.4tuUplnbPCyn6VwzZagkQgHaLR&pid=Api&P=0&h=180",
      "description": "A group of time travelers must race through different eras to stop an impending disaster in the future.",
      "cast": ["Keanu Reeves", "Emma Stone", "Morgan Freeman"],
      "director": "Christopher Nolan"
    },
    {
      "id": 35,
      "title": "Into the Fire",
      "genre": ["Action", "Thriller"],
      "release_date": "2024-07-01",
      "rating": 7.4,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.pUUK7_acsjXp8wvLzRHA8gHaKL&pid=Api&P=0&h=180",
      "description": "A firefighter must fight through the chaos of a raging wildfire while uncovering a deadly conspiracy.",
      "cast": ["Tom Hardy", "Charlize Theron", "Idris Elba"],
      "director": "Michael Bay"
    },
    {
      "id": 36,
      "title": "End of Days",
      "genre": ["Action", "Sci-Fi"],
      "release_date": "2024-06-10",
      "rating": 7.8,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.ds6e7HLnTMtTki6SKpIJJQHaJI&pid=Api&P=0&h=180",
      "description": "The world faces a final battle between humans and a race of alien invaders threatening to end humanity.",
      "cast": ["Will Smith", "Charlize Theron", "Vin Diesel"],
      "director": "Roland Emmerich"
    },
    {
      "id": 37,
      "title": "The Hidden Truth",
      "genre": ["Mystery", "Thriller"],
      "release_date": "2023-12-02",
      "rating": 8.1,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.MPT35vJeXq4vWHvGzPvTXgHaKe&pid=Api&P=0&h=180",
      "description": "A journalist uncovers a dark secret within a powerful corporation and must decide whether to expose the truth or protect her own safety.",
      "cast": ["Nicole Kidman", "Tom Hanks", "Meryl Streep"],
      "director": "Steven Spielberg"
    },
    {
      "id": 38,
      "title": "Skyward Bound",
      "genre": ["Sci-Fi", "Adventure"],
      "release_date": "2024-05-14",
      "rating": 8.2,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.RGW9XPowoJ7IJsatDA4AXQHaLH&pid=Api&P=0&h=180",
      "description": "A group of astronauts must navigate uncharted space to find a new home for humanity before Earth becomes uninhabitable.",
      "cast": ["Chris Hemsworth", "Zoe Saldana", "Ryan Reynolds"],
      "director": "James Cameron"
    },
    {
      "id": 39,
      "title": "The Phoenix Code",
      "genre": ["Sci-Fi", "Action"],
      "release_date": "2024-01-25",
      "rating": 7.7,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.7Q4fkTT0zkN_LmFY1-MyuwHaKm&pid=Api&P=0&h=180",
      "description": "A brilliant scientist uncovers an ancient code that unlocks the secrets to humanity's future.",
      "cast": ["Robert Downey Jr.", "Cate Blanchett", "Brad Pitt"],
      "director": "Joss Whedon"
    },
    {
      "id": 40,
      "title": "Fallen Angels",
      "genre": ["Drama", "Crime"],
      "release_date": "2024-10-10",
      "rating": 7.9,
      "poster_url": "https://tse2.mm.bing.net/th?id=OIP.sypaSlOtQbDpyYY_z4YzdQHaLH&pid=Api&P=0&h=180",
      "description": "Two former criminals struggle to live normal lives but are forced back into their old ways when a dangerous enemy resurfaces.",
      "cast": ["Tom Hardy", "Jessica Chastain", "Javier Bardem"],
      "director": "Martin Scorsese"
    },
    {
      "id": 41,
      "title": "Undercover Ops",
      "genre": ["Action", "Thriller"],
      "release_date": "2024-04-30",
      "rating": 7.5,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.B4-abHrdBjrf7NkUZ3E0SAHaK0&pid=Api&P=0&h=180",
      "description": "An elite undercover agent must infiltrate a notorious criminal syndicate to prevent a global catastrophe.",
      "cast": ["Jason Statham", "Charlize Theron", "Will Smith"],
      "director": "James Cameron"
    },
    {
      "id": 42,
      "title": "Time's End",
      "genre": ["Sci-Fi", "Adventure"],
      "release_date": "2024-08-22",
      "rating": 7.8,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.41Ox0XRcJ5luoUG9PElm_AHaLH&pid=Api&P=0&h=180",
      "description": "A scientist discovers a way to manipulate time and must race to stop an event that could destroy the fabric of reality.",
      "cast": ["Chris Hemsworth", "Emma Watson", "Daniel Craig"],
      "director": "Christopher Nolan"
    },
    {
      "id": 43,
      "title": "The Price of Glory",
      "genre": ["Drama", "Action"],
      "release_date": "2023-11-25",
      "rating": 7.6,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.kFq18SaWd1nvC6CIJ5GrCAHaLK&pid=Api&P=0&h=180",
      "description": "A former boxer returns to the ring to fight for a cause far greater than personal glory.",
      "cast": ["Will Smith", "Tom Hanks", "Robert Downey Jr."],
      "director": "Clint Eastwood"
    },
    {
      "id": 44,
      "title": "Reign of Fire",
      "genre": ["Fantasy", "Action"],
      "release_date": "2024-09-05",
      "rating": 7.2,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.h7n8unR4ppKc_9rgbgr6uwHaKH&pid=Api&P=0&h=180",
      "description": "A young warrior rises to lead an army against a powerful dragon king threatening to destroy the world.",
      "cast": ["Angelina Jolie", "Christian Bale", "Tom Cruise"],
      "director": "Peter Jackson"
    },
    {
      "id": 45,
      "title": "Heart of Steel",
      "genre": ["Sci-Fi", "Action"],
      "release_date": "2023-09-01",
      "rating": 8.3,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.h7n8unR4ppKc_9rgbgr6uwHaKH&pid=Api&P=0&h=180",
      "description": "A robot designed for war gains consciousness and fights to protect the humans he once considered enemies.",
      "cast": ["Chris Hemsworth", "Zoe Saldana", "Ryan Reynolds"],
      "director": "Steven Spielberg"
    },
    {
      "id": 46,
      "title": "A New Dawn",
      "genre": ["Sci-Fi", "Adventure"],
      "release_date": "2024-07-19",
      "rating": 8.1,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.mLwvXm6PRdeBia2wZkH2hwHaJz&pid=Api&P=0&h=180",
      "description": "As the Earth faces its final days, a group of survivors set out on a daring mission to find a new home in space.",
      "cast": ["Ryan Gosling", "Emma Stone", "Jennifer Lawrence"],
      "director": "Ridley Scott"
    },
    {
      "id": 47,
      "title": "Edge of Tomorrow",
      "genre": ["Sci-Fi", "Action"],
      "release_date": "2024-12-01",
      "rating": 7.9,
      "poster_url": "https://tse3.mm.bing.net/th?id=OIP.OtfanJdZiU-392ah3YHhzQHaLH&pid=Api&P=0&h=180",
      "description": "A soldier caught in a time loop must repeat the same battle until he finds a way to defeat an alien force invading Earth.",
      "cast": ["Tom Cruise", "Emily Blunt", "Bill Paxton"],
      "director": "Doug Liman"
    },
    {
      "id": 48,
      "title": "The Black Knight",
      "genre": ["Action", "Adventure"],
      "release_date": "2024-10-05",
      "rating": 8.0,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.B4-abHrdBjrf7NkUZ3E0SAHaK0&pid=Api&P=0&h=180",
      "description": "A legendary warrior must confront a dark sorcerer to save a kingdom from destruction.",
      "cast": ["Christian Bale", "Anne Hathaway", "Michael Caine"],
      "director": "Christopher Nolan"
    },
    {
      "id": 49,
      "title": "Stolen Secrets",
      "genre": ["Mystery", "Thriller"],
      "release_date": "2024-01-08",
      "rating": 7.8,
      "poster_url": "https://tse4.mm.bing.net/th?id=OIP.BR_PL6IZt-DSXivpbJm8CAHaLJ&pid=Api&P=0&h=180",
      "description": "A master thief steals a valuable artifact, only to discover it holds a dangerous secret.",
      "cast": ["Matt Damon", "Harrison Ford", "Natalie Portman"],
      "director": "Steven Soderbergh"
    },
    {
      "id": 50,
      "title": "City of the Future",
      "genre": ["Sci-Fi", "Thriller"],
      "release_date": "2024-11-18",
      "rating": 8.3,
      "poster_url": "https://tse1.mm.bing.net/th?id=OIP.xe5vhZjF2rhI-Rwy9zXCYwAAAA&pid=Api&P=0&h=180",
      "description": "In a futuristic city where technology controls every aspect of life, a group of rebels fights to restore freedom.",
      "cast": ["Keanu Reeves", "Natalie Portman", "Chris Hemsworth"],
      "director": "James Cameron"
    }
  ]

    return <>
    {
      data.map((val ,index) =>{
        return <Card {...val} key={val.id} />
      })
     }
    
    </>
}

export default Component;
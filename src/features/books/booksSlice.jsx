import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "El Aleph",
        author: "Jorge Luis Borges",
        yearOfPublication: '1945',
        url: "https://www.argentina.gob.ar/sites/default/files/el_aleph_portada.png",
        description: "Borges' Aleph, that point in space-time where all worlds, all times and all places are synthesized, would have to be interpreted as the place of language; or perhaps said more precisely: the Aleph would be a kind of epiphany of language.",
        isbn: "9789875666481"
    },
    {
        id: "2",
        title: "Días de Odio",
        author: "Jorge Luis Borges",
        yearOfPublication: "1954",
        url: "https://www.argentina.gob.ar/sites/default/files/dias_de_odio_ltnilsson.png",
        description: "Este si lo leí, esta buenardo ",
        isbn: "Not Found"
    },
    {
        id: "3",
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        yearOfPublication: "1997",
        url: "https://cdn.joinnus.com/file_fil/estruendo/9788498387094.png",
        description: "Harry Potter and the Philosopher's Stone is the first volume in the now classic series of fantasy novels by British author J.K. Rowling.Harry Potter has been orphaned and lives in the house of his abominable uncles and the insufferable cousin Dudley. He feels very sad and lonely, until one fine day he receives a letter that will change his life forever. In it they inform him that he has been accepted as a student at the Hogwarts Boarding School of Witchcraft and Wizardry. From that moment on, Harry's luck takes a spectacular turn. In that very special school he will learn charms, fabulous tricks and defense tactics against evil arts. He will become the school champion of quidditch, a kind of air football played on broomsticks, and will make a handful of good friends... but also some fearsome enemies. But, above all, he will learn the secrets that will allow him to fulfill his destiny. Well, although he may not seem like it at first glance, Harry is not an ordinary boy. He is a true magician!",
        isbn: "9789878000107"
    },
    {
        id: "4",
        title: "Harry Potter y el prisionero de Azkaban",
        author: "J. K. Rowling",
        yearOfPublication: "1999",
        url: "https://cdnx.jumpseller.com/que-leo-temuco/image/10688195/resize/260/260?1607607124",
        description: "Harry Potter has been orphaned and lives in the house of his abominable uncles and the insufferable cousin Dudley. He feels very sad and lonely, until one fine day he receives a letter that will change his life forever. In it they inform him that he has been accepted as a student at the Hogwarts Boarding School of Witchcraft and Wizardry. From that moment on, Harry's luck takes a spectacular turn. In that very special school he will learn charms, fabulous tricks and defense tactics against evil arts. He will become the school champion of Quidditch, a kind of aerial football played on broomsticks, and will make a handful of good friends... but also some fearsome enemies. But, above all, he will learn the secrets that will allow him to fulfill his destiny. Well, although he may not seem like it at first glance, Harry is not an ordinary boy. He is a true magician!",
        isbn: "9789878000121"
    },
    {
        id: "5",
        title: "Borges y Yo",
        author: "Jorge Luis Borges",
        yearOfPublication: "2021",
        url: "https://www.gabrielalibros.cl/wp-content/uploads/2021/09/borges_y_yo.png.png",
        description: "Book 5 description",
        isbn: "9789500440783"
    },
    {
        id: "6",
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        url: "https://afrikanconsciousnessbookstore.net/wp-content/uploads/2020/05/1590251452-600x553.png",
        description: "Book 6 description",
        yearOfPublication: '1958'
    },
    {
        id: "7",
        title: "Fairy tales",
        author: "Hans Christian Andersen",
        url: "https://play-lh.googleusercontent.com/-Qj32mojOi1BAIIBoXQfWbvtyu_4PFajnylj5NN6LFn_8A2LEtcrBXWoW_DjOhkxUA",
        description: "Book 7 description",
        yearOfPublication: '1836'
    },
    {
        id: "8",
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        url: "https://paulinestore.com/media/catalog/product/cache/5fff546b2aade5977b4b5fdbe4491085/1/3/138489_png.png",
        description: "Book 8 description",
        yearOfPublication: '1315'
    },
    {
        id: "9",
        title: "The Stranger",
        author: "Albert Camus",
        url: "https://lh3.googleusercontent.com/4lAYH1Gwmzncrqlfu_79tnpseImDCs6lNK4xYvaPr9NUxGdIneq1XnoiQNQ1Ro74Fw=w300",
        description: "Book 9 description",
        yearOfPublication: '1942'
    },
    {
        id: "10",
        title: "Poems",
        author: "Paul Celan",
        url: "data:image/jpeg;base64,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",
        description: "Book 10 description",
        yearOfPublication: '1952'
    },
    {
        id: "11",
        title: "Don Quijote De La Mancha",
        author: "Miguel de Cervantes",
        url: "https://shop.vicensvives.com/7502-thickbox_default/23-don-quijote-de-la-mancha.jpg",
        description: "Book 11 description",
        yearOfPublication: '1610'
    },
    {
        id: "12",
        title: "The Canterbury Tales",
        author: "Geoffrey Chaucer",
        url: "https://hackettpublishing.com/media/catalog/product/cache/44464e523a29e1a1358cb0cc6dd8a3b6/c/h/chaucer_canterbury_165x260_1.png",
        description: "Book 12 description",
        yearOfPublication: '1450'
    },
    {
        id: "13",
        title: "Stories",
        author: "Anton Chekhov",
        url: "https://play-lh.googleusercontent.com/3sdxEIRERDyD7uJO-RMU6rpsz1wfazDgKbqqdJ-EGb5yzseVPwohPYGJDo_JDI44Svo=w600-h300-pc0xffffff-pd",
        description: "Book 13 description",
        yearOfPublication: '1886'
    },
    {
        id: "14",
        title: "Nostromo",
        author: "Joseph Conrad",
        url: "https://play-lh.googleusercontent.com/t5bwYV8jDVauC6unw40z2ETr3UzP0CO7I_00R_oUdBihpAZ27NIbrsRdgPtX_W5BCLA",
        description: "Book 14 description",
        yearOfPublication: '1904'
    },
    {
        id: "15",
        title: "Great Expectations",
        author: "Charles Dickens",
        url: "https://vhx.imgix.net/testymctester/assets/c4e2f0ec-3af5-4c4a-a55d-96a431a4d10d-f6ae8387.png?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280",
        description: "Book 15 description",
        yearOfPublication: '1861'
    },
    {
        id: "16",
        title: "Jacques the Fatalist",
        author: "Denis Diderot",
        url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386925793l/18212.jpg",
        description: "Book 16 description",
        yearOfPublication: '1796'
    },
    {
        id: "17",
        title: "Berlin Alexanderplatz",
        author: "Alfred DÖBLIN",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJ60Eb_kkboMF49chxZ3CwhQdpj-rR6EFxoQlkCE8DydpQQ_EaTIjk67z12bDK8h58wI&usqp=CAU",
        description: "Book 17 description",
        yearOfPublication: '1929'
    },
    {
        id: "18",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        url: "https://play-lh.googleusercontent.com/3FbOaFR9RPHQ7PNlMNkz6AhDqdxyI8ouMAwCySAipbB4yh8QCVu0Gls8Au-J-pWimdRW",
        description: "Book 18 description",
        yearOfPublication: '1866'
    },
    {
        id: "19",
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrqXA3P6YVD4uLbpSqP_r2uUEmrFMlI8-jxz5wz7D0fz0x3VQuoLchl6yHYgEouTS3A0&usqp=CAU",
        description: "Book 19 description",
        yearOfPublication: '1869'
    },
    {
        id: "20",
        title: "The Possessed",
        author: "Fyodor Dostoevsky",
        url: "https://play-lh.googleusercontent.com/rN42A6AqPeCMtmOBhnDn6UHrLYCDByF4uAWruHAJKggoDCtlNuk9L-_mkgGYNYhlqgu4",
        description: "Book 20 description",
        yearOfPublication: '1872'
    },
    {
        id: "21",
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        url: "https://play-lh.googleusercontent.com/jaUNqQI_HL7KEDJNbWyDa_3xD3_p0FKVHYHeAfMcmRj5j5z_mVL0alEYosnUhJ2x1w",
        description: "Book 21 description",
        yearOfPublication: '1880'
    },
    {
        id: "22",
        title: "Middlemarch",
        author: "George Eliot",
        url: "https://play-lh.googleusercontent.com/sbNNoRVcya1RvdUVx5JwxH1aOwQDQfow2Pz9bWJKJvijiIGgnh5oiguAKAtLSBk-F6-L",
        description: "Book 22 description",
        yearOfPublication: '1871'
    },
    {
        id: "23",
        title: "La pandilla de Asakusa",
        author: "Yasunari Kawabata",
        url: "https://images.cdn1.buscalibre.com/fit-in/180x180/18/ae/18aef17c09fae849586087a184d2567d.jpg",
        description: "Book 23 description",
        yearOfPublication: '1954'
    },
    {
        id: "24",
        title: "Zorba the Greek",
        author: "Nikos Kazantzakis",
        url: "https://images.cdn3.buscalibre.com/fit-in/360x360/22/26/2226b0b4ef936221211db596855a42d0.jpg",
        description: "Book 24 description",
        yearOfPublication: '1946'
    },
    {
        id: "25",
        title: "Sons and Lovers",
        author: "D. H. Lawrence",
        url: "https://books.google.com.sv/books/content?id=pnoOAQAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7127xpSeVm6yw9c27kHitOFP9L-VwBUEu2cvwg2rCjbbZIPdztcJCg-eizeISdB--Zf_iftZn12aDGd7xKm67S4y5CoZEBgU5bjkqh08nl5u1G_JACttFiBqNhRAtAH0W2HyS9w",
        description: "Book 25 description",
        yearOfPublication: '1913'
    },
    {
        id: "26",
        title: "Independent People",
        author: "Halldr Laxness",
        url: "https://http2.mlstatic.com/D_NQ_NP_690664-MLA48367009689_112021-O.jpg",
        description: "Book  26 description",
        yearOfPublication: '1934'
    },
    {
        id: "27",
        title: "Poems",
        author: "Giacomo Leopardi",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeAiz2Cfv4OQVIXM7jnxMGgkN3sEAH_ixeLid_sjmv7Nm0jtJh_rsiHGjVKT-NTMYj0s&usqp=CAU",
        description: "Book 27 description",
        yearOfPublication: '1818'
    }
    
]
export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, title, description, author, yearOfPublication, isbn, url } = action.payload;
            const foundBook = state.find((book) => book.id === id);
            if (foundBook) {
                foundBook.title = title;
                foundBook.author = author;
                foundBook.yearOfPublication = yearOfPublication;
                foundBook.isbn = isbn;
                foundBook.url = url;
                foundBook.description = description;
            }
        },
        deleteBook: (state, action) => {
            const foundBook = state.find((book) => book.id === action.payload);
            if (foundBook) {
                state.splice(state.indexOf(foundBook), 1);
            }
        },
        showBook: (state, action) => {
            const { id, title, description, author, yearOfPublication, isbn, url } = action.payload;
            const foundBook = state.find((book) => book.id === id);
            if (foundBook) {
                foundBook.title = title;
                foundBook.author = author;
                foundBook.yearOfPublication = yearOfPublication;
                foundBook.isbn = isbn;
                foundBook.url = url;
                foundBook.description = description;
            }
        },
    },
});

export const { addBook, editBook, deleteBook, showBook } = booksSlice.actions;
export default booksSlice.reducer;
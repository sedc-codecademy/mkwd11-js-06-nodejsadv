# Workshop 1

## Music app

We all listen to music, one genre or another, we are completely surrounded by it, and it's makes our lives much more
interesting and joyful.

The idea for this app is to create an app that will enable any client side app to get or add data about artists and
their songs.

- Search for artists by name
- Search for songs by title
- See all songs by artist
- See all songs by genre
- Add new song
- Add new artist
- See all songs by artists' album *
- Add new album *

* All marked with * are not required, but if you have time, you can add them.

Use past examples and best judgement to create models for previously mentioned entities. You are free to use any
structure, properties, add any validation as you see fit.

In order to build this use Node.js (with Express) & MongoDB (with Mongoose).

Models:

1. Songs
- album - song can be in one album
- artist - song can be by one artist

2. Artists
- songs - artist can have many songs

2. Albums
- songs - album can have many songs

After you are done:

- Add code to your own repo on GitHub
- Send the link to the repo to:
    - ivo.kostovski@gmail.com
    - tpelivanov@gmail.com

Please don't forget to:

- Use ENV variables and add the .env.example to your code so that we can start the app and connect (no need for values,
  we can use our own database)
- Add Postman collection to the code, so that we can try the endpoints

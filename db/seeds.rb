# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    book1 = Book.create(
        title: "Star Wars",
        author: "Claudia Gray",
        read: true,
        image: "https://starwarsblog.starwars.com/wp-content/uploads/2018/01/star-wars-1977-paperback-UK-1.jpg",
        likes: 3,
        description: "kjdsd;lkjf;;ja;dlkjf;asdhfpokhliuhkdliufghosajef;"
    )

    book2 = Book.create(
        title: "The Shining",
        author: "Stephen King",
        read: false,
        image: "https://images-na.ssl-images-amazon.com/images/I/51PNmcYcIjL._SX323_BO1,204,203,200_.jpg",
        likes: 100,
        description: "THis is a scary book!!! AHHHH!!!"
    )

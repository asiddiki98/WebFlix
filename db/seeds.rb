# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# movies
Video.destroy_all
Genre.destroy_all
GenreJoin.destroy_all

insidious = Video.create(title: "Insidious: The Last Key", description: "scary", director: "somoeone", year: "1998")
insidious.video.attach(io: File.open("/Users/azimsiddiki/Desktop/fullstacks_project/videos/Insidious_ The Last Key - Official Trailer (HD).mp4"), filename: "insidious.mp4")
insidious.photo.attach(io: File.open("/Users/azimsiddiki/Desktop/fullstacks_project/photos/insidious.jpg"), filename: "insidious.jpg")
chucky = Video.create(title: "Childs Play", description: "scary", director: "somoeone", year: "1998")
chucky.video.attach(io: File.open("/Users/azimsiddiki/Desktop/fullstacks_project/videos/Child's Play (1988) - Official Trailer (HD).mp4"), filename: "chucky.mp4")
chucky.photo.attach(io: File.open("/Users/azimsiddiki/Desktop/fullstacks_project/photos/chucky.jpg"), filename: "chucky.jpg")


# genres

horror = Genre.create(genre: "Horror")
comedy = Genre.create(genre: "Comedy")


#genre_joins
GenreJoin.create(video_id: insidious.id, genre_id: horror.id)
GenreJoin.create(video_id: chucky.id, genre_id: comedy.id)
GenreJoin.create(video_id: chucky.id, genre_id: horror.id)


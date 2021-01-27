require 'open-uri'

# movies
Video.destroy_all
Genre.destroy_all
GenreJoin.destroy_all

insidious = Video.create(title: "Insidious: The Last Key", description: "scary", director: "somoeone", year: "1998")
insidious.video.attach(io: URI.open('http://webflix-aa-seeds.s3.amazonaws.com/Insidious_+The+Last+Key+-+Official+Trailer+(HD).mp4'), filename: "insidious.mp4")
insidious.photo.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/insidious.jpg"), filename: "insidious.jpg")
chucky = Video.create(title: "Childs Play", description: "scary", director: "somoeone", year: "1998")
chucky.video.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/Child's+Play+(1988)+-+Official+Trailer+(HD).mp4"), filename: "chucky.mp4")
chucky.photo.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/insidious.jpg"), filename: "chucky.jpg")


# genres

horror = Genre.create(genre: "Horror")
comedy = Genre.create(genre: "Comedy")


#genre_joins
GenreJoin.create(video_id: insidious.id, genre_id: horror.id)
GenreJoin.create(video_id: chucky.id, genre_id: comedy.id)
GenreJoin.create(video_id: chucky.id, genre_id: horror.id)


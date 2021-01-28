# video template  => Video.create(title: "", description: "", director: "", year: "")
# genre template => Genre.create(genre: "")
# genrejoin template => {
#    GenreJoin.create(video_id: , genre_id: horror.id) 
#    GenreJoin.create(video_id: , genre_id: comedy.id)
#}


require 'open-uri'


Video.destroy_all
Genre.destroy_all
GenreJoin.destroy_all



# genres

horror = Genre.create(genre: "Horror")
comedy = Genre.create(genre: "Comedy")
action = Genre.create(genre: "action")
drama = Genre.create(genre: "drama")
fantasy = Genre.create(genre: "fantasy")
mystery = Genre.create(genre: "mystery")
romance = Genre.create(genre: "romance")
thriller = Genre.create(genre: "thriller")
scifi = Genre.create(genre: "Science-Fiction")

# movies

insidious = Video.create(title: "Insidious: The Last Key", description: "scary", director: "somoeone", year: "1998")
insidious.video.attach(io: URI.open('http://webflix-aa-seeds.s3.amazonaws.com/Insidious_+The+Last+Key+-+Official+Trailer+(HD).mp4'), filename: "insidious.mp4")
insidious.photo.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/insidious.jpg"), filename: "insidious.jpg")

GenreJoin.create(video_id: insidious.id, genre_id: horror.id)

chucky = Video.create(title: "Childs Play", description: "scary", director: "somoeone", year: "1998")
chucky.video.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/Child's+Play+(1988)+-+Official+Trailer+(HD).mp4"), filename: "chucky.mp4")
chucky.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/chucky.jpg"), filename: "chucky.jpg")

GenreJoin.create(video_id: chucky.id, genre_id: comedy.id)
GenreJoin.create(video_id: chucky.id, genre_id: horror.id)

shawshank = Video.create(title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", director: "Frank Darabont", year: "1994")
shawshank.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+The+Shawshank+Redemption++Trailer++1994++HQ_480p.mp4'), filename: "shawshank.mp4")
shawshank.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/shawshank.jpg"), filename: "shawshank.jpg")

GenreJoin.create(video_id: shawshank.id , genre_id: drama.id) 

us = Video.create(title: "Us", description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.", director: "Jordan Peele", year: "2019")
us.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Us+-+Official+Trailer+%5BHD%5D.mp4'), filename: "us.mp4")
us.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/us.jpg"), filename: "us.jpg")


GenreJoin.create(video_id: us.id , genre_id: horror.id) 
GenreJoin.create(video_id: us.id , genre_id: mystery.id) 
GenreJoin.create(video_id: us.id , genre_id: thriller.id) 


get_out = Video.create(title: "Get Out", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.", director: "Jordan Peele", year: "2017")
get_out.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Get+Out+Official+Trailer+1+(2017)+-+Daniel+Kaluuya+Movie.mp4'), filename: "get_out.mp4")
get_out.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/get-out.jpg"), filename: "get_out.jpg")

GenreJoin.create(video_id: get_out.id , genre_id: horror.id) 
GenreJoin.create(video_id: get_out.id , genre_id: thriller.id) 
GenreJoin.create(video_id: get_out.id , genre_id: mystery.id) 


a_quiet_place = Video.create(title: "A Quiet Place", description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.", director: "John Krasinski", year: "2018")
a_quiet_place.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/A+Quiet+Place+(2018)+-+Official+Trailer+-+Paramount+Pictures.mp4'), filename: "a_quiet_place.mp4")
a_quiet_place.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/quiet-place-header.jpg"), filename: "a_quiet_place.jpg")

GenreJoin.create(video_id: a_quiet_place.id , genre_id: horror.id)
GenreJoin.create(video_id: a_quiet_place.id , genre_id: scifi.id)
GenreJoin.create(video_id: a_quiet_place.id , genre_id: drama.id)


the_witch = Video.create(title: "The Witch", description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.", director: "Robert Eggers", year: "2015")
the_witch.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/The+Witch+_+Official+Trailer+HD+_+A24.mp4'), filename: "the_witch.mp4")
the_witch.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/the_witch.jpg"), filename: "the_witch.jpg")

GenreJoin.create(video_id: the_witch.id , genre_id: horror.id) 
GenreJoin.create(video_id: the_witch.id , genre_id: mystery.id) 
GenreJoin.create(video_id: the_witch.id , genre_id: drama.id)


scream = Video.create(title: "Scream", description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.", director: "Wes Craven", year: "1996")
scream.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Official+Trailer_+Scream+(1996).mp4'), filename: "scream.mp4")
scream.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/scream.jpg"), filename: "scream.jpg")

GenreJoin.create(video_id: scream.id , genre_id: horror.id) 
GenreJoin.create(video_id: scream.id , genre_id: mystery.id) 


alien = Video.create(title: "Alien", description: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", director: "Ridley Scott", year: "1979")
alien.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Alien+Trailer+HD+(Original+1979+Ridley+Scott+Film)+Sigourney+Weaver.mp4'), filename: "alien.mp4")
alien.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/alien.jpg"), filename: "alien.jpg")

GenreJoin.create(video_id: alien.id , genre_id: horror.id)
GenreJoin.create(video_id: alien.id , genre_id: scifi.id)



jaws = Video.create(title: "Jaws", description: "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.", director: "Steven Spielberg", year: "1975")
jaws.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Jaws+Official+Trailer+1++Richard+Dreyfuss+Steven+Spielberg+Movie+1975+HD_360p.mp4'), filename: "jaws.mp4")
jaws.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/jaws.jpg"), filename: "jaws.jpg")

GenreJoin.create(video_id: jaws.id , genre_id: horror.id)
GenreJoin.create(video_id: jaws.id , genre_id: scifi.id)


halloween = Video.create(title: "Halloween", description: "Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.", director: "David Gordon Green", year: "2018")
halloween.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Halloween+-+Official+Trailer+(HD).mp4'), filename: "halloween.mp4")
halloween.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/halloween.jpg"), filename: "halloween.jpg")

GenreJoin.create(video_id: halloween.id , genre_id: horror.id) 
GenreJoin.create(video_id: halloween.id , genre_id: thriller.id) 



airplane = Video.create(title: "Airplane!", description: "A man afraid to fly must ensure that a plane lands safely after the pilots become sick.", director: "Jim Abrahams, David Zucker", year: "1980")
airplane.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Airplane+1980+Movie+Trailer_360p.mp4'), filename: "airplane.mp4")
airplane.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/airplane!.jpg"), filename: "airplane.jpg")

GenreJoin.create(video_id: airplane.id, genre_id: comedy.id)

anchorman = Video.create(title: "Anchorman: The Legend of Ron Burgundy", description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor.", director: "Adam McKay", year: "2004")
anchorman.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Anchorman_+The+Legend+of+Ron+Burgundy+(2004)+Trailer+%231+_+Movieclips+Classic+Trailers.mp4'), filename: "anchorman.mp4")
anchorman.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/achorman.jpeg"), filename: "anchorman.jpg")

GenreJoin.create(video_id: anchorman.id, genre_id: comedy.id)


bridesmaids = Video.create(title: "Bridesmaids", description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.", director: "Paul Feig", year: "2011")
bridesmaids.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Bridesmaids+Official+Trailer+%231+-+(2011)+HD.mp4'), filename: "bridesmaids.mp4")
bridesmaids.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/bridesmaids.jpg"), filename: "bridesmaids.jpg")

GenreJoin.create(video_id: bridesmaids.id, genre_id: comedy.id)


clueless = Video.create(title: "Clueless", description: "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other.", director: "Amy Heckerling", year: "1995")
clueless.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Clueless+(1995)+Trailer+%231+_+Movieclips+Classic+Trailers.mp4'), filename: "clueless.mp4")
clueless.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/clueless.jpeg"), filename: "clueless.jpg")

GenreJoin.create(video_id: clueless.id, genre_id: comedy.id)
GenreJoin.create(video_id: clueless.id, genre_id: romance.id)
































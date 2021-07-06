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
crime = Genre.create(genre: "Crime")
action = Genre.create(genre: "Action")
drama = Genre.create(genre: "Drama")
fantasy = Genre.create(genre: "Fantasy")
mystery = Genre.create(genre: "Mystery")
romance = Genre.create(genre: "Romance")
thriller = Genre.create(genre: "Thriller")
scifi = Genre.create(genre: "Science-Fiction")

# movies

insidious = Video.create(title: "Insidious: The Last Key", description: "Parapsychologist Dr. Elise Rainier faces her most fearsome and personal haunting yet, as she is drawn back to her ghostly childhood home, where the terror began.", director: "Adam Robitel", year: "2018")
insidious.video.attach(io: URI.open('http://webflix-aa-seeds.s3.amazonaws.com/Insidious_+The+Last+Key+-+Official+Trailer+(HD).mp4'), filename: "insidious.mp4")
insidious.photo.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/insidious.jpg"), filename: "insidious.jpg")

GenreJoin.create(video_id: insidious.id, genre_id: horror.id)
GenreJoin.create(video_id: insidious.id, genre_id: thriller.id)
GenreJoin.create(video_id: insidious.id, genre_id: mystery.id)

chucky = Video.create(title: "Childs Play", description: "A single mother gives her son a much sought-after doll for his birthday, only to discover that it is possessed by the soul of a serial killer.", director: "Tom Holland", year: "1988")
chucky.video.attach(io: URI.open("http://webflix-aa-seeds.s3.amazonaws.com/Child's+Play+(1988)+-+Official+Trailer+(HD).mp4"), filename: "chucky.mp4")
chucky.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/chucky.jpg"), filename: "chucky.jpg")

GenreJoin.create(video_id: chucky.id, genre_id: comedy.id)
GenreJoin.create(video_id: chucky.id, genre_id: horror.id)
GenreJoin.create(video_id: chucky.id, genre_id: fantasy.id)

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
GenreJoin.create(video_id: a_quiet_place.id , genre_id: thriller.id)


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
GenreJoin.create(video_id: jaws.id, genre_id: thriller.id)


halloween = Video.create(title: "Halloween", description: "Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.", director: "David Gordon Green", year: "2018")
halloween.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/Halloween+-+Official+Trailer+(HD).mp4'), filename: "halloween.mp4")
halloween.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/halloween.jpg"), filename: "halloween.jpg")

GenreJoin.create(video_id: halloween.id , genre_id: horror.id) 
GenreJoin.create(video_id: halloween.id , genre_id: thriller.id) 



airplane = Video.create(title: "Airplane!", description: "A man afraid to fly must ensure that a plane lands safely after the pilots become sick.", director: "Jim Abrahams, David Zucker", year: "1980")
airplane.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Airplane+1980+Movie+Trailer_360p.mp4'), filename: "airplane.mp4")
airplane.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/airplane!.jpg"), filename: "airplane.jpg")

GenreJoin.create(video_id: airplane.id, genre_id: comedy.id)

anchorman = Video.create(title: "Anchorman: The Legend of Ron Burgundy", description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change", director: "Adam McKay", year: "2004")
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

parasite = Video.create(title: "Parasite", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", director:"Bong Joon Ho", year: "2019")
parasite.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Parasite++Official+Trailer+2019+Bong+Joon+Ho+Film.mp4'), filename: "parasite.mp4")
parasite.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/parasite.jpeg"), filename: "parasite.jpg")

GenreJoin.create(video_id: parasite.id, genre_id: comedy.id)
GenreJoin.create(video_id: parasite.id, genre_id: thriller.id)
GenreJoin.create(video_id: parasite.id, genre_id: drama.id)

irishman = Video.create(title: "The Irishman", description: "Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.", director:"Martin Scorsese", year: "2019")
irishman.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+The+Irishman++Official+Trailer++Netflix.mp4'), filename: "irishman.mp4")
irishman.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/irishman.jpeg"), filename: "irishman.jpg")

GenreJoin.create(video_id: irishman.id, genre_id: drama.id)
GenreJoin.create(video_id: irishman.id, genre_id: crime.id)

littlethings = Video.create(title: "The Little Things", description: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment.", director:"John Lee Hancock", year: "2021")
littlethings.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+THE+LITTLE+THINGS++Official+Trailer.mp4'), filename: "littlethings.mp4")
littlethings.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/littlethings.jpeg"), filename: "littlethings.jpg")

GenreJoin.create(video_id: littlethings.id, genre_id: drama.id)
GenreJoin.create(video_id: littlethings.id, genre_id: mystery.id)


hollywood = Video.create(title: "Once Upon a Time... In Hollywood", description: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.", director:"Quentin Tarantino", year: "2019")
hollywood.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+ONCE+UPON+A+TIME+IN+HOLLYWOOD++Official+Trailer+HD.mp4'), filename: "hollywood.mp4")
hollywood.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/hollywood.jpeg"), filename: "hollywood.jpg")

GenreJoin.create(video_id: hollywood.id, genre_id: drama.id)
GenreJoin.create(video_id: hollywood.id, genre_id: comedy.id)

eighthgrade = Video.create(title: "Eighth Grade", description: "An introverted teenage girl tries to survive the last week of her disastrous eighth grade year before leaving to start high school.", director:"Bo Burnham", year: "2018")
eighthgrade.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Eighth+Grade++Official+Trailer+HD++A24.mp4'), filename: "eighthgrade.mp4")
eighthgrade.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/eighthgrade.jpeg"), filename: "eighthgrade.jpg")

GenreJoin.create(video_id: eighthgrade.id, genre_id: drama.id)
GenreJoin.create(video_id: eighthgrade.id, genre_id: comedy.id)


knivesout = Video.create(title: "Knives Out", description: "A detective investigates the death of a patriarch of an eccentric, combative family.", director:"Rian Johnson", year: "2019")
knivesout.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Knives+Out+Trailer+1+2019++Movieclips+Trailers.mp4'), filename: "knivesout.mp4")
knivesout.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/knivesout.jpeg"), filename: "knivesout.jpg")

GenreJoin.create(video_id: knivesout.id, genre_id: thriller.id)
GenreJoin.create(video_id: knivesout.id, genre_id: comedy.id)
GenreJoin.create(video_id: knivesout.id, genre_id: crime.id)
GenreJoin.create(video_id: knivesout.id, genre_id: drama.id)


springbreakers = Video.create(title: "Spring Breakers", description: "Four college girls are arrested, only to be bailed out by a drug and arms dealer.", director:"Harmony Korine", year: "2012")
springbreakers.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Spring+Breakers++Official+Trailer+HD++A24.mp4'), filename: "springbreakers.mp4")
springbreakers.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/springbreakers.jpeg"), filename: "springbreakers.jpg")

GenreJoin.create(video_id: springbreakers.id, genre_id: thriller.id)
GenreJoin.create(video_id: springbreakers.id, genre_id: comedy.id)


thirteenhours = Video.create(title: "13 Hours", description: "During an attack on a U.S. compound in Libya, a security team struggles to make sense out of the chaos.", director:"Michael Bay", year: "2016")
thirteenhours.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+13+Hours+The+Secret+Soldiers+of+Benghazi+Official+Trailer+1+2016+Michael+Bay+Movie+HD.mp4'), filename: "thirteenhours.mp4")
thirteenhours.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/thirteenhours.jpeg"), filename: "thirteenhours.jpg")


GenreJoin.create(video_id: thirteenhours.id, genre_id: drama.id)
GenreJoin.create(video_id: thirteenhours.id, genre_id: thriller.id)

inside = Video.create(title: "Inside", description: "A new comedy special shot and performed by Bo Burnham, alone, over the course of the past year.", director:"Bo Burnham", year: "2021")
inside.video.attach(io: URI.open('https://webflix-aa-seeds.s3.amazonaws.com/yt1s.com+-+Welcome+to+the+Internet++Bo+Burnham+from+Inside++ALBUM+OUT+NOW.mp4'), filename: "inside.mp4")
inside.photo.attach(io: URI.open("https://webflix-aa-seeds.s3.amazonaws.com/inside.jpeg"), filename: "inside.jpg")


GenreJoin.create(video_id: inside.id, genre_id: drama.id)
GenreJoin.create(video_id: inside.id, genre_id: comedy.id)



























json.extract! video, :id, :title, :description, :director, :year
json.genres video.genres.map { |el| el.genre }
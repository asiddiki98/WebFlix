# == Schema Information
#
# Table name: genres
#
#  id          :bigint           not null, primary key
#  genre       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Genre < ApplicationRecord

    has_many :genre_joins,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :GenreJoin

    has_many :videos,
    through: :genre_joins,
    source: :video

end

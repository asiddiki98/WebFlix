# == Schema Information
#
# Table name: genre_joins
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GenreJoin < ApplicationRecord
    belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

    belongs_to :genre,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Genre
end

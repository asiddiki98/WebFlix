# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  director    :string           not null
#  year        :integer          not null
#  duration    :integer          not null
#  genre_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

    has_many :genre_joins,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :GenreJoin

    has_many :genres,
    through: :genre_joins,
    source: :genre 

    has_one_attached :video

    has_one_attached :photo

end

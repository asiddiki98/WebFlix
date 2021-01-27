class MakeChanges < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :genre_id
    remove_column :genres, :video_id
  end
end

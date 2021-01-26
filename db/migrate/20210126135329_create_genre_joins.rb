class CreateGenreJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_joins do |t|
      t.integer :video_id, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end

    add_index :genre_joins, :video_id
    add_index :genre_joins, :genre_id
  end
end

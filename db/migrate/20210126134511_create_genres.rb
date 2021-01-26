class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
      t.integer :video_id, null: false
      t.string :description
      t.timestamps
    end

    add_index :genres, :genre, unique: true
    add_index :genres, :video_id
  end
end

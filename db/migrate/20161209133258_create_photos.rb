class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id
      t.string :url
      t.datetime :created_at
      t.datetime :updated_at
    end
    add_index :photos, [:user_id, :created_at], name: "index_photos_on_user_id_and_created_at", using: :btree
  end
end

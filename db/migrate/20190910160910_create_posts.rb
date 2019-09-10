class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body, null: false 
      t.integer :author_id, null: false 
      t.datetime :created_at, null: false 
      t.datetime :updated_at, null: false 
      t.timestamps
    end

    add_index :posts, :author_id
  end
end

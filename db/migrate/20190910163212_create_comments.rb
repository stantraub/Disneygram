class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
      t.timestamps
    end

    add_index :comments, :author_id
  end
end

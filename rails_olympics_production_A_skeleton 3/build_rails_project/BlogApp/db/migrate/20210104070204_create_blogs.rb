class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.text :body
      t.integer :author_id, null: false, unique: true
      t.timestamps
    end
  end
end

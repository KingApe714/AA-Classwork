# User
#   'email' column
#     has been renamed to 'username' (FAILED - 1)
#   'bio' column
#     has been removed (FAILED - 2)

# Video
#   'name' column
#     has been renamed to 'title' (FAILED - 3)
#   'uploader_id' column
#     has had an index added (FAILED - 4)

class MakeChanges < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :email, :username
    remove_column :users, :bio

    rename_column :videos, :name, :title
    add_index :videos, :uploader_id
  end
end

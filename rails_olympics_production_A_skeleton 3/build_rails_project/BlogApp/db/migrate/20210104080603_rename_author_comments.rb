class RenameAuthorComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :auther_id, :author_id
  end
end

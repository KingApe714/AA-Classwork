class CreateChanges < ActiveRecord::Migration[5.2]
  def change
    create_table :changes do |t|
      add_column :users, :username, :string, null: false
      add_column :users, :password_digest, :string, null: false
      add_column :users, :session_token, :string, null: false
      add_column :goals, :user_id, :integer, null: false
      add_column :goals, :detail, :text
      add_column :goals, :name, :string, null: false
      add_index :users, :username
      add_index :users, :session_token
      add_index :goals, :name
    end
  end
end

class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :name
      t.string :email
      t.text :comments
      t.string :block_url
      t.timestamps null: false
    end
  end
end

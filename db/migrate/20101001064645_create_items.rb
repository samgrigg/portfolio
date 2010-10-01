class CreateItems < ActiveRecord::Migration
  def self.up
    create_table :items do |t|
      t.string :name
      t.string :thumb_url
      t.string :full_url
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :items
  end
end

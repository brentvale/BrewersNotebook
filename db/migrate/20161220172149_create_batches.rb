class CreateBatches < ActiveRecord::Migration
  def change
    create_table :batches do |t|
      t.string :name_of_beer, null: false
      t.string :type_of_brewing, null: false #extract, brew-in-bag, all-grain
      t.integer :gallons, null: false
      
      t.timestamps null: false
    end
  end
end

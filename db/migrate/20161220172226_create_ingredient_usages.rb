class CreateIngredientUsages < ActiveRecord::Migration
  def change
    create_table :ingredient_usages do |t|
      t.integer :ingredient_id, null: false
      t.integer :batch_id, null: false
      t.string :quantity, null: false
      t.string :time_of_addition, null: false #units can be days or minutes
      t.string :stage_of_brewing, null: false #steeping, boil, post-brew
      
      t.timestamps null: false
    end
    add_index :ingredient_usages, :ingredient_id
    add_index :ingredient_usages, :batch_id
  end
end

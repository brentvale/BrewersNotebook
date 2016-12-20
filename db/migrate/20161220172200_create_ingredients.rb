class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :ingredient_name, null: false
      t.string :type_of_ingredient, null: false, default: "" #grains, hops, other
      
      t.timestamps null: false
    end
  end
end

# == Schema Information
#
# Table name: ingredients
#
#  id                 :integer          not null, primary key
#  ingredient_name    :string           not null
#  type_of_ingredient :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Ingredient < ActiveRecord::Base
end

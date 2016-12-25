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

require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

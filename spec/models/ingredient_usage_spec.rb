# == Schema Information
#
# Table name: ingredient_usages
#
#  id               :integer          not null, primary key
#  ingredient_id    :integer          not null
#  batch_id         :integer          not null
#  quantity         :string           not null
#  time_of_addition :string           not null
#  stage_of_brewing :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

RSpec.describe IngredientUsage, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

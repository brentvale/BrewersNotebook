# == Schema Information
#
# Table name: batches
#
#  id              :integer          not null, primary key
#  name_of_beer    :string           not null
#  type_of_brewing :string           not null
#  gallons         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe Batch, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

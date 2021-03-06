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

class Batch < ActiveRecord::Base
  belongs_to :user
end

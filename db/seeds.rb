# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Batch.create(name_of_beer: "GumballHead - Batch 1", type_of_brewing: "extract", gallons: 10)
Batch.create(name_of_beer: "GumballHead - Batch 2", type_of_brewing: "extract", gallons: 5)
Batch.create(name_of_beer: "GumballHead - Batch 3", type_of_brewing: "extract", gallons: 4)
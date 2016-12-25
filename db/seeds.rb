# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.create( first_name: "brent", 
                    last_name: "vale", 
                    password: "password", 
                    email: "brentvale@gmail.com")
                    
user_two = User.create( first_name: "Jay", 
                    last_name: "Perryman", 
                    password: "password", 
                    email: "jeperryman80@gmail.com")
Batch.create( name_of_beer: "GumballHead - Batch 1", 
              type_of_brewing: "extract", 
              gallons: 10,
              user_id: user.id)
Batch.create( name_of_beer: "GumballHead - Batch 2", 
              type_of_brewing: "extract", 
              gallons: 5,
              user_id: user.id)
Batch.create( name_of_beer: "GumballHead - Batch 3", 
              type_of_brewing: "extract", 
              gallons: 4,
              user_id: user.id)
              
Batch.create( name_of_beer: "GumballHead - Batch 1", 
              type_of_brewing: "extract", 
              gallons: 5,
              user_id: user_two.id)
Batch.create( name_of_beer: "GumballHead - Batch 2", 
              type_of_brewing: "extract", 
              gallons: 5,
              user_id: user_two.id)
Batch.create( name_of_beer: "GumballHead - Batch 3", 
              type_of_brewing: "extract", 
              gallons: 5,
              user_id: user_two.id)
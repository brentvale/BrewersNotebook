source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.3'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'devise'

gem 'bootstrap-sass', '~> 3.3.6'

gem 'paperclip'
gem 'font-awesome-sass'

#awesome print for data formatting in the console
gem 'awesome_print', require: "ap"

group :development, :test do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'annotate'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'rspec-rails', '~> 3.4'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
 
end

group :development do 
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  gem "letter_opener"
  gem 'letter_opener_web', '~> 1.2.0'
  gem 'quiet_assets'
  #to be able to use rails panel
  gem 'meta_request'
  
end

group :production do
  gem 'newrelic_rpm'  
  gem 'rails_12factor' # error feedback
end


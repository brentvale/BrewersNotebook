Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do 
    resources :batches, only: [:index]
  end
  
  root to: "static_pages#home"
end

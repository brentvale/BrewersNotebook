Rails.application.routes.draw do
  namespace :api do 
    resources :batches, only: [:index]
  end
  
  root to: "static_pages#home"
end

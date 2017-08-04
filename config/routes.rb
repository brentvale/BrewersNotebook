Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do 
    resources :batches, only: [:index]
  end
  
  get '/terms_of_service', to: 'static_pages#terms_of_service'
  get '/payment_terms_of_service', to: 'static_pages#payment_terms_of_service'
  
  root to: "static_pages#home"
end

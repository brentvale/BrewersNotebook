Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do 
    resources :batches, only: [:index]
    resources :users, only: [:update, :show]
    get '/users/current_user', to: 'users#current_logged_in_user'
  end
  
  get '/terms_of_service', to: 'static_pages#terms_of_service'
  get '/payment_terms_of_service', to: 'static_pages#payment_terms_of_service'
  
  root to: "static_pages#home"
end

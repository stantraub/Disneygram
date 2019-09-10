Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

   namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show, :update] do
      resources :posts, only: [:index]
    end
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resources :likes, only: [:create, :index, :show, :destroy]
    resources :follows, only: [:create, :index, :show, :destroy]
    resource :session, only: [:create, :destroy]

  end

end

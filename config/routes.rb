Rails.application.routes.draw do
  resources :books
  delete '/destroy/:id', to: 'books#destroy'
end

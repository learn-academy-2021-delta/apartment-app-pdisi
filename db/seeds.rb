apartments = [
  {
    street: '1064 Rainbow Place',
    city: 'Kailua',
    state: 'HI',
    manager: 'Mele Kalikimaka',
    email: 'pokeisgood@aloha.com',
    price: '2000',
    bedrooms: 4,
    bathrooms: 2,
    pets: 'Maybe'
  },
  {
    street: '808 Haole Ave',
    city: 'Honolulu',
    state: 'HI',
    manager: 'Humuhumunukunukuapuaa',
    email: 'inotlate@whywork.com',
    price: '50000',
    bedrooms: 1,
    bathrooms: 1,
    pets: 'no pets for haole'
  }
]

first_user = User.first

apartments.each do |attribute|
  first_user.apartments.create attribute
end
class DropApartmentIndex < ActiveRecord::Migration[6.1]
  def change
    drop_table :apartment_indices
  end
end

class CreateApartmentIndices < ActiveRecord::Migration[6.1]
  def change
    create_table :apartment_indices do |t|
      t.string :state
      t.string :city
      t.string :price

      t.timestamps
    end
  end
end


exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {model: 'Toyota', vin: 'B474JHLEI9078', mileage: '12,000', make: 'yaris 2020', automatic: true},
        {model: 'Kia', vin: 'B47kJUELI0009', mileage: '5,000', make: 'K4 2018', automatic: true},
      ]);
    });
};

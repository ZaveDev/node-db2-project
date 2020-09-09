
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "F198746513746",
          "Make": "FJord",
          "Model": "Bull",
          "Mileage": 200000,
          "Transmission": "Electic Manual Transmission",
          "Title": "clean"
        },
        {
          "VIN": "E198746513746",
          "Make": "FJord",
          "Model": "Bull",
          "Mileage": 200000,
          "Transmission": "Full Animal",
          "Title": "Dirty"
        },
        {
          "VIN": "B198746513746",
          "Make": "Hundoo",
          "Model": "Truck",
          "Mileage": 789,
          "Transmission": "HunterMission",
          "Title": ""
        },
        {
          "VIN": "Z198746513746",
          "Make": "Tri",
          "Model": "bike",
          "Mileage": 0,
        },
      ]);
    });
};

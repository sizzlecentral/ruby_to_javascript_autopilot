
var cars = []
var num_days = 10;

var get_new_car = function () {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  };
};

var add_car = function (cars, new_car) {
  cars.push(new_car);
  return "Adding new car to fleet.  Fleet size is now " + cars.length;
};

var pick_up_passenger = function (car) {
  car["passengers"] += 1;
  car["gas"] -= 10;
  return "Picked up passenger.  Car now has " + car["passengers"] + " passengers.";
};

var get_destination = function (car) {
  if (car["city"] === 'Toronto') {
    return 'Mississauga';
  } else if (car["city"] === 'Mississauga') {
    return 'London';
  } else if (car["city"] === 'London') {
    return 'Toronto';
  }
};

var fill_up_gas = function (car) {
  var old_gas = car["gas"];
  car["gas"] = 100;
  return "Filled up to " + get_gas_display(car["gas"]) + " on gas from " + get_gas_display(old_gas);
};

var get_gas_display = function (gas_amount) {
  return gas_amount;
};

var drive = function (car, city_distance) {
  if (car["gas"] < city_distance) {
    return fill_up_gas(car);
  }
  car["city"] = get_destination(car);
  car["gas"] -= city_distance;
  return "Drove to " + car["city"] + ". Remaining gas: " + get_gas_display(car["gas"]);
};

var drop_off_passengers = function (car) {
  var previous_passengers = car["passengers"];
  car["passengers"] = 0;
  return "Dropped of " + previous_passengers + " passengers."
};

var act = function (car) {
  var distance_between_cities = 50;

  if (car["gas"] < 20) {
    return fill_up_gas(car);

  } else if (car["passengers"] < 3) {
    return pick_up_passenger(car);

  } else {
      if (car["gas"] < distance_between_cities) {
        return fill_up_gas(car);
      }
      var drove_to = drive(car, distance_between_cities);
      var passengers_dropped = drop_off_passengers(car);
      return drove_to + passengers_dropped;
    }
};

var command_fleet = function (cars) {
  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log("Car " + (i + 1) + ": " + act(car));
  }
  console.log("---");
};

var add_one_car_per_day = function (cars, num_days) {
  for (var i = 0; i < num_days; i++){
    new_car = get_new_car();
    console.log(add_car(cars, new_car))
    command_fleet(cars);
  }
};
add_one_car_per_day(cars, num_days);

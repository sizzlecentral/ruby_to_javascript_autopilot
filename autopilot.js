
var cars = []
var num_days = 10;

var new_car = {
  city: 'Toronto',
  passengers: 0,
  gas: 100,
};

var add_car = function (cars, new_car) {
  cars.push(new_car);
  console.log("Adding new car to fleet.  Fleet size is now " + cars.length);
};
add_car(cars, new_car);

var pick_up_passenger = function (car) {
};
pick_up_passenger(car);

var get_destination = function (car) {
};
get_destination(car);

var fill_up_gas = function (car) {
};
fill_up_gas(car);

var get_gas_display = function (gas_amount) {
};
get_gas_display(gas_amount);

var drive = function (car, city_distance) {
};
drive(car, city_distance);

var drop_off_passengers = function (car) {
};
drop_off_passengers(car);

var act = function (car) {
};
act(car);

var command_fleet = function (cars) {
  
};
command_fleet(cars);

var add_one_car_per_day = function (cars, num_days) {
  var i = 0;
  if (i < num_days) {
    console.log(add_car(cars, new_car))
    command_fleet(cars);
  }
};
add_one_car_per_day(cars, num_days);

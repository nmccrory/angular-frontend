var storeModule = angular.module('StoreApp', ['ngRoute']);

storeModule.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})

storeModule.factory('customerFactory', function(){
	var customers = [{name: 'Michael Choi', created_at: new Date()},{name:'Martin', created_at: new Date()}];

	var factory = {};
	factory.getCustomers = function(callback){
		callback(customers);
	}

	return factory;
})
storeModule.factory('orderFactory', function(){
	var orders = [];

	var factory = {};
	factory.getOrders = function(callback){
		callback(orders);
	}
	return factory;
})

storeModule.controller('customersController', function(customerFactory){
	var that = this;
	that.customers = [];

	customerFactory.getCustomers(function(data){
		that.customers = data;
	})
	that.addCustomer = function(){
		that.error = '';
		for(var customer in that.customers){
			if(that.customers[customer].name == that.newCustomer.name){
				that.error = 'Name already exists';
				return false;
			}
		}
		var customer = {name: that.newCustomer.name, created_at: new Date().toDateString()};
		that.customers.push(customer);

		that.newCustomer = {};
	}
	that.removeCustomer = function(customer){
		that.customers.splice(that.customers.indexOf(customer), 1);
	}

});

storeModule.controller('ordersController', function(orderFactory){
	var that = this;
	that.orders = [];
	that.products = ['Nike Flyknit Racer', 'Macbook Air', 'Coffee Beans', 'Xbox One'];

	orderFactory.getOrders(function(data){
		that.orders = data;
	})

	that.addOrder = function(){
		var order = {customer_name: that.newOrder.customer_name, product: that.newOrder.product, quantity: that.newOrder.quantity, placed_at: new Date().toDateString()}
		that.orders.push(order);

		that.newOrder = {};
	}

})

		

"use strict";angular.module("cldDemoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/customers",{templateUrl:"views/customers.html",controller:"CustomerCtrl",controllerAs:"customer"}).when("/products",{templateUrl:"views/products.html",controller:"ProductCtrl",controllerAs:"product"}).when("/orders",{templateUrl:"views/orders.html",controller:"OrderCtrl",controllerAs:"order"}).otherwise({redirectTo:"/customers"})}]),angular.module("cldDemoApp").controller("CustomerCtrl",["$scope","Customer",function(a,b){a.find=function(){b.query(function(b){a.customers=b,console.log(b)})}}]),angular.module("cldDemoApp").controller("ProductCtrl",["$scope","Product",function(a,b){a.find=function(){b.query(function(b){a.products=b,console.log(b)})}}]),angular.module("cldDemoApp").factory("Customer",["$resource","APIConf",function(a,b){return a(b.url+"/customers/:id",null,{update:{method:"PUT"}})}]),angular.module("cldDemoApp").factory("Product",["$resource","APIConf",function(a,b){return a(b.url+"/products/:id",null,{update:{method:"PUT"}})}]),angular.module("cldDemoApp").constant("APIConf",{url:"//52.28.113.158:8080/api"}),angular.module("cldDemoApp").controller("OrderCtrl",["$scope","Order","Customer","Product",function(a,b,c,d){a.addOrder=function(c){console.log(c);var d=new b;d.productId=c.product,d.customerId=c.customer,d.qty=c.qty,b.save(d,function(){b.query(function(b){a.orders=b})})},a.find=function(){c.query(function(b){a.customers=b}),d.query(function(b){a.products=b}),b.query(function(b){a.orders=b})}}]),angular.module("cldDemoApp").factory("Order",["$resource","APIConf",function(a,b){return a(b.url+"/orders/:id",null,{update:{method:"PUT"}})}]),angular.module("cldDemoApp").run(["$templateCache",function(a){a.put("views/customers.html",'<section ng-init="find()"> <h1>Customers</h1> <table class="table table-striped"> <tr> <th>Name</th> <th>City</th> </tr> <tr ng-repeat="c in customers"> <td>{{c.name}}</td> <td>{{c.city}}</td> </tr> </table> </section>'),a.put("views/orders.html",'<section ng-init="find()"> <h1>Orders</h1> <div class="row"> <div class="col-md-12"> <form name="orderForm" class="form-inline"> <div class="form-group"> <select class="form-control" name="customer" ng-model="order.customer"><option ng-repeat="c in customers" value="{{c.id}}">{{c.name}}</option></select> </div> <div class="form-group"> <select class="form-control" name="product" ng-model="order.product"><option ng-repeat="p in products" value="{{p.id}}">{{p.name}} - {{p.price | currency}}</option></select> </div> <div class="form-group"> <input type="number" name="qty" class="form-control" ng-model="order.qty" placeholder="0" min="1"> </div> <button type="submit" ng-click="addOrder(order)" class="btn btn-default">Order</button> </form> </div> </div> <div class="row"> <div class="col-md-12"> <table class="table table-striped"> <tr> <th>Date</th> <th>Client</th> <th>Product</th> <th>Quantity</th> <th>Price</th> </tr> <tr ng-repeat="o in orders"> <td>{{o.date}}</td> <td>{{o.customer}}</td> <td>{{o.product}}</td> <td>{{o.qty}}</td> <td>{{o.price * o.qty | currency}}</td> </tr> </table> </div> </div> </section>'),a.put("views/products.html",'<section ng-init="find()"> <h1>Products</h1> <table class="table table-striped"> <tr> <th>Name</th> <th>Price</th> </tr> <tr ng-repeat="p in products"> <td>{{p.name}}</td> <td>{{p.price | currency}}</td> </tr> </table> </section>')}]);
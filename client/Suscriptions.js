//Recipes suscriptions
Template.Recipes.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes')
	});
});
Template.Recipes.helpers({
	recipes: ()=>{
		return Recipes.find({});
	}

});
//Single Recipes suscriptions
Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe',id)
	});
});
Template.RecipeSingle.helpers({
	recipe: ()=>{
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}

});
//Menú suscriptions
Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes')
	});
});
Template.Menu.helpers({
	recipes: ()=>{
		return Recipes.find({inMenu: true});
	}

});
//Shopping List suscriptions
Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes')
	});
});
Template.ShoppingList.helpers({
	shoppingList: ()=>{
		return Recipes.find({inMenu: true});
	}

});
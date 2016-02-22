Meteor.publish('recipes', function(){
	return Recipes.find({
			autor: this.userId
	});
});

Meteor.publish('singleRecipe', function(id){
	check(id, String);
	return Recipes.find({_id : id
	});
});
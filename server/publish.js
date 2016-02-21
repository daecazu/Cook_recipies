Meteor.publish('recipes', function(){
	return Recipes.find({
			autor: this.userId
	});
});
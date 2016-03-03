Template.Recipe.helpers({
	updateRecipeId: function(){
		return this._id;
	}

});

Template.Recipe.events({
 'click .toggle-menu': function(){
 	//console.log('click'); //probar que está funcionando
 	Meteor.call('toggleMenuItem',this._id, this.inMenu); 
 },
 'click .fa-trash': function(){
 	Meteor.call('deleteRecipe',this._id);
 },
 'click .fa-pencil': function(){
 	Session.set('editMode',!Session.get('editMode'));
 }
});


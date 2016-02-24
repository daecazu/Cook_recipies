Template.Recipe.events({
 'click .toggle-menu': function(){
 	//console.log('click'); //probar que está funcionando
 	Meteor.call('toggleMenuItem',this._id, this.inMenu); 
 }
});
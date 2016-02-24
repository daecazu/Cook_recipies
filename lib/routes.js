if(Meteor.isClient){ //redirecciona a los usuarios cuando ingresan a la aplicación
Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});
Accounts.onLogout(function(){
		FlowRouter.go('home');
	});

}


FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);
FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){ //si el userId existe el metodo retorna true
			FlowRouter.go('recipe-book');
		}
		//GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe-book/:id', {
	name: 'single-recipe',
	action() {
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});
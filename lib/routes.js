FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe-book/:id', {
	name: 'single-recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});
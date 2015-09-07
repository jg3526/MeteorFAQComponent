Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// homepage routes
	this.route('questions', {
		path:'/',
		template: 'questions'
	});
})
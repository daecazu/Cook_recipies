Recipes = new Meteor.Collection('recipes'); // definiendo una Collection

RecipeSchema = new SimpleSchema({ //creamos un nuevo schema
	nombre: {
		type: String,
		label: "Nombre"
	},
	desc:{
		type: String,
		label: "Descripción"
	},
	autor:{
		type: String,
		label: "Autor",
		autoValue: function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},
	creadoEn: {
		type: Date,
		label: "Fecha de creación",
		autoValue: function(){
			return new Date()
		},
		autoform:{
			type:"hidden"
		}

	}


});

Recipes.attachSchema( RecipeSchema);
Recipes = new Mongo.Collection('recipes'); // definiendo una Collection
Recipes.allow({
	insert: function (userId, doc) { //permisos para publicar
		return !!userId;
	},
    update: function (userId, doc) { //actualizar
		return !!userId;
	},
	/*
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}*/
});

Ingredient =new SimpleSchema({
	nombre:{
		type: String,
		label: "Ingrediente"
	},
	cantidad:{
		type: String,
		label: "Cantidad"
	}
});

RecipeSchema = new SimpleSchema({ //creamos un nuevo schema
	nombre: {
		type: String,
		label: "Nombre"
	},
	desc:{
		type: String,
		label: "Descripción"
	},
	Ingredientes:{
		type: [Ingredient]	
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type:"hidden"
		}
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

//metodo para actualizar 
Meteor.methods({
	toggleMenuItem: function(id,currentState){
		Recipes.update(id, {$set: {
									inMenu: !currentState}
							
		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}

});
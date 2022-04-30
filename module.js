Hooks.once('canvasInit', () => {
	for (let m of MacroDirectory.collection.filter(m=>m.name==='World Script'&&game.users.filter(u=>u.isGM).map(u=>u.id).includes(m.data.author)))
	    eval(m.data.command);
});

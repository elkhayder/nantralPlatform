(function(d){	const l = d['es-co'] = d['es-co'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 de %1","Block quote":"Cita de bloque",Bold:"Negrita",Cancel:"Cancelar",Italic:"Cursiva",Save:"Guardar","Show more items":"Mostrar más elementos",Strikethrough:"Tachado"}	);l.getPluralForm=function(n){return n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
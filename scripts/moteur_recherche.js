$(document).ready(function() {
	
	var $cross = 0; // variable de test de l'activation de la recherche croisée
	var $search1 = 0; // variable de test de l'activation de la recherche initiale
	var $search2 = 0; // variable de test de l'activation de la recherche croisée
	var $about = new Array();
	var $year = new Array();
	var $string_about;
	var pointer1;
	var pointer2;
	$('div[class=key]').hide();
	$('div[class=keyrien]').hide();
	$('#tab_cross').hide();
	$('#line').hide();
	$('#top').hide();
	$('#tab_recherche1').hide();
	$('#tab_couleur').hide();
	$('#tab_recherche2').hide();
	$('#tab_recherche3').hide();
	$('.oufguedin').hide();
	
	$('#cestparti').hover(function(){
		$(this).attr('class','cestparti2');
		}, function(){		
		$(this).attr('class','cestparti');
		}
	);
	
	$('#cestparti').click(function(){
		$('#tab_recherche1').show();
		$('#tab_couleur').show();
		$('#notice').hide();
	});
			
	$('#6checkcase').click(function () { //selection et deselection du niveau 6eme
		if ($(this).parent().parent().attr('status') == 'checked'){
			$(this).parent().parent().attr('status','unchecked');
			$(this).html('&#9744;');
		}
		else {
			$(this).parent().parent().attr('status','checked');
			$(this).html('&#x1F5F9;');
		}
	});
		
	$('#4checkcase').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().parent().attr('status') == 'checked'){
			$(this).parent().parent().attr('status','unchecked');
			$(this).html('&#9744;');
		}
		else {
			$(this).parent().parent().attr('status','checked');
			$(this).html('&#x1F5F9;');
		}
	});
		
	$('#bleuc').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=géométrie]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=géométrie]').children().attr('class','key');
			$(this).attr('class','colourb');
		}
	});
		
	$('#orangec').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=nombres]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=nombres]').children().attr('class','key');
			$(this).attr('class','colouro');
		}
	});
		
	$('#rosec').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=données]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=données]').children().attr('class','key');
			$(this).attr('class','colourr');
		}
	});
		
	$('#vertc').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=grandeurs]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=grandeurs]').children().attr('class','key');
			$(this).attr('class','colourv');
		}
	});
		
	$('#marronc').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=algo]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=algo]').children().attr('class','key');
			$(this).attr('class','colourm');
		}
	});
		
	$('#jaunec').click(function () { //selection et deselection du niveau 4eme
		if ($(this).parent().attr('status') == 'checked'){
			$(this).parent().attr('status','unchecked');
			$('div[about=autres]').children().attr('class','Nkey');
			$(this).attr('class','grey');
		}
		else {
			$(this).parent().attr('status','checked');
			$('div[about=autres]').children().attr('class','key');
			$(this).attr('class','colourj');
		}
	});
	
	$('#allmighty').click(function(){
		$('p[class=reponse]').show();
		$('div[class=reponse]').show();
	});
	
	$('#go').click(function(){
		
		$('div[class=keyrien]').hide();
		$('#tab_cross').hide();
		$('#line').hide();
		$('#top').hide();
		$('#tab_recherche2').hide();
		$('#tab_recherche3').hide();
		$('.oufguedin').hide();
		$('div[class=keyF]').attr('class','key');
		$('div[class=key]').hide();
		$('div[class=Nkey]').hide();
		
		//compter les sixième
		var $match6 = $('div[year=sixième]').length;
		//compter les quatrième
		var $match4 = $('div[year=quatrième]').length;
		//tous
		var $matchall = $match6+$match4;
		
		if (($('#6eme').attr('status')=='checked')&&($('#4eme').attr('status')=='checked')) {
			for (var $i=0; $i<$matchall; $i++){
				$('.key').eq($i).attr('order',Math.floor((Math.random() * 100) + 1));
			}
			var $found = 0;
			for (var $j=0; $j<100; $j++){
				for  (var $i=0; $i<$matchall; $i++){
					if (($found==0) && ($j == $('.key').eq($i).attr('order'))){
						$('.key').eq($i).attr('class','keyF');
						$found = 1;
					}
					$('p[class=reponse]').hide();
					$('div[class=reponse]').hide();
					$('div[class=keyF]').show();
				}
			}		
		}
		
		if (($('#6eme').attr('status')=='checked')&&($('#4eme').attr('status')=='unchecked')) {
			$('div[year=quatrième]').children().attr('order',101);
			for (var $i=0; $i<$match6; $i++){
				$('div[year=sixième]').children().eq($i).attr('order',Math.floor((Math.random() * 100) + 1));
			}
			var $found = 0;
			for (var $j=0; $j<100; $j++){
				for  (var $i=0; $i<$match6; $i++){
					if (($found==0) && ($j == $('div[year=sixième]').eq($i).children().attr('order'))){
						$('div[year=sixième]').eq($i).children().attr('class','keyF');
						$found = 1;
					}
					$('p[class=reponse]').hide();
					$('div[class=reponse]').hide();
					$('div[class=keyF]').show();
				}
			}			
		}
		
		if (($('#6eme').attr('status')=='unchecked')&&($('#4eme').attr('status')=='checked')) {
			$('div[year=sixième]').children().attr('order',101);
			for (var $i=0; $i<$match4; $i++){
				$('div[year=quatrième]').children().eq($i).attr('order',Math.floor((Math.random() * 100) + 1));
			}
			var $found = 0;
			for (var $j=0; $j<100; $j++){
				for  (var $i=0; $i<$match4; $i++){
					if (($found==0) && ($j == $('div[year=quatrième]').eq($i).children().attr('order'))){
						$('div[year=quatrième]').eq($i).children().attr('class','keyF');
						$found = 1;
					}
					$('p[class=reponse]').hide();
					$('div[class=reponse]').hide();
					$('div[class=keyF]').show();
				}
			}			
		}
	});
		
/*		if (($('#6eme').attr('status')=='unchecked')&&($('#4eme').attr('status')=='unchecked')) {
			$('div[class=keyrien]').show();
		}
	});*/
	
	$('#checkcase').click(function () {
		if ($(this).parent().parent().attr('status') == 'checked'){
			$(this).parent().parent().attr('status','unchecked');
			$(this).html('&#9744;');
			$('#tab_recherche2').show();
			$('#tab_couleur').hide();
			$('#tab_recherche3').show();
			$('.oufguedin').show();
			$('#6emerandom').hide();
			$('#4emerandom').hide();
			$('#go').hide();
			$('div[class=key]').hide();
		}
		else {
			$(this).parent().parent().attr('status','checked');
			$(this).html('&#x1F5F9;');
			$('#tab_recherche2').hide();
			$('#tab_recherche3').hide();
			$('#tab_couleur').show();
			$('#6emerandom').show();
			$('#4emerandom').show();
			$('#go').show();
			$('.link_about').remove();
			$('.link_year').remove();
			$('div[check=ok]').attr('check','nok');
			var $about = new Array();
			var $year = new Array();
			$('div[class=keyF]').attr('class','key');
			$('p[class=reponse]').hide();
			$('div[class=reponse]').hide();
			$('#notice').hide();
			$('#line').show();
			$('div[class=key]').hide();							// mise en forme de l'affichage des résultats
			$('p[class=key_right]').hide();						//
			$('#recherche').attr('value', 'Entrer un mot clé pour effectuer une recherche');
			$('#recherche2').attr('value', 'Entrer un mot clé pour effectuer une recherche');			
			$('.oufguedin').remove();
			$('#line').hide();
		}
	});	

	$('#recherche').click(function () { // lorsque je clique sur recherche, j'efface le texte, tout est caché sauf la notice qui s'appelle "notice"
		if ($search1 == 0){
			$(this).attr('value', '');
		}
		if ($search2 == 1){
			$('#recherche2').attr('value', 'Entrer un mot clé pour effectuer une recherche');
			$('#tab_cross').hide();
			$('#click_cross').show();		
			$cross = 0;
			$search2 = 0;
		}
	});
	
	$('#top').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	
	$('#recherche2').click(function () { // lorsque je clique sur recherche2, j'efface le texte, tout est caché sauf la notice qui s'appelle "notice"
		$(this).attr('value', '');
	});
	
	$('#click_cross').click(function () { // lorsque je clique sur recherche2, j'efface "Recherche"
		$(this).hide();
		$('#tab_cross').show();
		$('#recherche2').attr('disabled','true');
		$cross = 1;
		if ($search1 == 1){
			$('#recherche2').removeAttr('disabled');
		}
	});

	$('#recherche').keyup(function () {						//evenement = losqu'on presse une touche du clavier : on cache la notice, on fait disparaitre les resultats précédents 	
		$('.link_about').remove();
		$('.link_year').remove();
		$('div[check=ok]').attr('check','nok');
		var $about = new Array();
		var $year = new Array();
		$('div[class=keyF]').attr('class','key');
		$('p[class=reponse]').hide();
		$('div[class=reponse]').hide();
		$('#notice').hide();
		$('#line').show();
		$('div[class=key]').hide();							// mise en forme de l'affichage des résultats
		$('p[class=key_right]').hide();						//
		$('.oufguedin').remove();
		
		$keyup = $(this).val();											//on stocke la valeur du champ de recherche dans $keyup
		$keyup = $keyup.toLowerCase();
		if ($keyup != '') {												//si $keyup n'est pas vide
		
			$search1 = 1;
			$('#recherche2').removeAttr('disabled');
			
			var $match = $('p[keywords*='+$keyup+']').parent().parent().length;				//construction du tableau des liens
			$('p[keywords*='+$keyup+']').parent().parent().attr('check','ok');
			$about[0] = $('div[check=ok]').first().attr('about');
			var $incr = 1;
			var $okgo = 1;
			for (var $j=1; $j<$match; $j++) {
				$('div[check=ok]').first().attr('check','nok');		
				for (var $k=0; $k<$about.length; $k++) {
					if ($('div[check=ok]').first().attr('about') == $about[$k]) {
						$okgo = 0;
					}
				}
				if ($okgo == 1) {
					$about[$incr] = $('div[check=ok]').first().attr('about');
					$incr++;
				}
				$okgo = 1;
			}			
			
			$('p[keywords*='+$keyup+']').parent().parent().attr('check','ok');
			$year[0] = $('div[check=ok]').first().attr('year');
			var $incr = 1;
			var $okgo = 1;
			for (var $j=1; $j<$match; $j++) {
				$('div[check=ok]').first().attr('check','nok');	
				for (var $k=0; $k<$year.length; $k++) {
					if ($('div[check=ok]').first().attr('year') == $year[$k]) {
						$okgo = 0;
					}
				}
				if ($okgo == 1) {
					$year[$incr] = $('div[check=ok]').first().attr('year');
					$incr++;
				}
				$okgo = 1;
			}
			
			var $dim1=$about.length;
			var $dim2=$year.length;
			
			var $about_res = new Array();			
			for (var $j=0; $j<$dim1; $j++) {
				$about_res[$j] = $('div[about*='+$about[$j]+']').children().children('p[keywords*='+$keyup+']').parent().length;
			}
			
			var $year_res = new Array();			
			for (var $j=0; $j<$match; $j++) {
				$year_res[$j]=$('div[year*='+$year[$j]+']').children().children('p[keywords*='+$keyup+']').parent().length;
			}
			
			if ($dim1 > 0) {
				$('#top').before('<td class="link_about" style="background-color: #f0e5d6;"><div class="raw_about">Thématique :</div></td>');
				for (var $i=0; $i<$dim1; $i++){
					$('#top').before('<td title="'+$about_res[$i]+' résultats" class="link_about" style="background-color: #f0e5d6;"><div class="lien_about">'+$about[$i]+'</div></td>');
				}
			}
			if ($dim2 > 0) {
				$('#top2').before('<td class="link_about" style="background-color: #f0e5d6;"><div class="raw_about">Classe :</div></td>');
				for (var $i=0; $i<$dim2; $i++){
					$('#top2').before('<td title="'+$year_res[$i]+' résultats" class="link_year" style="background-color: #f0e5d6;"><div class="lien_about">'+$year[$i]+'</div></td>');
				}
			}
			
			var $length = $('p[keywords*='+$keyup+']').length;			//on stocke dans $length le nombre de résultats qui corespondent à la recherche
			$('#textos').html('');										//on efface le message (qui pourrait éventuellement être affiché)
			if ($length == 0) {																	//dans le cas où $length = 0
				$('.link_about').remove();
				$('.link_year').remove();
				$('#top').hide();
				$('#textos').html('Aucun résultat ne correspond à \"'+$keyup+'\"').show();
			}
			else if ($length == 1) {															//s'il n'y a qu'un seul résultat (c'est juste pour gérer le singulier ;)
				$('#result').before('<p class="oufguedin"><br/>'+$length+' résultat pour \"'+$keyup+'\" : </p>'); // On ajoute l'élément de classe oufguedin avant la classe "keylist" du html
				$('p[keywords*='+$keyup+']').parent().attr('class','keyF');
				$('p[keywords*='+$keyup+']').parent().attr('order',1);
				$('div[class=keyF]').show();
			}
			else if ($length > 1) {																//s'il y a plus d'un résultat
					$('#top').show();
					$('#result').before('<p class="oufguedin"><br/>'+$length+' résultats pour \"'+$keyup+'\" :</p>');
					$('p[keywords*='+$keyup+']').parent().attr('class','keyF');
					for (var $i=0; $i<$length; $i++){
						$('p[keywords*='+$keyup+']').parent().eq($i).attr('order',Math.floor((Math.random() * 1000) + 1));
					}
					$('div[class=keyF]').show();
			}
	
			$('.lien_about').click(function(){
				$('.lien_highlight').attr('class','lien_about');
				$(this).attr('class','lien_highlight');
				var $target = $(this).text();
				if ($target == 'sixième') {
					$('div[year='+$target+']').children('.keyF').attr('class','keyG');
				}
				else if ($target == 'quatrième') {
					$('div[year='+$target+']').children('.keyF').attr('class','keyG');
				}
				else if ($target == 'seconde') {
					$('div[year='+$target+']').children('.keyF').attr('class','keyG');
				}
				else {
					$('div[about='+$target+']').children('.keyF').attr('class','keyG');
				}
				$('div[class=keyF]').hide();
				$('div[class=keyG]').show();
				$('div[class=keyG]').attr('class','keyF');
				$('html, body').animate({scrollTop:0}, 'slow');
			});		

		}
		else { // si y'a que dalle, on affiche que t'es un gros boulet
			$('.link_about').remove();
			$('.link_year').remove();
			$('#top').hide();
			$('#textos').html('Entrer un mot clé pour effectuer une recherche').show();
			$('#recherche2').attr('value', 'Entrer un mot clé pour effectuer une recherche');
			$('#recherche2').attr('disabled','true');
		}
	});
		
		$('#recherche2').keyup(function () {	
			$('.link_about').remove();
			$('.link_year').remove();
			$('div[check=ok]').attr('check','nok');
			var $about = new Array();
			var $year = new Array();
			$search2 = 1;
			$('p[keywords*='+$keyup+']').parent().attr('class','keyF');
			$('p[class=reponse]').hide();
			$('div[class=reponse]').hide();
			$('div[class=keyF]').hide();							// mise en forme de l'affichage des résultats
			$('p[class=key_right]').hide();						//
			$('.oufguedin').remove();
			
			$keyup2 = $(this).val();
			$keyup2 = $keyup2.toLowerCase();
			if ($keyup2 != '') {																	//si $keyup n'est pas vide
				var $length2 = $('div[class=keyF]').children('p[keywords*='+$keyup2+']').length;	//on stocke dans $length le nombre de résultats qui corespondent à la recherche
				$('#textos').html('');																//on efface le message (qui pourrait éventuellement être affiché)

				var $match = $('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().parent().length;				//construction du tableau des liens
				$('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().parent().attr('check','ok');
				$about[0] = $('div[check=ok]').first().attr('about');
				var $incr = 1;
				var $okgo = 1;
				for (var $j=1; $j<$match; $j++) {
					$('div[check=ok]').first().attr('check','nok');
					for (var $k=0; $k<$about.length; $k++) {
						if ($('div[check=ok]').first().attr('about') == $about[$k]) {
							$okgo = 0;
						}
					}
					if ($okgo == 1) {
						$about[$incr] = $('div[check=ok]').first().attr('about');
						$incr++;
					}
					$okgo = 1;
				}	
				
				$('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().parent().attr('check','ok');
				$year[0] = $('div[check=ok]').first().attr('year');
				var $incr = 1;
				var $okgo = 1;
				for (var $j=1; $j<$match; $j++) {
					$('div[check=ok]').first().attr('check','nok');
					for (var $k=0; $k<$year.length; $k++) {
						if ($('div[check=ok]').first().attr('year') == $year[$k]) {
							$okgo = 0;
						}
					}
					if ($okgo == 1) {
						$year[$incr] = $('div[check=ok]').first().attr('year');
						$incr++;
					}
					$okgo = 1;
				}
				
				var $dim1=$about.length;
				var $dim2=$year.length;
			
				var $about_res = new Array();			
				for (var $j=0; $j<$dim1; $j++) {
					$about_res[$j] = $('div[about*='+$about[$j]+']').children('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().length;
				}
				
				var $year_res = new Array();			
				for (var $j=0; $j<$match; $j++) {
					$year_res[$j]=$('div[year*='+$year[$j]+']').children('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().length;
				}
				
				if ($dim1 > 0) {
					$('#top').before('<td class="link_about" style="background-color: #f0e5d6;"><div class="raw_about">modèle :</div></td>');
					for (var $i=0; $i<$dim1; $i++){
						$('#top').before('<td title="'+$about_res[$i]+' résultats" class="link_about" style="background-color: #f0e5d6;"><div class="lien_about">'+$about[$i]+'</div></td>');
					}
				}
				if ($dim2 > 0) {
					$('#top2').before('<td class="link_about" style="background-color: #f0e5d6;"><div class="raw_about">année :</div></td>');
					for (var $i=0; $i<$dim2; $i++){
						$('#top2').before('<td title="'+$year_res[$i]+' résultats" class="link_year" style="background-color: #f0e5d6;"><div class="lien_about">'+$year[$i]+'</div></td>');
					}
				}
				
				if ($length2 == 0) {	//dans le cas où $length = 0
					$('.link_about').remove();
					$('.link_year').remove();
					$('#top').hide();
					$('#textos').html('Aucun résultat ne correspond à \"'+$keyup+'" et "'+$keyup2+'\"').show();
				}
				else if ($length2 == 1) {																								//s'il n'y a qu'un seul résultat (c'est juste pour gérer le singulier ;)
					$('#top').show();
					$('#result').before('<p class="oufguedin"><br/>'+$length2+' résultat pour \"'+$keyup+'" et "'+$keyup2+'\" :</p>'); 	// On ajoute l'élément de classe oufguedin avant la classe "keylist" du html
					$('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().show();
					
				}
				else if ($length2 > 1) {	
						$('#top').show();
						$('#result').before('<p class="oufguedin"><br/>'+$length2+' résultats pour \"'+$keyup+'" et "'+$keyup2+'\" :</p>');
						$('div[class=keyF]').children('p[keywords*='+$keyup2+']').parent().show();	
				}
	
				$('.lien_about').click(function(){		//fonction qui permet d'afficher la réponse aux question suite à un clic sur l'image
					$('.lien_highlight').attr('class','lien_about');
					$(this).attr('class','lien_highlight');
					var $target = $(this).text();
					if ($target == 'sixième') {
						$('div[year='+$target+']').children('.keyF').attr('class','keyG');
					}
					else if ($target == 'quatrième') {
						$('div[year='+$target+']').children('.keyF').attr('class','keyG');
					}
					else if ($target == 'seconde') {
						$('div[year='+$target+']').children('.keyF').attr('class','keyG');
					}
					else {
						$('div[about='+$target+']').children('.keyF').attr('class','keyG');
					}
					$('div[class=keyF]').hide();
					$('div[class=keyG]').show();
					$('div[class=keyG]').attr('class','keyF');
					$('html, body').animate({scrollTop:0}, 'slow');
				});
			}
			else { // si y'a que dalle, on affiche que t'es un gros boulet			
				$('.link_about').remove();
				$('.link_year').remove();
				$('#top').hide();
				$('#textos').html('Entrer un mot clé pour effectuer une recherche').show();
			}
	});

	$('#reinit').click(function() { // reinitialisation
		location = location;
	/*	$('img').attr('class', '?');
		$('p[class=question]').attr('state', '?');
		$('#notice').show();
		$('.oufguedin').remove();
		$('div[class=keyF]').attr('class','key')
		$('div[class=key]').hide();
		$('#textos').hide();
		$('#recherche').attr('value', 'Entrer un mot clé pour effectuer une recherche');
		$('#recherche2').attr('value', 'Entrer un mot clé pour effectuer une recherche');
		$('#tab_cross').hide();
		$('#click_cross').show();	
		$('#line').hide();	
		$('#top').hide();
		$('.link_about').remove();
		$('.link_year').remove();
		$cross = 0;
		$search1 = 0;
		$search2 = 0;$*/
	});

	return false
	
});

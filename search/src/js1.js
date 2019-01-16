/* 
 * search\src\js1.s 
 *     Client-side validation. 
 */
    
//Initialize ...
function initialize()
{		
	document.getElementById("seb").focus(); 
        
    var GET = window.location.search.substring(14);
        
    if(GET == ""){
        document.myForm.search_input.value = "";
        return 0;
    }else{
        document.myForm.search_input.value = GET;
    }
    validateForm();
    return 0;
}

//Show link.
function showLink()
{
    var strDB;
		
    /*url trabalhando o resultado*/
	var urlDB1;
	var urlDB2;
	var urlDB3;
	var urlDB4;
		
	/*salvando o texto da busca*/
	var xSave; 
		
	/*Texto do link dos resultados.*/
	var xLinkText1;
	var xLinkText2;
	var xLinkText3;
	var xLinkText4;
		
	/*url completa para o resultado.*/
	var xHref1;
	var xHref2;
	var xHref3;
	var xHref4;
    /* Continua ... */     
   
    /* Salvando a palavra buscada. */ 
    xSave = document.myForm.search_input.value; 
		
	/* DATA BASE */
	
    /* 
     * Default: 
	 * No caso de digitarem palavras não encontradas no banco de dados.
	 */		 
	xLinkText1 = "Web site";
	xLinkText2 = "About me";
	xLinkText3 = "Links";
	xLinkText4 = "Contact me";
	urlDB1 = "https://frednora.github.io";
	urlDB2 = "https://frednora.github.io/about";
	urlDB3 = "https://frednora.github.io/links";
	urlDB4 = "https://frednora.github.io/contact";
        
	/* Listando minhas redes socias mais importantes */

	/* Facebook #ux1 */
    strDB = "facebook Facebook friends hangout personal post friendship images likes contact londrina paraná brasil photos life"; 
    var resFacebook = strDB.match(document.myForm.search_input.value);
		
	/* Youtube #ux1 */
    strDB = "youtube Youtube video videos movie watch playlist channel funny entertainment happy english diy tech"; 
    var resYoutube = strDB.match(document.myForm.search_input.value);
		
	/* Twitter #ux2 */
    strDB = "twitter Twitter tweet @frednora fred nora Fred Nora brazil news conversation text followers retweet"; 
    var resTwitter = strDB.match(document.myForm.search_input.value);

	/* Google #ux2 */
    strDB = "google Google plus email search blog zine write writer"; 
    var resGoogle = strDB.match(document.myForm.search_input.value);
		
	/* Professional #ux3 */
    strDB = "professional linkedin Linkedin ti economics business mises captalism contact profissional uel entrepreneurship startup money freedom utility"; 
    var resProfessional = strDB.match(document.myForm.search_input.value);

	/* Github #ux3 #ux4 */
    strDB = "gramado github Github git source code projects site osdev assembly c c++ html css javascript xml boot kernel gramado cli gui ui ux shell operating systems app software"; 
    var resGithub = strDB.match(document.myForm.search_input.value);

	/* More ... */
		
    /*Facebook #ux1*/
    if(resFacebook == document.myForm.search_input.value){ 
        xLinkText1 = "Facebook profile";
		urlDB1 = "https://facebook.com/fredericomartinsnora";	
		xLinkText2 = "Facebook page";
		urlDB2 = "https://facebook.com/frednora";	
		xLinkText3 = "Facebook photos";
		urlDB3 = "https://facebook.com/frednora/photos";	
		xLinkText4 = "Facebook about";
		urlDB4 = "https://facebook.com/frednora/about";
    }; 
		
    /*Youtube*/
    if(resYoutube == document.myForm.search_input.value){ 
        xLinkText1 = "Youtube User";
		urlDB1 = "https://youtube.com/user/frednoramusic";
		xLinkText2 = "Youtube Videos";
		urlDB2 = "https://www.youtube.com/user/frednoramusic/videos";
		xLinkText3 = "Youtube Playlists";
		urlDB3 = "https://www.youtube.com/user/frednoramusic/playlists";
		xLinkText4 = "Youtube Gaming";
		urlDB4 = "https://gaming.youtube.com/frednora";
    };  
		
    /*Twitter*/
    if(resTwitter == document.myForm.search_input.value){ 
        xLinkText1 = "Twitter profile";
		urlDB1 = "https://twitter.com/frednora";
		xLinkText2 = "Twitter moments";
		urlDB2 = "https://twitter.com/frednora/moments";
		xLinkText3 = "Twitter media";
		urlDB3 = "https://twitter.com/frednora/media";
		xLinkText4 = "Tweets & replies";
		urlDB4 = "https://twitter.com/frednora/with_replies";
    };                

    /*Google plus*/
    if(resGoogle == document.myForm.search_input.value){ 
        xLinkText1 = "Google plus";
		urlDB1 = "https://google.com/+frednora";
		xLinkText2 = "Collections";
		urlDB2 = "https://plus.google.com/117114639425962415024/palette";
		xLinkText3 = "Collections Fred Nora";
		urlDB3 = "https://plus.google.com/collection/IZGbe";
		xLinkText4 = "Fred Nora Zine";
		urlDB4 = "https://gramadocommunity.blogspot.com/";
    };        
		
    /*Professional*/
    if(resProfessional == document.myForm.search_input.value){ 
        xLinkText1 = "Linkedin Profile";
		urlDB1 = "https://linkedin.com/in/londrina";
		xLinkText2 = "About me";
		urlDB2 = "https://about.me/frednora";
		xLinkText3 = "Github Profile";
		urlDB3 = "https://github.com/frednora";
		xLinkText4 = "We site";
		urlDB4 = "https://frednora.github.io/";
    }; 

    /*Github #ux3 #ux4*/
    if(resGithub == document.myForm.search_input.value){ 
        xLinkText1 = "Github profile";
		urlDB1 = "https://github.com/frednora";
		xLinkText2 = "Github Fred Nora's web site";
		urlDB2 = "https://github.com/frednora/frednora.github.io";
		xLinkText3 = "Github Gramado source code";
		urlDB3 = "https://github.com/frednora/gramado";
		xLinkText4 = "Github Kernel source code";
		urlDB4 = "https://github.com/frednora/kernel";
    };		

    /* More ... */        

	/*url completa*/
    xHref1 = urlDB1;
	xHref2 = urlDB2;
	xHref3 = urlDB3;
	xHref4 = urlDB4;

    /* Show formated link for xHref1, xHref2, xHref3 and xHref4 */
    document.getElementById("link1").innerHTML = xLinkText1;
    document.getElementById("link1").href = xHref1;
    document.getElementById("link1").target = "_self";	
    document.getElementById("link2").innerHTML = xLinkText2;
    document.getElementById("link2").href = xHref2;
    document.getElementById("link2").target = "_self";
    document.getElementById("link3").innerHTML = xLinkText3;
    document.getElementById("link3").href = xHref3;
    document.getElementById("link3").target = "_self";
    document.getElementById("link4").innerHTML = xLinkText4;
    document.getElementById("link4").href = xHref4;
    document.getElementById("link4").target = "_self";		

    //Restaura o valor salvo.
	document.myForm.search_input.value = xSave;
    return 0;
} 
	
//Test 1.
function function1(){
    window.alert("Testing button 1.");	
    return 0;
}
	
//Test 2.
function function2(){
    window.alert("Testing button 2.");	
    return 0;
}
	
//Test 3.
function function3(){
    var txt;
    var r = confirm("Press a button!");
        
    if(r == true){
        txt = "You pressed OK!";
    }else{
        txt = "You pressed Cancel!";
    }        
    window.alert(txt); 
	return 0;
}
	
// Showing some message.
function messageShow(){
    window.alert(message);
}


function validateForm(){    
   /* Hora de apresentar o link para o resultado da busca*/
    showLink();   
    return 0;
}

//Variables.
var var11 = 0;	
var string1 = "This is a string.";
    
//Strings.
message = "Initializing ..."
    
	
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction()
{
    var x = document.getElementById("myTopnav");

    if(x.className === "navigation"){
        x.className = "responsive";
    }else{
        x.className = "navigation";
    }
}

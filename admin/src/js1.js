
    /* Travado até que acerte o username e o password*/ 
    var adminLocked = 1;
	var indexInitialized = 0;
	var adminInitialized = 0;
	/*...*/
	

    
	/* 
	 Essa função é chamda no body do index.html para inicializar a página index.html.
	 Deve travar a página de admin, que só destrava com username e password corretos */
	function indexInitialize()
	{
        adminLocked = 1;	   /* travando admin. */	
		indexInitialized = 1;  /* index.html está pronta para uso.*/		
	};
	
	
	function adminInitialize()
	{
		/* foco */
		document.getElementById("adminPostNumberEditBox").focus();
		
		/* alert("adminInitialize: starting ..."); */ 	
		
		/*Se estiver travado quando admin.html inicializa através do elemento 'body'.*/
        if(adminLocked == 1)
		{
			/*avisamos que está travado.*/
		    /* alert("adminInitialize: Locked! :("); */ 
            
			/* Checar se os dados enviados estão corretos */
		    if( initialize() === 0 )
			{
				alert("adminInitialize: Success :) "); 
	            adminLocked = 0;
	            adminInitialized = 1;
				return 0;
			}
		};
	
	    /* fail */
		alert("adminInitialize: FAIL :("); 
	    adminLocked = 1;
	    adminInitialized = 0;
	    return 1;
	};
	
	//Initialize ...

    function initialize()
	{
		/* Travando novamente para garantir. Destravaremos se os inputs forem as palavras que queremos*/
		adminLocked = 1;
        adminInitialized = 0;
		
		/* get username*/
		/* get password*/
		/* A única opção válida é admin admin*/
		var GET = window.location.search.substring(16);
		
		/* Comparando as duas entradas de uma vez só.
		 * Destravaremos admin.html, se forem as palavras certas.
		 */
		
		/* admin admin */
        if( GET == "admin&password_input=admin")
		{
            /* success */    
			alert("initialize: destravando ..."); 			
			/* window.alert(GET); */
			adminLocked = 0;    /*destravando*/
			adminInitialized = 1;
			return 0;
			
        }else{
			
	        /* fail */
		    alert("initialize:  FAIL try admin admin :("); 
	        adminLocked = 1;
	        adminInitialized = 0;
	        return 1;
		}		
    }
	

    function showLinks() {

        var strDB;
		
		/*url trabalhando o resultado*/
		var urlDB1;
		var urlDB2;
		var urlDB3;
		var urlDB4;
		
		var xSave; /*sanvando o texto da busca*/
		
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
        xSave = document.myForm.username_input.value; 
		
		
		/*    DATA BASE    */
	

        /*Default: No caso de digitarem palavras não encontradas no banco de dados.*/	
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
        strDB = "facebook friends hangout personal post friendship images likes contact londrina paraná brasil photos life"; 
        var resFacebook = strDB.match(document.myForm.username_input.value);
		
		/* Youtube #ux1 */
        strDB = "youtube video videos movie watch playlist channel funny entertainment happy english diy tech"; 
        var resYoutube = strDB.match(document.myForm.username_input.value);
		
		/* Twitter #ux2 */
        strDB = "twitter tweet @frednora fred nora brazil news conversation text followers retweet"; 
        var resTwitter = strDB.match(document.myForm.username_input.value);

		/* Google #ux2 */
        strDB = "google plus email search blog zine write writer"; 
        var resGoogle = strDB.match(document.myForm.username_input.value);
		
		/* Professional #ux3 */
        strDB = "professional linkedin ti economics business mises captalism contact profissional uel entrepreneurship startup money freedom utility"; 
        var resProfessional = strDB.match(document.myForm.username_input.value);

		/* Github #ux3 #ux4 */
        strDB = "github git source code projects site osdev assembly c c++ html css javascript xml boot kernel gramado cli gui ui ux shell operating systems app software"; 
        var resGithub = strDB.match(document.myForm.username_input.value);


		/* More ... */
		
        /*Facebook #ux1*/
        if(resFacebook == document.myForm.username_input.value)
		{ 
            xLinkText1 = "Facebook profile";
			urlDB1 = "https://facebook.com/frednoramusic";
			
			xLinkText2 = "Facebook page";
			urlDB2 = "https://facebook.com/frednora";
			
			xLinkText3 = "Facebook photos";
			urlDB3 = "https://facebook.com/frednora/photos";
			
			xLinkText4 = "Facebook about";
			urlDB4 = "https://facebook.com/frednora/about";
        }; 
		
        /*Youtube*/
        if(resYoutube == document.myForm.username_input.value)
		{ 
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
        if(resTwitter == document.myForm.username_input.value)
		{ 
            xLinkText1 = "@frednora | Twitter profile";
			urlDB1 = "https://twitter.com/frednora";
			
			xLinkText2 = "@frednora | Twitter moments";
			urlDB2 = "https://twitter.com/frednora/moments";
			
			xLinkText3 = "@frednora | Twitter media";
			urlDB3 = "https://twitter.com/frednora/media";
			
			xLinkText4 = "@frednora | Tweets & replies";
			urlDB4 = "https://twitter.com/frednora/with_replies";
        };                

       

        /*Google plus*/
        if(resGoogle == document.myForm.username_input.value)
		{ 
            xLinkText1 = "Google plus";
			urlDB1 = "https://google.com/+frednora";
			
			xLinkText2 = "Google plus | Collections";
			urlDB2 = "https://plus.google.com/117114639425962415024/palette";
			
			xLinkText3 = "Google plus | Collections Fred Nora";
			urlDB3 = "https://plus.google.com/collection/IZGbe";
			
			xLinkText4 = "Fred Nora zine";
			urlDB4 = "https://frednorazine.blogspot.com.br/";
        };        
		
        /*Professional*/
        if(resProfessional == document.myForm.username_input.value)
		{ 
            xLinkText1 = "Linkedin Profile";
			urlDB1 = "https://linkedin.com/in/fredericomartinsnora";
			
			xLinkText2 = "About me";
			urlDB2 = "https://about.me/frednora";
			
			xLinkText3 = "Github Profile";
			urlDB3 = "https://github.com/frednora";
			
			xLinkText4 = "We site";
			urlDB4 = "https://frednora.github.io/";
        }; 

        /*Github #ux3 #ux4*/
        if(resGithub == document.myForm.username_input.value)
		{ 
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

        /* Show formated link for xHref1*/
        document.getElementById("link1").innerHTML = xLinkText1;
        document.getElementById("link1").href = xHref1;
        document.getElementById("link1").target = "_self";
		
        /* Show formated link for xHref2*/
        document.getElementById("link2").innerHTML = xLinkText2;
        document.getElementById("link2").href = xHref2;
        document.getElementById("link2").target = "_self";

        /* Show formated link for xHref3*/
        document.getElementById("link3").innerHTML = xLinkText3;
        document.getElementById("link3").href = xHref3;
        document.getElementById("link3").target = "_self";

        /* Show formated link for xHref4*/
        document.getElementById("link4").innerHTML = xLinkText4;
        document.getElementById("link4").href = xHref4;
        document.getElementById("link4").target = "_self";		

        document.myForm.username_input.value = xSave;
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


/*
    adminValidateEntryForm:
	    O propósito é validar os inputs que admin.html recebe quando 
		é aberta pela primeira vez, quando o body aciona a função adminInitialize().
		Os inputs foram gerados em index.html e 
		o submit do form do index.html acionou o action do form e 
		carregou a página admin.html.
		
	 Somente o o módulo admin deve validar os form
	 mesmo que o input tenha sido em index.html. 
	 no form do index.html tem um action="/admin.html"
	 que fará com que admin.html valide o formulário preenchido 
	 em index.html.
 */	
function adminValidateEntryForm()
{    
   /* Hora de apresentar o linke para o resultado da busca*/
    showLinks();   
    return 0;
}


/*
   adminValidateBlogManagerForm:
       Isso valida inputs feitos no form da página admin.html 
	   que serve para gerenciar o blog.
	   issa função deve ser chamada pelo submit do form da página admin.html
	   Obs: Agora os inputs tem nomes diferentes, para gerenciar elementos do blog.
	        @todo: temos que fazer novas rotinas que tratam esses inputs
*/
function adminValidateBlogManagerForm()
{
    var savePostNumber;
    var savePostTag;
	var urlPosts = "https://frednora.github.io/blog/posts/";
	
	/* Saving inputs */
	savePostNumber = document.myForm.post_number_input.value;
	savePostTag = document.myForm.post_tag_input.value; 
	
	if( adminLocked == 1 )
	{
        alert("adminValidateBlogManagerForm: This feature needs a password :(");		
	    return 1;
	}else{
        /* ?? O que fazer aqui ???*/
        /*test*/		
	    window.open(urlPosts + document.myForm.post_number_input.value + ".html");	
		/*@todo: Continuar ...*/
		return 0;
	}
	
	/*fail*/
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
    };
}
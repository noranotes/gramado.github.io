/* 
    File: gramado.js 

    Client side js library.

    Isso é a biblioteca gramado.js.
    Os serviços oferecidos serão chamados através das funções:
    gramado.xxx.yyy() por exemplo.

    Ordem desse documento:
    =====================
    1) *Step1 Definição de variáveis globais.
    2) *Step2 Configuração da biblioteca.
    3) *Step3 Conjunto de métodos. Todos começados por do_xxxx().

    Funções na biblioteca:
    ======================
    gramadoMain()                    - Inicializa a biblioteca.

    Gramado.admin.validateForm()     - valida um formulário.
    Gramado.admin.function1()        - teste
    Gramado.admin.function2()        - teste
    Gramado.admin.function3()        - teste 
    Gramado.admin.messageShow()      - mostra uma mensagem de teste. 
    Gramado.admin.initializedAlert() - mensagem de alerta que a biblioteca foi inicializada. 
    Gramado.admin.myFunction()       - teste.
    Gramado.admin.download()         - baixa um arquivo escrito em uma área de texto.
    Continua...

    History:
        2017 Created by Fred Nora.
*/

    /* # Step 1 # */

    /* Globals */

    //#importante
    // Esse será o nome do pacote.
    var Gramado;

    // Variables.
    var var11 = 0;
    var string1 = "This is a string.";

    // Strings.
    message = "Initializing ..."

	/* # Step 2 # */
	/* Setup library */

    /* Entry point: 
       Isso inicializa a biblioteca.
       Isso deve ser chamado apenas uma vez. */

    function gramadoMain (){
        /*console.log("gramadoMain");*/
        Gramado = new CreatingGramadoPackage();

        Gramado.admin = new ADMIN();
        /* more ...*/

        return 0;
    }



    /*Isso cria os 4 classes do pacote gramado*/
    /* cinco objetos ... que terão vários métodos cada. */

    function CreatingGramadoPackage(){

        this.admin = 0;  /* Admin support */
        /* more ...*/
    }

    
    /* Administrando a biblioteca. Essas são as funcionalidades administrativas da biblioteca */
    function ADMIN(){
        this.validateForm = do_validateForm;
        this.function1 = do_function1;
        this.function2 = do_function2;
        this.function3 = do_function3;
        this.messageShow = do_messageShow;
        this.initializedAlert = do_initializedAlert;
        //this.myFunction = do_myFunction;
        this.download = do_downloadFile;
        /*Continua ...*/
    }






	/* # Step 3 # */

	/* Methods */

	/*  Daqui pra baixo, criaremos os métodos propriamente ditos
		Obs: Cada método tem um ponteiro para acessá-lo. O ponteiro fica 
		na sua respectiva classe. */

    /* Manteremos a ordem */

    

    function do_initializedAlert(){
        alert("do_initializedAlert: method working ~It's initialized!");
        return 0;
    }
 
	/*  do_validateForm:
		O objetivo desse método é capturar o input do form na página inicial, usado na busca, compará lo com o banco de dados,
		apresentar o resultado em outra página /search que também será um mecanismo de pesquisa. */

    function do_validateForm(){

        var xHref;
        var xSave;
        var str;
        /*var buffer;*/
        /*var file_name;*/
        /* ... */

        /*alert("do_validateForm: Getting substring ...");*/

        /* var GET = "gui";*/

        var GET = window.location.search.substring(14);

        if (GET == "")
		{
            document.myForm.search_input.value = "";
            return 0;
			
        }else{
            document.myForm.search_input.value = GET;
        }

        /* validate Form / show link */

        xSave = document.myForm.search_input.value; 

	/* Obs: 
		Essa comparação não funciona, quando a busca é feita em /home.html, pois 
		a análise é feita pelo js da página /seach.
		Isso está aqui só para uso futuro.*/

        str = "https://gramado.github.io/ home"; 
        var resIndex = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/about fred nora Fred Nora Frederico economist developer author";
        var resAboutMe = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/projects work kernel gui osdev source";
        var resProjects = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/links social network twitter facebook youtube linkedin";
        var resLinks = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/contact email business"; 
        var resContactMe = str.match(document.myForm.search_input.value);

        /* @TODO: PARSE SOME FILES AND TEXT TO FIND A RESULT */

        /**/
        if (resIndex == document.myForm.search_input.value){
            document.myForm.search_input.value = "index.html";
        }

        /**/
        if (resAboutMe == document.myForm.search_input.value){
            document.myForm.search_input.value = "about";
        }

        /**/
        if (resProjects == document.myForm.search_input.value){
            document.myForm.search_input.value = "projects";
        }

        /**/
        if (resLinks == document.myForm.search_input.value){
            document.myForm.search_input.value = "links";
        }

        /**/
        if (resContactMe == document.myForm.search_input.value){
            document.myForm.search_input.value = "contact";
        }

		/* ... */

        xHref = document.myForm.search_input.value;

        /* Show formated link */
        document.getElementById("link1").innerHTML = xSave;
        document.getElementById("link1").href = xHref;
        document.getElementById("link1").target = "_self";

        document.myForm.search_input.value = xSave;

		/* carregar página de /search com input*/


		/* alert("~validate input Opening URL."); */

        var url_search;
        url_search = "https://gramado.github.io/search/?search_input=";

		/*alert("do_validateForm: debug");*/

		/*#bugbug*/
		/*this.document.location.href = url_search + xSave; */
		/*this.document.location.href = "www.google.com";*/

		/*window.open(url_search,"_self",false);*/
        var myWindow = window.open(url_search + xSave);
		/*alert("do_validateForm: EXIT");*/

		/* ?? O que acontece ao retornarmos, ??? inicializa a biblioteca quando chega no elemento 'body' ??*/
		/* return 0; */
    }

    //Test 1.
    function do_function1(){
        window.alert("Testing button 1.");
        return 0;
    }

    //Test 2.
    function do_function2(){
        window.alert("Testing button 2.");
        return 0;
    }

    //Test 3.
    function do_function3(){

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
    function do_messageShow (){
        window.alert(message);
        return 0;
    }

 

    /* Esse método é para baixar um arquivo que foi construído em um form com os inputs 'filename_input' e 'filetext_input'. 
       Para acionar esse método é usada a função >> gramado.admin.download(); */
       
    function do_downloadFile(){

		//file support.
        var xFileName = "fail";
        var xFileText = "fail";

		/*alert("go");*/

        xFileName = document.getElementById("fn1").value;
        xFileText = document.getElementById("ft1").value;

        var pom = document.createElement('a');
        
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xFileText));
        pom.setAttribute('download', xFileName);

        if (document.createEvent){

            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }else{
            pom.click();
        }

    return 0;
}



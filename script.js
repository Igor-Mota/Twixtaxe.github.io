const jogo_da_velha = {
    board: ["X","","","","O","","","",""],
    simbols:["X","O"],
    container_element: null,
    
    init: function(container){
        this.container_element = container;
    },

    jogada: function(){
        console.log("jogada")
    },

    desenha: function(){
        let content = "";

        for(i in this.board){
            content += "<div>" + this.board[i] + "</div>";
        }
        this.container_element.innerHTML = content;
    },
};
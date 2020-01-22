const jogo_da_velha = {
    board: ["","","","","","","","",""],
    simbols:{
      option:["X","O"],
      qual_turno: 0,
      
      troca: function(){
        this.qual_turno = (this.qual_turno === 0 ? 1 : 0);
      }
    },
    container_element: null,
    gameover: false,

    init: function(container){
        this.container_element = container;
    },

    jogada: function(position){
        if (this.gameover) return false;
        if(this.board[position] ===""){
            this.board[position] = this.simbols.option[this.simbols.qual_turno];
            this.desenha();

            this.simbols.troca();
        }    
    },

    desenha: function(){
        let content = "";

        for(i in this.board){
            content += "<div onCLick='jogo_da_velha.jogada("+ i +")'>" + this.board[i] + "</div>";
        }
        this.container_element.innerHTML = content;
    },
};
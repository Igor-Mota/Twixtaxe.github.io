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
    sequencias_de_vitoria:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    
    init: function(container){
        this.container_element = container;
    },

    jogada: function(position){
        if (this.gameover) return false;
        if(this.board[position] ===""){
            this.board[position] = this.simbols.option[this.simbols.qual_turno];
            this.desenha();
            let alguem_venceu = this.verifica_se_tem_uma_sequecia_vencedora(this.simbols.option[this.simbols.qual_turno]);
            if(alguem_venceu >=0){
                
                this.acabou_o_jogo();
            
            }else{
                this.simbols.troca();
            }
            return true;
            
        }else{
            return false;
        }    
    },

    acabou_o_jogo: function(){
        this.gameover = true;
        console.log("game Over" + i )
    },

    restart: function(){
        this.btn.addEventListener("click", this.start)
    },
    start: function(){
        this.board.fill("")
        this.desenha();
        this.gameover = false;
    },

    verifica_se_tem_uma_sequecia_vencedora: function(simbol){
        for(i in this.sequencias_de_vitoria){
            if(this.board[ this.sequencias_de_vitoria[i][0] ] == simbol &&
               this.board[ this.sequencias_de_vitoria[i][1] ] == simbol && 
               this.board[this.sequencias_de_vitoria[i][2] ] == simbol){
                    return i;
                }
        };
        return -1;
    },

    desenha: function(){
        let content = "";

        for(i in this.board){
            content += "<div onCLick='jogo_da_velha.jogada("+ i +")'>" + this.board[i] + "</div>";
        }
        this.container_element.innerHTML = content;
    },


};
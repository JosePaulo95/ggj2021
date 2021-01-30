var App = new Vue({
  el: "#app",
  data() {
    return {
     capitulo0: [
       {
          "titulo": "Prologo",
          "subtitulo": "Um casal e o pôr do sol"
       },
       {
        "autor": "Guarda",
        "fala": 
         `fala rapeize`
       },
       {
         "tipo": "escolha",
          "opcoes": [
            { 
              "label":"bater",
              "bloco":{
                "autor": "Jobin",
                "fala": "tome isto!"
              },
              "resultado":[
                {
                  "autor": "guarda",
                  "fala": "Você é um fracote!"
                },
              ]
            },
            {
              "label":"correr",
              "bloco":{
                "autor": "Jobin",
                "fala": "falous!"
              },
              "resultado":[
                {
                  "autor": "guarda",
                  "fala": "volte aqui covarde!"
                }
              ]
            },
            {
              "label":"aaaa",
              "bloco":{
                "autor": "Jobin",
                "fala": "aaa!"
              },
              "resultado":[
                {
                  "autor": "guarda",
                  "fala": "aaaaa!"
                }
              ]
            }
          ]
       },
       {
        "autor": "Róssia",
        "fala": "ai ai..."
      },
     ],
     content: [],
     index: 0
    }
  },
  beforeMount(){
    //this.runTests();
    document.addEventListener('keydown', e => { e.code == "Space"? this.run():"" }); 
  },
  mounted(){
    console.log(this.capitulo0[2].opcoes[0]);
    console.log(this.capitulo0[2].opcoes[1]);
    this.run();
    //this.goTo(0, 4)
  },
  computed: {
    
  },
  methods: {
    updateScroll(){
      console.log("update scroll");
      console.log(panel_dom);
      panel_dom.scrollTop = 100000;
    },
    run(escolha_index = -1){
      //this.updateScroll()
      if(escolha_index > -1){
        //insere no capitulo o grupo de blocos dessa opção
        let bloco_escolha = this.capitulo0[this.index-1].opcoes[escolha_index];
        this.content.pop()//push(bloco_escolha.bloco)
        //this.content.push(bloco_escolha.bloco)
        //this.capitulo0.splice(this.index, 0, bloco_escolha.resultado)
        //this.run()
        bloco_escolha.resultado.reverse().forEach(bloco => {
          //console.log(bloco);
          this.capitulo0.splice(this.index, 0, bloco)
        });
        this.capitulo0.splice(this.index, 0, bloco_escolha.bloco)
        //this.index++;
        //panel_dom.scrollTop = panel_dom.scrollHeight;
      } //else if(this.index < this.capitulo0.length){
        this.content.push(this.capitulo0[this.index])
        this.index++;
        
      //}else{
        //this.reset()
      //}
    },
    escolhe(escolha_index){
      console.log("a");
      this.run(escolha_index)
    },
    goTo(capitulo_index, bloco_index){
      //console.log(this.content);
      for (let i = 0; i < bloco_index; i++) {
        //console.log(this.capitulo0[i])
        this.run()//content.push(this.capitulo0[i])
        //const element = array[i];
      }
      //console.log(this.content);
    },
    reset(){
      this.content = []
      this.index = 0
    },
    runTests(){
      this.reset();
      runBlocosTests(this)
      this.reset();
    }
  }
});

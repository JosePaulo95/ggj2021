var App = new Vue({
  el: "#app",
  data() {
    return {
     capitulo0: {
       "0": {
        "titulo": "Prologo",
        "subtitulo": "Um casal e o pôr do sol",
        "next": 1
       },
       "1": {
        "autor": "Guarda",
        "fala": `fala rapeize`,
        "next": 3
       },
       "2": {
        "autor": "AISJAI",
        "fala": "essa fala nao deve aparecer",
        "next": 7
       },
       "3": {
        "autor": "GUARDA",
        "fala": "3a fala",
        "next": 4
       },
       "4": {
        "tipo": "escolha-fala",
        "index_opcoes": [5, 6]
       },
       "5": {
        "autor": "JOBIN",
        "fala": "correr",
        "next": 7
       },
       "6": {
        "autor": "JOBIN",
        "fala": "bater",
        "next": 8
       },
       "7": {
        "tipo": "narracao",
        "fala": "e jobin sai correndo",
        "next": 3
       },
       "8": {
        "tipo": "narracao",
        "fala": "e jobin bate no cara",
        "next": 3
       },
    },
     content: [],
     index: 0
    }
  },
  beforeMount(){
    document.addEventListener('keydown', e => { e.code == "Space"? this.run():"" }); 
  },
  mounted(){
    console.log(this.Capitulo.map(b => b.tipo))
    this.run();
  },
  computed: {
    Capitulo(){
      var result = []
      Object.keys(this.capitulo0).map((key) => result[key] = this.capitulo0[key]);
      return result;
    }
  },
  methods: {
    updateScroll(){
      panel_dom.scrollTop = panel_dom.scrollHeight;
    },
    run(index_escolhido = -1){
      if(index_escolhido == -1 && this.content[this.content.length-1]?.tipo == "escolha-fala")
        return

      if(index_escolhido != -1){//escolheu fala
        const bloco_next = this.capitulo0[index_escolhido]
        this.content.pop();
        this.content.push(bloco_next);
        this.index = index_escolhido
      }else if(this.content.length > 0){
        const index_next = this.capitulo0[this.index].next
        const bloco_next = this.capitulo0[index_next]
        this.content.push(bloco_next);
        this.index = index_next
      }else{
        const bloco_titulo = this.capitulo0[0]
        this.content.push(bloco_titulo);
      }
      console.log(this.capitulo0[this.index].fala)
    },
    escolhe(escolha_index){
      this.run(escolha_index)
    },
    goTo(capitulo_index, bloco_index){

      for (let i = 0; i < bloco_index; i++) {
  
        this.ru
  
      }

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

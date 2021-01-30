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
         "autor": "Róssia",
         "fala": 
          `ah meu amor!
          que bom te ver`
       },
       {
        "autor": "Jobin",
        "fala": 
         `ola`
       },
       {
        "autor": "Guarda",
        "fala": 
         `fala rapeize`
       }
     ],
     content: [],
     index: 0
    }
  },
  beforeMount(){
    this.runTests();
    document.addEventListener('keydown', () => this.run()); 
  },
  mounted(){
    this.run(0);
  },
  computed: {
    getPaginaInicial(){
      return this.content.length>0?this.content[0]:{}
    },
    getContent(){
      //console.log(this.content.slice(1));
      return this.content.slice(1)
    }
  },
  methods: {
    run(){
      if(this.index < this.capitulo0.length){
        this.content.push(this.capitulo0[this.index])
        this.index++;
        panel_dom.scrollTop = panel_dom.scrollHeight;
      }else{
        this.reset()
      }
    },
    goTo(capitulo_index, bloco_index){
      //console.log(this.content);
      for (let i = 0; i < bloco_index; i++) {
        //console.log(this.capitulo0[i])
        this.content.push(this.capitulo0[i])
        //const element = array[i];
      }
      //console.log(this.content);
    },
    reset(){
      this.content = []
      this.index = 0
    },
    runTests(){
      runBlocosTests(this)
      this.reset();
    }
  }
});

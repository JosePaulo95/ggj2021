var App = new Vue({
  el: "#app",
  data() {
    return {
      capitulos: [
        {
          "0": {
            "titulo": "Prólogo",
            "subtitulo": "Um casal ao pôr do sol",
            "next": 1
          },
          "1": {
            "autor": "Róssia",
            "fala": `💋💋💋`
          }, 
          "2": {
            "autor": "Jobin",
            "fala": `💜💜💜`
          }, 
          "3": {
            "autor": "Róssia",
            "fala": `Jobin, para um humano, até que você me surpreende.`
          }, 
          "4": {
            "autor": "Jobin",
            "fala": `Não posso dizer o mesmo de você, Róssia. Já que você é tudo que eu esperava de uma companheira.`
          }, 
          "5": {
            "autor": "Róssia",
            "fala": `Ah, Jobin! Precisamos da benção de meu pai para ficarmos juntos!`
          }, 
          "6": {
            "autor": "Jobin",
            "fala": `Eu serei digno dela, mesmo que eu tenha que enfrentar o inferno e a terra.`
          }, 
          "7": {
            "autor": "Róssia",
            "fala": `Jobin, você consegue ver a beleza que há na escuridão. Case-se comigo.`
          },
          "8": {
            "tipo": "escolha-fala",
            "index_opcoes": [9, 10]
          },
          "9": {
            "autor": "Jobin",
            "fala": `Róssia, na luz do mundo me perco, mas na sua escuridão é que me encontro.
            Eu serei seu esposo.`,
            "next": 11
          }, 
          "10": {
            "autor": "Jobin",
            "fala": `Pode crer.`,
            "next": "14" 
          },
          "11": {
            "autor": "Róssia",
            "fala": `Levante-se, precisamos ir ao inferno pedir a benção de meu pai. Prepare alguns presentes e inspire coragem.`
          },
          "12":{
            "autor": "Jobin",
            "fala": `Vamos.`
          },
          "13": {
            "tipo": "narracao",
            "fala": "partem. Fim do prólogo.",
            "happy_end": true
          },
          "14": {
            "tipo": "narracao",
            "fala": "Jobin morre",
            "dead_end": true
          },
        },
        {
          "0": {
            "titulo": "Capítulo 1",
            "subtitulo": "O salão do inferno",
            "next": 1
          },
          "1": {
            "tipo": "narracao",
            "fala": `chegam ao salao de Goro`
          },
          "2": {
            "autor": "Róssia",
            "fala": `ola papai`
          }
        }
      ],
     content: [],
     index_bloco: 0,
     index_capitulo: 0,
    }
  },
  beforeMount(){
    document.addEventListener('keydown', e => { e.code == "Space"? this.run():"" }); 
  },
  mounted(){
    console.log(this.Capitulo.map(b => b.tipo))
    //this.run();
  },
  computed: {
    Capitulo(){
      var result = []
      //essa linha transforma um objeto num array
      Object.keys(this.capitulos[this.index_capitulo]).map((key) => result[key] = this.capitulos[this.index_capitulo][key]);
      return result;
    }
  },
  methods: {
    start(){
      this.run()
    },
    updateScroll(){
      panel_dom.scrollTop = panel_dom.scrollHeight;
    },
    run(index_escolhido = -1){
      //precisa escolher, não escolheu mas apertou barra de espaço
      if(index_escolhido == -1 && this.content[this.content.length-1]?.tipo == "escolha-fala")
        return

      if(this.content[this.content.length-1]?.happy_end){
        this.reset(this.index_capitulo+1, 0)
      }

      if(this.content[this.content.length-1]?.dead_end){
        this.reset(this.index_capitulo, 0)
      }

      if(index_escolhido != -1){
        //escolheu fala
        const bloco_next = this.Capitulo[index_escolhido]
        this.content.pop();
        this.content.push(bloco_next);
        this.index_bloco = index_escolhido
      }else if(this.content.length > 0){
        //seguindo árvore
        const index_next = this.Capitulo[this.index_bloco].next?this.Capitulo[this.index_bloco].next:this.index_bloco+1
        const bloco_next = this.Capitulo[index_next]
        this.content.push(bloco_next);
        this.index_bloco = index_next
      }else{
        //inicializa
        const bloco_titulo = this.Capitulo[0]
        this.content.push(bloco_titulo);
      }
      console.log(this.Capitulo[this.index_bloco].fala)
    },
    escolhe(escolha_index){
      this.run(escolha_index)
    },
    goTo(capitulo_index, bloco_index){

      for (let i = 0; i < bloco_index; i++) {
  
        this.ru
  
      }

    },
    reset(index_cap){
      this.content = []
      this.index_capitulo = index_cap
      this.index_bloco = 0
    },
    runTests(){
      this.reset();
      runBlocosTests(this)
      this.reset();
    }
  }
});

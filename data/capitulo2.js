const _capitulo2 = {
    "0": {
      "titulo": "Capítulo 2",
      "subtitulo": "O salão de Saro",
    },
    "1": {
      "tipo": "narracao",
      "fala": "entra no salão do rei demônio Saro",
    },
    "2" : {
      "autor": "Saro",
      "fala": "Hummm? Quem ousa entrar no salão de Saro, o grande rei demônio?",
    },
    "3": {
      "autor": "Saro",
      "fala": "Ora mas se não é um humano! Toma isto, insolente!",
      "porrada": true,
      "next": 5
    },
    "5": {
      "autor": "Jobin",
      "fala": "AAaarrghh!!!",
    },
    "6": {
      "tipo": "narracao",
      "fala": "Jobin sangra no salão. Pode suportar mais $hp golpes destes",      
      "next": 600
    },
    "600": {
      "autor": "Saro",
      "fala": "O quê? ainda de pé?",
      "next": 7
    },
    "7": {
      "tipo": "escolha-fala",
      "index_opcoes": [8, 11, 13]
    },
    "8" : {
      "autor": "jobin",
      "fala": "Ei por que você me bateu, desgraçado?"
    },
    "9" : {
      "autor": "Saro",
      "fala": "Tua insolência será recompensada com a combustão de tua alma nas mais profundas chamas do inferno.",
    },
    "10": {
      "tipo": "narracao",
      "fala": "Jobin morre",
      "dead_end": true
    },
    "11" : {
      "autor": "jobin",
      "fala": "Perdoe minha intrusão, grandioso Saro. Deixe que eu me apresente."
    },
    "12" : {
      "autor": "saro",
      "fala": "Faça-o de uma vez.",
      "next": 15
    },
    "13" : {
      "autor": "jobin",
      "fala": "O que me mantém de pé é o amor."
    },
    "14" : {
      "autor": "saro",
      "fala": "Verme inútil. Se sabe falar, cospe tua medíocre razão para estar vivo logo na minha frente, maldito.",
      "next": 15
    },
    "15": {
      "tipo": "escolha-fala",
      "index_opcoes": [16, 19, 22]
    },
    "16" : {
      "autor": "jobin",
      "fala": "Eu sou Jobin e venho tomar seu tesouro mais precioso."
    },
    "17":{
      "autor": "saro",
      "fala": "HaHaHa!E como tu esperas ter isto? Tu não é páreo para mim!",
    },
    "18" : {
      "autor": "jobin",
      "fala": "Verá.",
      "next": 25
    },
    "19" : {
      "autor": "jobin",
      "fala": "Senhor, sou apenas um servo de seu irmão Goro e sua filha Róssia."
    },
    "20":{
      "autor": "saro",
      "fala": "Tu demonstras coragem, mas se me fizer perder mais tempo vai aprender o que é desespero."
    },
    "21" : {
      "autor": "jobin",
      "fala": "Pois não, mostrarei o que trouxe só para o senhor.",
      "next": 25
    },
    "22" : {
      "autor": "jobin",
      "fala": "Saro, eu vim barganhar."
    },
    "23":{
      "autor": "saro",
      "fala": "Tu demonstras coragem, mas se me fizer perder mais tempo vai aprender o que é desespero."
    },
    "24" : {
      "autor": "jobin",
      "fala": "Permita que eu apresente minha oferta.",
      "next": 25
    },
    "25": {
      "tipo": "escolha-fala",
      "index_opcoes": [26, 32, 40, 51]
    },
    "26": {
      "fala": "espada",
      "tipo": "escolha-fala",
      "index_opcoes": [27, 30]
    }, 
    "27":{
      "tipo": "narracao",
      "fala": "saca a espada",
    },
    "28":{
      "autor": "saro",
      "fala": `HaHaHa!
      Este é seu plano?
      Ouçam, presentes, o doce som desta forma agonizando.`,
      "next": 281
    },
    "29":{
      "tipo": "narracao",
      "fala": "Saro golpeia Jobin fortemente e a espada voa para longe",
      "porrada": true,
      "next": 200
    },
    "30":{
      "tipo": "narracao",
      "fala": "oferece a espada",
    },
    "31":{
      "autor": "saro",
      "fala": `Acha que eu o grande Saro necessito de uma lâmina simplória como esta?
      Pequeno em forma mas grande em ignorância.`,
      "next": 29
    },
    "32": {
      "fala": "escudo",
      "tipo": "escolha-fala",
      "index_opcoes": [33, 37]
    },
    "33":{
      "tipo": "narracao",
      "fala": "se protege com o escudo",
    },
    "34":{
      "autor": "saro",
      "fala": `Achas que este pedaço de metal simplório pode parar o grandioso Saro? Tome isto, insolente!`,
    },
    "35":{
      "tipo": "narracao",
      "fala": "o escudo de Jobin para o golpe de Saro",
    },
    "36":{
      "autor": "saro",
      "fala": `Ora… Até que este seu escudo é interessante.`,
      "next": 25
    },
    "37":{
      "tipo": "narracao",
      "fala": "oferece o escudo",
    },
    "38":{
      "autor": "saro",
      "fala": `Achas que sou frágil, que necessito de um escudo terreno???
      Maldito!`,
    },
    "39":{
      "tipo": "narracao",
      "fala": "Saro joga o escudo para longe e golpeia Jobin",
      "porrada": true,
      "next": 200
    },
    "40": {
      "fala": "flor",
      "tipo": "escolha-fala",
      "index_opcoes": [41]
    }, 
    "41":{
      "tipo": "narracao",
      "fala": "oferece a flor",
    },
    "42":{
      "autor": "saro",
      "fala": `Ora mas… Tu queres dar isso para mim?
      Meu coração é pura escuridão, garoto.
      O que te faz pensar que eu gostaria de receber isto?`,
    },
    "43": {
      "tipo": "escolha-fala",
      "index_opcoes": [44,45],
    }, 
    "44" : {
      "autor": "jobin",
      "fala": "Ah, é verdade. Me desculpe.",
      "next": 25
    },
    "45" : {
      "autor": "jobin",
      "fala": "Eu posso ver a beleza que há na escuridão."
    },
    "46":{
      "autor": "saro",
      "fala": `Isso me lembra…
      Me diga, rapaz. O que tu desejas?`,
    },
    "47" : {
      "autor": "jobin",
      "fala": "Saro, ajuda-me. Preciso de seu tesouro mais precioso para ter a mão de Róssia. Sem ela, sou apenas um homem perdido."
    }, 
    "48":{
      "autor": "saro",
      "fala": `Toma e aproveita enquanto pode, mortal.`,
    },
    "49":{
      "tipo": "narracao",
      "fala": "Jobin recebe alianças de Saro",
    }, 
    "50":{
      "tipo": "narracao",
      "fala": "fim.",
      "happy_end": true
    }, 
    "51": {
      "fala": "violão",
      "tipo": "escolha-fala",
      "index_opcoes": [52]
    },
    "52":{
      "tipo": "narracao",
      "fala": "usa o violão",
    },
    "53":{
      "autor": "Jobin",
      "fala": `... ♪ ... ♫`
    },
    "54":{
      "autor": "Jobin",
      "fala": `Ah! Se ela soubesse ♪ 
      Que quando ♪ ela passa,
      ♫ ♫ O mundo inteirinho se enche de graça
      E fica mais lindo ♫ por causa do amooor`,
    },
    "55":{
      "autor": "saro",
      "fala": `Ainda não te deu conta, Jobin?
      Música para os meus ouvidos é a tua agonia.`,
    },
    "56":{
      "tipo": "narracao",
      "fala": "Saro arremessa Jobin contra uma coluna de seu salão",
      "porrada": true,
      "next": 200
    },
    "200": {
      "autor": "Jobin",
      "fala": "AAaarrghh!!!"
    },
    "201":{
      "tipo": "narracao",
      "fala": "Jobin sangra. Pode suportar mais $hp golpes destes",
      "next": 25
    },
  }
const _capitulo2 = {
    "0": {
      "titulo": "Capítulo 2",
      "subtitulo": "O salão de Saro"
    },
    "1": {
      "tipo": "narracao",
      "fala": "entra no salão do rei demônio Saro"
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
    "25":{
      "autor": "saro",
      "fala": "Faça valer."
    },
  }
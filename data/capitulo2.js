const _capitulo2 = {
  "0": {
    "titulo": "Chapter 2",
    "subtitulo": "Saro's Hall",
  },
  "1": {
    "tipo": "narracao",
    "fala": "enters the hall of the demon king Saro",
  },
  "2": {
    "autor": "Saro",
    "fala": "Hmm? Who dares to enter the hall of Saro, the great demon king?",
  },
  "3": {
    "autor": "Saro",
    "fala": "Well, if it isn't a human! Take this, insolent one!",
    "porrada": true,
    "next": 5
  },
  "5": {
    "autor": "Jobin",
    "fala": "Aaargh!!!",
  },
  "6": {
    "tipo": "narracao",
    "fala": "Jobin bleeds in the hall. Can withstand $hp more of these blows",
    "next": 600
  },
  "600": {
    "autor": "Saro",
    "fala": "Still standing?",
    "next": "7"
  },
  "7": {
    "tipo": "escolha-fala",
    "index_opcoes": [8, 11, 13]
  },
  "8": {
    "autor": "Jobin",
    "fala": "Hey, why did you hit me, you scoundrel?"
  },
  "9": {
    "autor": "Saro",
    "fala": "Your insolence shall be rewarded with the combustion of your soul in the deepest flames of hell.",
  },
  "10": {
    "tipo": "narracao",
    "fala": "Jobin dies",
    "dead_end": true
  },
  "11": {
    "autor": "Jobin",
    "fala": "...forgive my intrusion, great Saro. Let me introduce myself."
  },
  "12": {
    "autor": "Saro",
    "fala": "Do it at once.",
    "next": 15
  },
  "13": {
    "autor": "Jobin",
    "fala": "What keeps me standing is love."
  },
  "14": {
    "autor": "Saro",
    "fala": "Useless worm. If you can speak, spit out your mediocre reason for being alive, cursed one.",
    "next": 15
  },
  "15": {
    "tipo": "escolha-fala",
    "index_opcoes": [16, 19, 22]
  },
  "16": {
    "autor": "Jobin",
    "fala": "I am Jobin, and I've come to take your most precious treasure."
  },
  "17": {
    "autor": "Saro",
    "fala": "HaHaHa! And how do you expect to do that? You are no match for me!",
  },
  "18": {
    "autor": "Jobin",
    "fala": "You'll see.",
    "next": 25
  },
  "19": {
    "autor": "Jobin",
    "fala": "Lord, I am but a servant of your brother Goro and his daughter Róssia."
  },
  "20": {
    "autor": "Saro",
    "fala": "You show courage, but if you make me lose more time, you will learn what despair is."
  },
  "21": {
    "autor": "Jobin",
    "fala": "Very well, I will show you what I've brought, just for you.",
    "next": 25
  },
  "22": {
    "autor": "Jobin",
    "fala": "Saro, I've come to bargain."
  },
  "23": {
    "autor": "Saro",
    "fala": "You show courage, but if you make me lose more time, you will learn what despair is."
  },
  "24": {
    "autor": "Jobin",
    "fala": "Allow me to present my offer.",
    "next": 25
  },
  "25": {
    "tipo": "escolha-fala",
    "index_opcoes": [26, 32, 40, 51]
  },
  "26": {
    "fala": "sword",
    "tipo": "escolha-fala",
    "index_opcoes": [27, 30]
  },
  "27": {
    "tipo": "narracao",
    "fala": "draws his sword",
  },
  "28": {
    "autor": "Saro",
    "fala": `HaHaHa!
    Is this your plan?
    Listen, everyone, to the sweet sound of this fool's agony.`,
  },
  "29": {
    "tipo": "narracao",
    "fala": "Saro strikes Jobin hard, and the sword flies away",
    "porrada": true,
    "next": 200
  },
  "30": {
    "tipo": "narracao",
    "fala": "offers the sword",
  },
  "31": {
    "autor": "Saro",
    "fala": `Do you think I, the great Saro, need a simple blade like this?
    Small in form but great in ignorance.`,
    "next": 29
  },
  "32": {
    "fala": "shield",
    "tipo": "escolha-fala",
    "index_opcoes": [33, 37]
  },
  "33": {
    "tipo": "narracao",
    "fala": "shields himself with the shield",
  },
  "34": {
    "autor": "Saro",
    "fala": `Do you think this piece of simple metal can stop the great Saro? Take this, insolent one!`,
  },
  "35": {
    "tipo": "narracao",
    "fala": "Jobin's shield blocks Saro's blow",
  },
  "36": {
    "autor": "Saro",
    "fala": `Well... Your shield is quite interesting.`,
    "next": 25
  },
  "37": {
    "tipo": "narracao",
    "fala": "offers the shield",
  },
  "38": {
    "autor": "Saro",
    "fala": `Do you think I'm frail, that I need an earthly shield???
    Cursed one!`,
  },
  "39": {
    "tipo": "narracao",
    "fala": "Saro throws the shield away and strikes Jobin",
    "porrada": true,
    "next": 200
  },
    "40": {
      "fala": "flor",
      "tipo": "escolha-fala",
      "index_opcoes": [41]
    }, 
    "41": {
      "tipo": "narracao",
      "fala": "offers the flower",
    },
    "42": {
      "autor": "Saro",
      "fala": `Well... Do you want to give this to me?
      My heart is pure darkness, boy.
      What makes you think I would want to receive this?`,
    },
    "43": {
      "tipo": "escolha-fala",
      "index_opcoes": [44, 45],
    },
    "44": {
      "autor": "Jobin",
      "fala": "Ah, it's true. My apologies.",
      "next": 25
    },
    "45": {
      "autor": "Jobin",
      "fala": "I can see the beauty within the darkness."
    },
    "46": {
      "autor": "Saro",
      "fala": `That reminds me...
      Tell me, lad. What do you desire?`,
    },
    "47": {
      "autor": "Jobin",
      "fala": "Saro, help me. I need your most precious treasure to win Róssia's hand. Without her, I am but a lost man."
    },
    "48": {
      "autor": "Saro",
      "fala": "Accept it and enjoy while you can, mortal. (Saro removes alliances from his own fingers)"
    },
    "49": {
      "tipo": "narracao",
      "fala": "Jobin receives the rings from Saro",
    },
    "50": {
      "tipo": "narracao",
      "fala": "end.",
      "happy_end": true
    },
    "51": {
      "fala": "guitar",
      "tipo": "escolha-fala",
      "index_opcoes": [52]
    },
    "52": {
      "tipo": "narracao",
      "fala": "plays the guitar",
    },
    "53": {
      "autor": "Jobin",
      "fala": `... ♪ ... ♫`
    },
    "54": {
      "autor": "Jobin",
      "fala": `Ah! Se ela soubesse ♪ 
      Que quando ♪ ela passa,
      ♫ ♫ O mundo inteirinho se enche de graça
      E fica mais lindo ♫ por causa do amooor`,
    },
    "55": {
      "autor": "Saro",
      "fala": `Haven't you realized yet, Jobin?
      Music to my ears is your agony.`,
    },
    "56": {
      "tipo": "narracao",
      "fala": "Saro hurls Jobin against a column in his hall",
      "porrada": true,
      "next": 200
    },
    "200": {
      "autor": "Jobin",
      "fala": "Aaargh!!!"
    },
    "201": {
      "tipo": "narracao",
      "fala": "Jobin bleeds. Can withstand $hp more blows like these",
      "next": 25
    }
  }    
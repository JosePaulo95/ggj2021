panel_dom = document.getElementById("#panel")

function runBlocosTests(context) {
    //console.assert(resetWorks.call(context), "resetWorks");
    console.assert(contentObedeceIndex.call(context), "contentObedeceIndex");
}

function resetWorks(){
    this.content.push({"titulo": 123})
    this.reset();

    checks = []
    checks.push([this.getContent.length, 0])

    return Check(checks);
}

function contentObedeceIndex(){
    this.goTo(0, 3);//capitulo 0, bloco 3, titulo mais 2 blocos opcionais
    checks = []

    checks.push([this.getPaginaInicial.titulo, "Prologo"])
    checks.push([this.getContent.length, 2])

    return Check(checks);
}
document.addEventListener("DOMContentLoaded", () => {
    const divSenhasNormais = document.querySelector(".senhas-normais");
    const divSenhasEspeciais = document.querySelector(".senhas-especiais");
    let id = 0;

    // Adicionar senha normal
    document.querySelector(".adicionar").addEventListener("click", () => {
        // Cria um elemento <li>
        const li = document.createElement("li");
        li.setAttribute("data-especial", false);

        li.innerText = id;
        divSenhasNormais.append(li);
        id++;
    })

    // Adicionar senha especial
    document.querySelector(".adicionar-especial").addEventListener("click", () => {
        const li = document.createElement("li");
        li.setAttribute("data-especial", true);
        const n = id;

        li.innerText = n;
        divSenhasEspeciais.append(li);
        id++;
    })

    // Remover senha normal
    document.querySelector(".remover").addEventListener("click", () => {
        const li = divSenhasNormais.querySelector("[data-especial='false']");
        li.remove();
    })


    // Remover senha especial
    document.querySelector(".remover-especial").addEventListener("click", () => {
        const lis = divSenhasEspeciais.querySelector("[data-especial='true']");
        lis.remove();
    })
})
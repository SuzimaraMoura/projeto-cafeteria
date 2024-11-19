/* Lógica de programação

 Saber quando o usuário clicou no botão
 Mudar o posicionamento do modal
 Fazer a máscara ficar visível
 Quando clicar na máscara fechar o modal

*/
/*Pra eu mudar o posicionamento do modal, tenho que buscar o modal no html e guardar dentro de uma const*/ 
const modal = document.querySelector(".modal")

/* Agora como eu preciso deixar a máscara visível, tenho que buscar a máscara no htm e guardar dentro de uma const*/ 
const mascara = document.querySelector('.mascara-modal')


/*Esta função é quando o usuário clica no botão de endereço */
function MostrarModal() {
    modal.style.left = "50%"/* Aqui foi a mudaça do modal que estava escondido para aparecer*/
    mascara.style.visibility = "visible"/*Aqui foi a máscara que apareceu, todo o conteúdo desparece e fica só o modal*/ 
}

/*Esta função é para quando eu clicar na máscara o modal desaparecer */
function EsconderModal() {
    modal.style.left = "-70%" /*Aqui o modal esconde */
    mascara.style.visibility = "hidden"/*Aqui a máscara esconde */
}
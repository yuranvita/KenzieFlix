function ClickProfile() {
  alert("Acessando Perfil do Usuário!");
}

function ClickSelectUser(props) {
  const user = document.getElementById(props).getAttribute("alt");

  alert(`Entrando no perfil ${user}`);
}

function AddUser() {
  alert("Adicionar Perfil");
}

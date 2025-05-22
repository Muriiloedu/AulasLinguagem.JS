const apiUrl = 'https://682a40bfab2b5004cb3648ce.mockapi.io/Animais';

// Função para carregar a lista de animais
async function carregarAnimais() {
  try {
    const response = await fetch(apiUrl);
    const animais = await response.json();

    const lista = document.getElementById('animalList');
    lista.innerHTML = '';

    animais.forEach(animal => {
      const item = document.createElement('li');

      const nome = animal.nome || animal.Nome || 'Desconhecido';
      const idade = animal.idade || animal.Idade || '?';
      const raca = animal.raca || animal.Raca || 'Indefinida';

      item.textContent = `${animal.id} - ${nome} (${idade}) – ${raca}`;
      lista.appendChild(item);
    });

  } catch (error) {
    document.getElementById('animalList').innerHTML = 'Erro ao carregar dados.';
    console.error('Erro ao buscar animais:', error);
  }
}

// Função para cadastrar um animal fixo
async function cadastrarAnimal() {
  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: 'Totó',
        idade: 12,
        raca: 'cachorro'
      })
    });

    carregarAnimais(); // Recarrega após cadastro

  } catch (error) {
    alert('Erro ao cadastrar animal.');
    console.error('Erro no POST:', error);
  }
}

// Executa ao carregar a página
carregarAnimais();
// port number da API
const baseurl = 'http://localhost:3000/tasks';

// função fetch para pegar os dados do endpoint da baseurl e retornar os arquivos JSON.
export const loadTasks = () => {
  return fetch(baseurl).then((res) => res.json());
};

// Função para criar tarefa fazendo uma requisição POST para a baseurl com as informações providas no corpo da requisição. O servidor devolve um arquivo JSON.
export const createTask = (task) => {
  return fetch(baseurl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

// Função para atualizar tarefa fazendo uma requisição PATCH para uma URL construída concatenando a baseurl com o id da tarefa que queremos atualizar.
export const updateTask = (task) => {
  return fetch(`${baseurl}/${task.id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};

// Função para deletar tarefa fazendo uma requisição DELETE para uma URL construída concatenando a baseurl com o id da tarefa que queremos excluir.
export const deleteTask = (task) => {
  return fetch(`${baseurl}/${task.id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

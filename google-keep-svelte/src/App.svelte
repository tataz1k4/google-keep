<script lang="ts">
  import 'carbon-components-svelte/css/white.css';
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import TaskList from './components/TaskList.svelte'
  import { onMount } from 'svelte'
  import { tasks } from './services/store';
  import { loadTasks, createTask, updateTask, deleteTask } from './services/taskService';
    import TaskForm from './components/TaskForm.svelte';

  onMount(async () => {
    tasks.set(await loadTasks());
    console.log('tasks', $tasks);
  })

  const getTasks = async () => {
    return await loadTasks();
  }

  const submitTask = async (task) => {
    await createTask(task);
    tasks.set(await loadTasks());
  }

  const updateStatus = async (task) => {
    let updatedTask = {...task, completed: !task.completed};
    console.log("Update Task", updatedTask);
    await updateTask(updatedTask);
    tasks.set(await loadTasks());
  }

  const deleteTaskItem = async (task) => {
    await deleteTask(task);
    tasks.set(await loadTasks());
  }
</script>

<main>
  <h2>Google Keep</h2>
  <TaskForm submitTask={submitTask}/>
  <TaskList tasks={$tasks} updateTask={updateStatus} deleteTask={deleteTaskItem}/>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

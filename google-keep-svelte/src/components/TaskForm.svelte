<script>
  import { Button, Column, Grid, Row, TextInput } from "carbon-components-svelte";
  import { loadTasks } from "../services/taskService";
  import { tasks } from "../services/store";
  import TaskList from "./TaskList.svelte";

  export let submitTask;
  let description = '';
  $: disabled = description.length < 3;
  const submit = async () => {
    submitTask({ description: description, completed: false });
    const tasks = await loadTasks();
    tasks.set(TaskList);
    description = '';
 }
</script>

<Grid>
  <Row>
    <Column>
      <TextInput placeholder="Nova tarefa" bind:value={description} />
    </Column>
    <Column>
      <Button type="submit" on:click={submit} disabled={disabled}>Adicionar</Button>
    </Column>
  </Row>
</Grid>

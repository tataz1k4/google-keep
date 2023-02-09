<script>
  export let tasks;
  export let updateTask;
  export let deleteTask;
  import {
    Checkbox,
    Button,
    Toggle,
    DataTable,
    Row,
    Column,
  } from 'carbon-components-svelte';
</script>

<h3>Lista de tarefas</h3>

<DataTable
  headers={[
    { key: 'description', value: 'Tarefa' },
    { key: 'completed', value: 'Completa' },
  ]}
  rows={tasks}
>
    <span slot="cell" let:row let:cell>
      { #if cell.key == 'completed' }
        <Row>
          <Column>
            <Toggle toggled={cell.value}
              on:toggle={(e) => updateTask(row)}
            />
          </Column>
          <Column>
            <Button kind='danger' on:click={(e) => deleteTask(row)}>Deletar</Button>
          </Column>
        </Row>
      {:else}{cell.value}{/if}
    </span>
</DataTable>


<style>
</style>

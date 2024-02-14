<script>
  import { afterUpdate } from 'svelte';
  import Option1 from './Option1.svelte';
  import Option2 from './Option2.svelte';
  import Option3 from './Option3.svelte';
  import Option4 from './Option4.svelte';

  let selections = [{ value: '', output: null }];

  function handleOptionKeyPress(event, index) {
    if (event.key === 'Enter') {
      const optionValue = selections[index].value.trim().toLowerCase();
      processOption(optionValue, index);
    }
  }

  function processOption(optionValue, index) {
    let component = null;
    switch (optionValue) {
      case 'option1':
        component = Option1;
        break;
      case 'option2':
        component = Option2;
        break;
      case 'option3':
        component = Option3;
        break;
      case 'option4':
        component = Option4;
        break;
      case 'clear':
        clearEverything();
        return;
      default:
        console.log('Invalid option');
        return;
    }

    if (component) {
      selections[index].output = component;
      if (index === selections.length - 1) {
        addSelection();
      }
    }
  }

  function addSelection() {
    selections = [...selections, { value: '', output: null }];
  }

  function clearEverything() {
    selections = [{ value: '', output: null }];
  }

  // Use afterUpdate to focus the last input field after every update
  afterUpdate(() => {
    const inputs = document.querySelectorAll('.option-input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  });
</script>

{#each selections as selection, index}
  <div>
    <input class="option-input" type="text" bind:value={selections[index].value} on:keydown={(event) => handleOptionKeyPress(event, index)} placeholder="Enter 'option1', 'option2', etc., or 'clear' to reset" />
    {#if selection.output}
      <svelte:component this={selection.output} />
    {/if}
  </div>
{/each}

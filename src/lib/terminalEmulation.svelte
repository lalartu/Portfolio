<script>
  import Help from './commands/help.svelte';
  import Error from './commands/error.svelte';
  import Whoareyou from './commands/whoareyou.svelte';
  import Ghost from './icons/Ghost.svelte';

  //variable that holds the command input of a user
  let inputCommand = ''; 
  //variable that holds the component to be rendered that contains the output for a prompted command
  let outputComponent = null; 

  // Function to process the command and set the appropriate component
  const processCommand = () => {
    switch (inputCommand) {
      case 'help':
        outputComponent = Help;
        break;
      case 'whoareyou':
        outputComponent = Whoareyou;
        break;
      //to clear the previous output and input area
      case 'clear':
        clearEverything();
        break;
      // Default switch behavior is set to display Error component for non-existing commands
      default:
        outputComponent = Error; 
    }
  }

  //clear the command input field and output
  const clearEverything = () => {
    inputCommand = '';
    outputComponent = null;
  }

  //listens for the Enter key in the single input field and triggers processCommand, which then updates outputComponent.
  const handleInput = (event) => {
    if (event.key === 'Enter') {
      processCommand();
    }
  }
</script>

<div class="flex gap-2 items-center justify-start font-ProFontIIxNerdFontRegular text-white">
  <Ghost className="w-6 h-6" />
  <span class="text-topbarViola font-bold">&#8594;</span>
  <input class="command-input border-0 outline-0 bg-terminalBg text-sm" type="text" 
    bind:value={inputCommand} 
    on:keydown={handleInput} />
</div>
<!-- dynamically renders the outputComponent if it's not null, immediately below the input field -->
<div class ="pl-2 text-sm text-white font-ProFontIIxNerdFontRegular">
  {#if outputComponent}
    <svelte:component this={outputComponent} />
  {/if}
</div>
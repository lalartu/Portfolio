<script>
  //imports
  import { afterUpdate } from 'svelte';
  import Help from './commands/help.svelte';
  import Error from './commands/error.svelte';
  import Whoareyou from './commands/whoareyou.svelte';
  import Novelli from './commands/novelli.svelte';
  import Cv from './commands/cv.svelte';
  import Typescript from './commands/typescript.svelte';
  import Javascript from './commands/javascript.svelte';
  import C from './commands/c.svelte';
  import Asm from './commands/asm.svelte';
  import Csharp from './commands/csharp.svelte';
  import Sql from './commands/sql.svelte';
  import Docker from './commands/docker.svelte';
  import Python from './commands/python.svelte';
  import Rust from './commands/rust.svelte';
  import Golang from './commands/golang.svelte';
  import Grpc from './commands/grpc.svelte';
  import Graphql from './commands/graphql.svelte';
  import Credits from './commands/credits.svelte';
  import Ghost from './icons/Ghost.svelte';
  //this array is to store the prompt objects (inputs&outputs)
  let prompts = [{ input: '', output: null }];
  //this array is to store a command history
  let commandHistory = [];
  //at the beginning when no command was enterd index is -1
  let commandHistoryIndex = -1;

  //function that processes a command entered by user
  const processCommand = (index) => {
    //makes terminal inputs case insensetive
    const inputCommand = prompts[index].input.trim().toLowerCase();
    //variable that holds an output Component
    let outputComponent;

    switch (inputCommand) {
      case 'help':
        outputComponent = Help;
        break;
      case 'disassemble main':
        outputComponent = Whoareyou;
        break;
        case 'disassemble cv':
        outputComponent = Cv;
        break;
        case 'x/s 0x402010':
        outputComponent = Novelli;
        break;
        case 'x/s 0x4020b4':
        outputComponent = Typescript;
        break;
        case 'x/s 0x4020bf':
        outputComponent = Javascript;
        break;
        case 'x/s 0x4020ca':
        outputComponent = C;
        break;
        case 'x/s 0x4020cc':
        outputComponent = Asm;
        break;
        case 'x/s 0x4020d0':
        outputComponent = Csharp;
        break;
        case 'x/s 0x4020d3':
        outputComponent = Sql;
        break;
        case 'x/s 0x4020d7':
        outputComponent = Docker;
        break;
        case 'x/s 0x4020de':
        outputComponent = Python;
        break;
        case 'x/s 0x4020e5':
        outputComponent = Rust;
        break;
        case 'x/s 0x4020ea':
        outputComponent = Golang;
        break;
        case 'x/s 0x4020f1':
        outputComponent = Grpc;
        break;
        case 'x/s 0x4020f6':
        outputComponent = Graphql;
        break;
        case 'credits':
        outputComponent = Credits;
        break;
      case 'clear':
        clearEverything();
        //in step 3 this case was ending with break, but it is changed to return
        return;
      default:
        outputComponent = Error;
    }

    prompts[index].output = outputComponent;
    // THIS PART PARTICIPATE IN THE RENDERING OF NEW PROMPTS AFTER EACH OUTPUT
    if (inputCommand !== 'clear') {
      //adds a new prompt object to the prompts array if the command isn't "clear":
      prompts = [...prompts, { input: '', output: null }];
    }
  };
  //function that re-initializes the array that holds prompts - clearing terminal area
  const clearEverything = () => {
    prompts = [{ input: '', output: null }];
  };
  //function that handles the keys  - Enter, Arrow Up and Arrow Down
  const handleInput = (event, index) => {
    //coursour should be moved to the end of command when user uses a command history
    let moveCursor = false;

    if (event.key === 'Enter') {
      //when user presses enter - promted input is pusshed to array of command history
      commandHistory.push(prompts[index].input.trim().toLowerCase());
      //index is set yo point to the last element in the array of history
      commandHistoryIndex = commandHistory.length;
      //when enter is pressed function processCommand is triggered 
      processCommand(index);
    } else if (event.key === 'ArrowUp') {
      //if there is something in the Command history
      if (commandHistoryIndex > 0) {
        //decrements the commandHistoryIndex by 1. 
        //moves the position one step back in the command history array, 
        //selecting the previous command.
        commandHistoryIndex--;
        //updates the current input field with the command retrieved from the command history
        prompts[index].input = commandHistory[commandHistoryIndex];
        //in this case caret should be moved 
        moveCursor = true;
      }
    } else if (event.key === 'ArrowDown') {
      //checks if the commandHistoryIndex is less than the total number of commands 
      //stored in commandHistory minus one. 
      //ensures there's a next command in the history to navigate to.
      if (commandHistoryIndex < commandHistory.length - 1) {
        //increments commandHistoryIndex by one, moving the history index to the next command.
        commandHistoryIndex++;
        //updates the current input with the next command in the history
        prompts[index].input = commandHistory[commandHistoryIndex];
        //handles the case where the commandHistoryIndex is the last command in the history
      } else if (commandHistoryIndex === commandHistory.length - 1) {
        // resets the command history index
        commandHistoryIndex = commandHistory.length;
        //clears the input if going beyond the last command
        prompts[index].input = '';
      }
      //again, in this case caret should be moved
      moveCursor = true;
    }

    // when cursor should be moved (true) then:
    if (moveCursor) {
      //trigger cursor movement after a slight delay to ensure the DOM has time to update
      setTimeout(() => {
        //selects the input field based on its class name .command-input
        const userInput = document.querySelectorAll('.command-input')[index];
        /*         inputElement.focus(); */
        //used to set the start and end positions of a caret in the input field. 
        //By setting both the start and end positions to userInput.value.length, 
        //the cursor is forced to move to the end of the text currently in the input field.
        userInput.setSelectionRange(userInput.value.length, userInput.value.length);
      }, 0);
    }
  };
  //sets the focus on the each newly generate prompt so the user does not have
  //to click input are
  afterUpdate(() => {
    const inputs = document.querySelectorAll('.command-input');
    if (inputs.length > 0) {
      inputs[inputs.length - 1].focus();
    }
  });
</script>

<div>
  <!--- The {#each prompts as prompt, index} block iterates over the prompts array.
  For each prompt object in the array, it first renders an input field. 
  This is where the user types their command. -->
  {#each prompts as prompt, index (index)}
    <div class="hidden md:flex gap-2 items-center justify-start font-ProFontIIxNerdFontRegular text-white py-2 ">
      <h1 class="text-topbarViola text-sm font-bold"> <pre>(gdb)</pre> </h1>
      <input class="command-input border-0 outline-0 bg-terminalBg text-sm" type="text" bind:value={prompt.input} on:keydown={(event) => handleInput(event, index)} />
    </div>
    <!--checks if there's an output associated with the current prompt. 
    If there is, it renders the output right below the input field -->
    {#if prompt.output}
      <div class="pl-2 text-sm text-white font-ProFontIIxNerdFontRegular">
        <svelte:component this={prompt.output} />
      </div>
    {/if}
  {/each}
</div>
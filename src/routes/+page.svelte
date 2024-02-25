<script>
  import WhiteCat from '../lib/icons/WhiteCat.svelte';
  import WhiteCatAngry from '../lib/icons/WhiteCatAngry.svelte';
  import OctoCat from '../lib/icons/OctoCat.svelte';
  import ShrinkingSquare from '../lib/icons/ShrinkingSquare.svelte';
  import ExpansionSquare from '../lib/icons/ExpansionSquare.svelte';
  import TerminalEmulation from '../lib/terminalEmulation.svelte';
  import About from '../lib/about.svelte';

  /* expansion of Terminal window */
  let isExpanded = false;

  const toggleExpansion = () => {
    isExpanded = !isExpanded;
  };
</script>

<!--------------------------------------------------------------- background ---------------------------------------------------------------->
<div class="w-screen h-screen bg-gradient-to-r from-gradientBg1 to-gradientBg2 flex flex-col items-center justify-center">
  <!------------------------------------------------------------ terminal container ------------------------------------------------------------>
  <div class={`${isExpanded ? 'w-[96%] h-[90%]' : 'w-[700px] h-[500px] lg:w-[800px] lg:h-[600px]'} flex flex-col border-8 border-topbarBg rounded-lg bg-topbarBg`}>
    <!--------------------------------------------------------- Terminal's TopBar ------------------------------------------------------------->
    <div class="relative flex flex-col items-center">
      <!-- SVG Kitty on the top of terminal-->
      <div class={`${isExpanded ? 'hidden' : 'block'} absolute -top-9`}>
        <WhiteCat className="w-10 h-auto" />
      </div>

      <div class={`${isExpanded ? 'block' : 'hidden'} absolute -top-14`}>
        <WhiteCatAngry className="w-14 h-auto" />
      </div>

      <!-- topbar of terminal -->
      <div class="w-full border-topbarBg flex justify-end items-center -mt-2 gap-3 pr-2 p-3">
        <!-- button to resize terminal -->

        <button class="flex items-center justify-center rounded-full border-2 border-accentBlue bg-topbarBlue w-6 h-6 hover:bg-topbarViola focus:bg-topbarBlue" on:click={toggleExpansion}>
          <ExpansionSquare className={`${isExpanded ? 'hidden' : 'block'} w-3 h-3 text-terminalBg`} />

          <ShrinkingSquare className={`${isExpanded ? 'block' : 'hidden'} w-3 h-3 text-terminalBg`} />
        </button>
        <a href="https://github.com/dev-charodeyka" target="_blank" class="flex items-center justify-center rounded-full box-border bg-topbarOrange border-2 border-accentOrange w-6 h-6 hover:bg-topbarGreen">
          <OctoCat className="w-4 h-4 text-terminalBg" />
        </a>
      </div>
    </div>

    <!-- terminal-area itself -->
    <div class="w-full flex-1 bg-terminalBg pt-2 overflow-y-scroll scrollbar">
      <About />
      <TerminalEmulation />
    </div>
  </div>
</div>

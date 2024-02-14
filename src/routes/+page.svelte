<script>
  import ExpansionSquare from '../components/icons/ExpansionSquare.svelte';
  import Ghost from '../components/icons/Ghost.svelte';
  import OctoCat from '../components/icons/OctoCat.svelte';
  import ShrinkingSquare from '../components/icons/ShrinkingSquare.svelte';
  import WhiteCat from '../components/icons/WhiteCat.svelte';
  /* import Terminalnputs from '../components/terminalnputs.svelte'; */

  /* expansion of Terminal window */
  let isExpanded = false;
  let isSvgExpansionShown = true;

  function toggleExpansion() {
    isExpanded = !isExpanded;
    isSvgExpansionShown = !isSvgExpansionShown;
  }
</script>

<!-- background -->
<div class="w-screen h-screen bg-gradient-to-r from-gradientBg1 to-gradientBg2 flex flex-col items-center justify-center">
  <div class="relative flex flex-col items-center">
    <!-- SVG Kitty on the top of terminal-->
    <div class="absolute -top-7 z-10">
      <WhiteCat className="w-10 h-auto" />
    </div>
    <!-- topbar of terminal -->
    <nav class={`container ${isExpanded ? 'w-[96%]' : 'w-[700px]'} h-[40px] bg-topbarBg border-x-8 border-t-8 border-topbarBg rounded-t-lg `}>
      <!-- button to resize terminal -->
      <div class="flex justify-end gap-2 items-center px-1">
        <button on:click={toggleExpansion} class="flex items-center justify-center rounded-full border-2 border-accentBlue bg-topbarBlue w-6 h-6 hover:bg-topbarViola">
          <ExpansionSquare className="w-3 h-3 text-terminalBg" />

          <ShrinkingSquare className="hidden w-6 h-6 text-terminalBg" />
        </button>
        <button class="flex items-center justify-center rounded-full bg-topbarOrange border-2 border-accentOrange w-6 h-6 hover:bg-topbarGreen">
          <OctoCat className="w-4 h-4 text-terminalBg" />
        </button>
      </div>
    </nav>
  </div>

  <!-- terminal itself -->
  <div class={`container ${isExpanded ? 'w-[96%] h-[90%]' : 'w-[700px] h-[500px]'} bg-terminalBg border-x-8 border-b-8 border-topbarBg rounded-b-lg`}>
    <div class="flex gap-2 items-center justify-start m-2">
      <Ghost className="w-6 h-6" />
      <span class="text-topbarViola font-bold text-xl">~</span>
    
    <!-- <Terminalnputs /> -->
      <input class="option-input" type="text" />
	</div>
  </div>
</div>

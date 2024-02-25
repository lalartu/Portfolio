<script>
    import { onMount, createEventDispatcher } from 'svelte';

    export let text = '';
    let displayedText = '';
    let index = 0;
    const dispatch = createEventDispatcher();

    function typeWriter() {
        if (index < text.length) {
            displayedText += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else {
            dispatch('complete');
        }
    }

    onMount(typeWriter);
</script>

<p>{displayedText}</p>
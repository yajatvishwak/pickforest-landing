<script>
    import "../app.css";
</script>
  
<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    :global(body){
        @apply bg-palette-yellow50;
        font-family: 'Space Grotesk', sans-serif;
    }
</style>

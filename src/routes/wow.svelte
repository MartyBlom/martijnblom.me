<script>
    // Define social links and cards data
    const socialLinks = [
      { url: 'https://youtube.com/@martyslog', label: '@martyslog', icon: 'fab fa-youtube', color: 'text-red-500' },
      { url: 'https://instagram.com/martijn_blom', label: '@martijn_blom', icon: 'fab fa-instagram', color: 'text-pink-500' },
      { url: 'https://twitter.com/martinifp', label: '@martinifp', icon: 'fab fa-twitter', color: 'text-blue-400' }
    ];
  
    const cards = [
      { 
        title: 'Life philosophy', 
        description: 'Truly believe in the message of this video (not the sponsor lol)', 
        icon: 'fas fa-heart', 
        url: 'https://www.youtube.com/watch?v=BEB_uQ98SO4', 
        buttonLabel: 'Watch', 
        color: 'bg-red-600'
      },
      { 
        title: 'Polarsteps', 
        description: 'Follow me on all my trips!', 
        icon: 'fas fa-compass', 
        url: 'https://www.polarsteps.com/MARTlJN', 
        buttonLabel: 'Follow me', 
        color: 'bg-blue-500'
      },
      { 
        title: 'Goodreads', 
        description: 'Dive into my latest reads and book recommendations', 
        icon: 'fab fa-goodreads', 
        url: 'https://www.goodreads.com/user/show/111211739-martijn', 
        buttonLabel: 'Click here', 
        color: 'bg-yellow-600'
      },
      { 
        title: 'Dreamy, shoegazey goodness', 
        description: 'Want to listen to some dreamy shoegaze?', 
        icon: 'fab fa-spotify', 
        url: 'https://open.spotify.com/playlist/6zFKSqBDLZT0gu4ErpqXfE?si=dfae2240080243e6', 
        buttonLabel: 'Click here', 
        color: 'bg-green-500'
      }
    ]; 
</script>
  
  <main class="min-h-screen bg-black text-white font-sans flex flex-col items-center">
    <header class="text-center mt-12 animate-fade-in-up">
      <h1 class="text-6xl font-semibold leading-snug">capturing the present,<br /> dreaming of the future</h1>
    </header>
  
    <div class="mt-8 flex justify-center space-x-4 animate-fade-in-up" style="animation-delay: 0.5s">
      {#each socialLinks as link}
        <a href={link.url} target="_blank" class="flex items-center space-x-2 {link.color}">
          <i class={link.icon}></i>
          <span class="text-sm">{link.label}</span>
        </a>
      {/each}
    </div>
  
    <section class="mt-12 flex flex-col items-center space-y-6 animate-fade-in-up" style="animation-delay: 1s">
      {#each cards as card, i}
        <div class="flex items-center p-4 w-full max-w-md bg-gray-800 rounded-md shadow-md space-x-4 animate-fade-in-up" style={`animation-delay: ${1 + i * 0.25}s`}>
          <div class="flex items-center justify-center w-12 h-12 rounded-full {card.color}">
            <i class={card.icon}></i>
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-bold">{card.title}</h2>
            <p class="text-sm text-gray-400">{card.description}</p>
          </div>
          <a href={card.url} target="_blank" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">{card.buttonLabel}</a>
        </div>
      {/each}
    </section>
  
    <footer class="mt-12 text-center text-gray-500 animate-fade-in-up" style="animation-delay: 2s">
      <p>&copy; 2024 Martijn Blom</p>
    </footer>
  </main>
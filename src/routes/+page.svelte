<script>
    const socialLinks = [
      { url: 'https://youtube.com/@martyslog', label: '@martyslog', icon: 'fab fa-youtube', color: 'text-red-500' },
      { url: 'https://instagram.com/martijn_blom', label: '@martijn_blom', icon: 'fab fa-instagram', color: 'text-pink-500' },
      { url: 'https://twitter.com/martinifp', label: '@martinifp', icon: 'fab fa-twitter', color: 'text-blue-400' }
    ];
  
    const cards = [
  { 
    title: 'Life philosophy', 
    description: 'Truly believe in the message of this video', 
    icon: 'fas fa-heart', 
    url: 'https://www.youtube.com/watch?v=BEB_uQ98SO4', 
    buttonLabel: 'Watch here', 
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
    buttonLabel: 'Listen here', 
    color: 'bg-green-500'
  },
  { 
    title: 'Letterboxd', 
    description: 'Check out my movie reviews and watchlist', 
    icon: 'fas fa-film', 
    url: 'https://letterboxd.com/martinifp', 
    buttonLabel: 'See my movie picks', 
    color: 'bg-purple-600'
  },
  { 
    title: 'Just Do', 
    description: "A nice letter for when you're feeling stuck.", 
    icon: 'fas fa-pen-fancy', 
    url: 'https://youtu.be/VnSMIgsPj5M?si=g9q-Tu3G99fGv585', 
    buttonLabel: 'Watch here', 
    color: 'bg-orange-500'
  }
];
const currentYear = new Date().getFullYear();
  </script>
  
  <main class="min-h-screen bg-neutral-900 text-neutral-100 font-sans px-4">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center mt-8 md:mt-16 flex items-center justify-center">
      <div class="text-center text-white px-6">
        <h1 
          class="max-w-xl text-3xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeInUp"
          style="animation-delay: 0s;"
        >
        Creating, building, and sharing what matters
        </h1>
        <p 
          class="text-lg mb-6 opacity-0 animate-fadeInUp"
          style="animation-delay: 0.2s;"
        >
          Welcome to my digital garden.
        </p>
      </div>
    </section>
  
    <!-- Social Links -->
    <nav 
      class="flex justify-center space-x-4 md:space-x-6 opacity-0 animate-fadeInUp"
      style="animation-delay: 0.4s;"
    >
      {#each socialLinks as link}
        <a 
          href={link.url} 
          target="_blank" 
          class="flex items-center space-x-1 text-sm md:text-lg {link.color} hover:opacity-80 transition"
        >
          <i class={link.icon}></i>
          <span class="font-medium">{link.label}</span>
        </a>
      {/each}
    </nav>
  
    <!-- Card Section -->
    <section class="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cards as card, i}
        <div 
          class="p-6 rounded-lg shadow-lg bg-neutral-800 text-white flex flex-col items-start opacity-0 animate-fadeInUp"
          style="animation-delay: {i * 0.2 + 0.6}s;"
        >
          <div class="w-12 h-12 flex items-center justify-center rounded-full mb-4 {card.color}">
            <i class="text-2xl text-white {card.icon}"></i>
          </div>
          <h2 class="text-xl font-bold mb-2">{card.title}</h2>
          <p class="text-neutral-400 mb-4">{card.description}</p>
          <a 
            href={card.url} 
            target="_blank" 
            class="inline-block mt-auto px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 transition"
          >
            {card.buttonLabel}
          </a>
        </div>
      {/each}
    </section>    
  
    <!-- Footer -->
  <footer 
  class="mt-16 text-center text-neutral-400 text-sm opacity-0 animate-fadeInUp"
  style="animation-delay: {0.6 + cards.length * 0.2}s;"
>
  &copy; {currentYear} Martijn Blom. All Rights Reserved.
</footer>
  </main>
  
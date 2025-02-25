<template>
  <div class="min-h-screen bg-backgroundDark text-textLight font-sans">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-backgroundDark/90 backdrop-blur-md">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-orange">Brittany Chiang</a>
        <nav class="hidden md:flex space-x-8">
          <a href="#about" class="hover:text-orange transition-colors">About</a>
          <a href="#experience" class="hover:text-orange transition-colors">Experience</a>
          <a href="#work" class="hover:text-orange transition-colors">Work</a>
          <a href="#contact" class="hover:text-orange transition-colors">Contact</a>
        </nav>
        <button class="md:hidden text-orange">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center text-center">
      <div>
        <p class="text-orange text-lg mb-2">Hi, my name is</p>
        <h1 class="text-6xl font-bold mb-4">Brittany Chiang.</h1>
        <h2 class="text-4xl text-textDark">I build things for the web.</h2>
        <p class="max-w-2xl mx-auto mt-6 text-textDark">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        </p>
        <a href="#work" class="mt-8 inline-block px-8 py-3 bg-orange text-backgroundDark font-bold rounded-lg hover:bg-orange-dark transition-colors">
          Check out my work
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-textLight mb-8">About Me</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-textDark mb-4">
              Hello! I'm Brittany, a software engineer based in Boston, MA. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p class="text-textDark mb-4">
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p class="text-textDark mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <ul class="grid grid-cols-2 gap-2 text-textDark">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="flex justify-center">
            <div class="w-64 h-64 bg-orange rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-backgroundDarker">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-textLight mb-8">Experience</h2>
        <div class="space-y-8">
          <div v-for="(exp, index) in experiences" :key="index" class="bg-backgroundDark p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-orange">{{ exp.company }}</h3>
            <p class="text-textDark">{{ exp.role }} | {{ exp.duration }}</p>
            <p class="text-textDark mt-4">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-textLight mb-8">Work</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index" class="bg-backgroundDarker p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-orange">{{ project.title }}</h3>
            <p class="text-textDark mt-2">{{ project.description }}</p>
            <a :href="project.link" class="mt-4 inline-block text-orange hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-backgroundDarker">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-textLight mb-4">Get In Touch</h2>
        <p class="text-textDark mb-8">
          I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a href="mailto:brittany.chiang@gmail.com" class="px-8 py-3 bg-orange text-backgroundDark font-bold rounded-lg hover:bg-orange-dark transition-colors">
          Say Hello
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-backgroundDark text-center">
      <p class="text-textDark">Designed & Built by Brittany Chiang</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      experiences: [
        {
          company: "Upstatement",
          role: "Engineer",
          duration: "May 2018 - Present",
          description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, and more.",
        },
        {
          company: "Apple",
          role: "Software Engineer",
          duration: "Jul 2017 - May 2018",
          description: "Worked on the Apple News team, building features and improving performance for millions of users.",
        },
      ],
      projects: [
        {
          title: "Project 1",
          description: "A cool project I built using React and Node.js.",
          link: "#",
        },
        {
          title: "Project 2",
          description: "A responsive website designed with Tailwind CSS.",
          link: "#",
        },
        {
          title: "Project 3",
          description: "An interactive dashboard built with Vue.js.",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
/* Custom styles */
body {
  background-color: #0a192f; /* Background color */
  color: #ccd6f6; /* Text color */
}

.bg-backgroundDark {
  background-color: #0a192f;
}

.bg-backgroundDarker {
  background-color: #112240;
}

.text-textLight {
  color: #ccd6f6;
}

.text-textDark {
  color: #8892b0;
}

.text-orange {
  color: #ff8c00;
}

.bg-orange {
  background-color: #ff8c00;
}

.hover\:bg-orange-dark:hover {
  background-color: #e67e00;
}
</style>
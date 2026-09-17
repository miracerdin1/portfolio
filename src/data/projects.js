const projects = [
  {
    title: 'LinkFlow',
    tag: 'Flagship · Full-Stack',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Expo'],
    desc: 'A bookmark and shared-collection manager: an Expo mobile client backed by a hardened TypeScript API that scrapes link metadata safely and serves it in real time.',
    links: [
      { label: 'Mobile client →', href: 'https://github.com/miracerdin1/mobile' },
      { label: 'Server →', href: 'https://github.com/miracerdin1/linkflow-server' },
    ],
  },
  {
    title: 'BookApp',
    tag: 'Frontend · Vue',
    stack: ['Vue 3', 'Vite', 'TypeScript', 'Pinia', 'Tailwind'],
    desc: 'A lightweight reading tracker built on Vue 3 and Vite, with Pinia for state and Tailwind/SCSS for styling.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin1/bookapp' }],
  },
  {
    title: 'Nuxt 3 Portfolio',
    tag: 'Frontend · Vue',
    stack: ['Nuxt 3', 'Vue', 'Portfolio'],
    desc: 'İlk Nuxt 3 deneyimim: kişisel portföyümü Vue ekosisteminde sıfırdan kurduğum proje.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin/nuxt3-portfolio' }],
  },
  {
    title: 'MERN E-Commerce',
    tag: 'Full-Stack · TypeScript',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'pnpm'],
    desc: 'A pnpm-workspace monorepo splitting client, server and shared packages for a full MERN storefront.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin1/mern-e-commerce' }],
  },
  {
    title: 'Firebase Chat App',
    tag: 'Realtime · React',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    desc: 'Firebase Authentication ve Realtime Database üzerine kurulu, Tailwind CSS ile tasarlanmış canlı sohbet uygulaması.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin/chat-app-react-firebase-tailwind' }],
  },
  {
    title: 'Budget Tracker',
    tag: 'Full-Stack · TypeScript',
    stack: ['TypeScript', 'React', 'Finans'],
    desc: 'Gelir ve giderleri kaydedip zaman içindeki harcamaları görselleştiren kişisel bütçe takip uygulaması.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin/budget-tracker' }],
  },
  {
    title: 'Movie App',
    tag: 'Frontend · React',
    stack: ['React', 'Firebase', 'Auth'],
    desc: 'Firebase tabanlı kullanıcı girişiyle korunan film keşif uygulaması — detaylar yalnızca giriş yapınca görünür.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin/movie-app' }],
  },
  {
    title: 'AI Trader',
    tag: 'Automation · Python',
    stack: ['Python', 'Sentiment Analysis', 'Telegram Bot API'],
    desc: 'A signal-generation bot that blends technical indicators with news sentiment analysis, then pushes trade signals straight to Telegram.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin1/ai_trader' }],
  },
  {
    title: 'MacBook Price Tracker',
    tag: 'Automation · Python',
    stack: ['Python', 'SQLite', 'GitHub Actions'],
    desc: 'Scrapes MacBook listings on a schedule via GitHub Actions, stores price history in SQLite, and flags meaningful drops — 1,700+ automated commits and counting.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin1/macbook_price_tracker' }],
  },
  {
    title: 'Sesli Asistan',
    tag: 'AI · Python',
    stack: ['Python', 'Flask', 'Gemini AI', 'Speech Recognition'],
    desc: 'A Turkish voice assistant that opens and writes local files on spoken command and answers questions through a Gemini AI integration.',
    links: [{ label: 'Repository →', href: 'https://github.com/miracerdin1/sesli-asistan' }],
  },
]

export default projects

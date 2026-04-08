import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Globe, 
  Quote, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Mountain
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c2c2c] selection:bg-amber-100 font-serif scroll-smooth">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        scrollY > 50 ? "bg-white/80 backdrop-blur-md py-4 border-stone-200" : "bg-transparent py-8 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter uppercase font-sans">Достоинство</div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest font-sans">
            <a href="#philosophy" className="hover:text-amber-700 transition-colors">Философия</a>
            <a href="#history" className="hover:text-amber-700 transition-colors">История</a>
            <a href="#stories" className="hover:text-amber-700 transition-colors">Личности</a>
            <a href="#modern" className="hover:text-amber-700 transition-colors">Сегодня</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-stone.jpg')" }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-8xl text-white font-medium mb-8 leading-tight">
              Бедность — <br/>
              <span className="italic font-light text-stone-300">не порок</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Исследование человеческой души, которая светит ярче в самые темные времена истории.
            </p>
            <div className="h-20 w-px bg-amber-500/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section id="philosophy" className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-600 font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Введение в суть</span>
          <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Глубокий смысл простой фразы</h2>
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-sans">
            <p>
              Слова Александра Островского, ставшие крылатыми, несут в себе не оправдание нужды, а утверждение незыблемости человеческого достоинства.
            </p>
            <p>
              В мире, где успех часто измеряется цифрами на счету, мы забываем, что бедность — это лишь внешнее обстоятельство, состояние кошелька, но не состояние духа. Порок — это алчность, предательство и пустота сердца. Бедность же может быть спутником благородства.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 italic text-2xl text-stone-800 my-8">
              "Человек стоит столько, сколько стоит то, о чем он хлопочет."
            </blockquote>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src="/images/history-grain.jpg" alt="Atmospheric history" className="w-full h-full object-cover grayscale opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
            <p className="text-white font-sans italic text-sm">Стойкость в простоте. Эпоха великих перемен.</p>
          </div>
        </motion.div>
      </Section>

      {/* Historical Eras - The Suffering and the Strength */}
      <div id="history" className="bg-stone-900 text-stone-200 py-24">
        <Section>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Эпохи великих испытаний</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-sans">Когда мир погружался во тьму нужды, свет человечности становился острее.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Великая Депрессия",
                period: "1929 — 1939",
                desc: "Глобальный экономический крах, оставивший миллионы без крова. В это время родилась культура взаимопомощи, когда сосед делился последним куском хлеба с соседом.",
                icon: <Globe className="w-8 h-8 text-amber-500" />
              },
              {
                title: "Блокада Ленинграда",
                period: "1941 — 1944",
                desc: "Предел человеческого страдания. Люди, умирая от голода, сохраняли библиотеки, играли симфонии и спасали семена редких растений для будущего.",
                icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
              },
              {
                title: "Послевоенная Европа",
                period: "1945 — 1955",
                desc: "Целые нации начинали с нуля среди руин. Эпоха, когда достоинство заключалось в труде по восстановлению мира, несмотря на отсутствие элементарных благ.",
                icon: <Mountain className="w-8 h-8 text-amber-500" />
              },
              {
                title: "Индустриальная Революция",
                period: "XIX век",
                desc: "Время чудовищной городской бедности, описанное Диккенсом и Достоевским. Именно в этой грязи родились идеи о правах человека и социальной справедливости.",
                icon: <Zap className="w-8 h-8 text-amber-500" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="mb-6">{item.icon}</div>
                <span className="text-amber-500 font-sans font-bold text-sm mb-2 block">{item.period}</span>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Specific Cases Section */}
      <Section id="stories">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl font-medium mb-6">Специфические случаи стойкости</h2>
            <p className="text-stone-600 text-lg mb-8 font-sans">История знает тех, кто превратил свою нужду в высшую форму духовной свободы или научного подвига.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-amber-700 font-bold uppercase tracking-widest text-xs font-sans">
                <div className="h-px w-8 bg-amber-700" />
                Великие примеры
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-20">
            {[
              {
                name: "Виктор Франкл",
                context: "Концлагеря Третьего рейха",
                story: "Потеряв всё — семью, рукопись всей жизни, одежду и имя, Франкл обнаружил 'последнюю человеческую свободу': право выбирать свое отношение к обстоятельствам. В глубочайшей нищете и страдании он создал логотерапию, помогающую миллионам найти смысл жизни.",
                tags: ["Смысл", "Психология", "Выживание"]
              },
              {
                name: "Мария Кюри",
                context: "Париж, годы учебы",
                story: "Живя в неотапливаемой мансарде и питаясь лишь хлебом с чаем, Мария работала по 12 часов в день. Её бедность была ценой за знания, которые позже перевернули физику и химию. Она дважды стала лауреатом Нобелевской премии, оставаясь равнодушной к богатству.",
                tags: ["Наука", "Самоотречение", "Гений"]
              },
              {
                name: "Диоген Синопский",
                context: "Древняя Греция",
                story: "Философ, который сознательно выбрал бедность как путь к истине. Живя в пифосе (большом сосуде), он демонстрировал, что человек может быть свободным и счастливым, не имея ничего, кроме своего ума. Его ответ Александру Македонскому — 'Отойди, ты заслоняешь мне солнце' — стал символом независимости духа.",
                tags: ["Философия", "Аскетизм", "Свобода"]
              },
              {
                name: "Уильям Камквамба",
                context: "Малави, 2000-е годы",
                story: "Подросток из бедной деревни, охваченной голодом, не мог оплатить школу. С помощью старого учебника по физике и выброшенных на свалку запчастей он построил ветряную мельницу, чтобы качать воду для своей деревни. Это случай, когда отсутствие ресурсов не смогло остановить силу интеллекта и любви к своей семье.",
                tags: ["Инновации", "Стойкость", "Надежда"]
              }
            ].map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-3xl font-medium">{person.name}</h3>
                  <span className="text-stone-400 text-sm font-sans italic">— {person.context}</span>
                </div>
                <p className="text-xl text-stone-600 leading-relaxed mb-6 font-sans">
                  {person.story}
                </p>
                <div className="flex gap-2">
                  {person.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-xs font-sans uppercase font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px w-full bg-stone-200 group-last:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Modern Context */}
      <div id="modern" className="bg-amber-50 py-24">
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="w-12 h-12 text-amber-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-medium mb-8">Как это сейчас?</h2>
            <div className="space-y-8 text-xl text-stone-700 font-sans leading-relaxed">
              <p>
                Сегодня бедность часто прячется за экранами смартфонов или живет в тени мегаполисов. Но проблема не только в отсутствии средств, но и в стигматизации.
              </p>
              <p className="font-medium text-stone-900">
                Миру не нужна жалость. Миру нужна эмпатия и системные изменения.
              </p>
              <p>
                Современные герои — это те, кто, находясь в трудных условиях, продолжают учиться, созидать и помогать другим. Это беженцы, сохраняющие культуру, это молодые таланты из глубинок, это волонтеры, отдающие последнее время.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 bg-stone-900 text-white rounded-full font-sans font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors inline-flex items-center gap-3"
            >
              Поддержать идеи достоинства <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </Section>
      </div>

      {/* Deep Quotes Slider / Grid */}
      <Section className="border-t border-stone-200">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-stone-100 p-12 rounded-[3rem] flex flex-col justify-between">
            <Quote className="w-10 h-10 text-stone-300 mb-8" />
            <div>
              <p className="text-2xl italic mb-6">"Богатство — это не то, сколько у тебя денег, а то, сколько ты стоишь без них."</p>
              <p className="font-sans font-bold uppercase tracking-widest text-sm text-amber-700">— Мудрость веков</p>
            </div>
          </div>
          <div className="bg-stone-900 text-white p-12 rounded-[3rem] flex flex-col justify-between">
            <Mountain className="w-10 h-10 text-amber-500/50 mb-8" />
            <div>
              <p className="text-2xl italic mb-6">"Самые красивые цветы часто растут из самых глубоких трещин в асфальте."</p>
              <p className="font-sans font-bold uppercase tracking-widest text-sm text-stone-400">— О человеческой стойкости</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-100 py-16 px-6 border-t border-stone-200 text-center font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-stone-400 text-sm uppercase tracking-[0.3em] mb-4">Проект-размышление</p>
          <p className="text-stone-600 text-lg mb-8 italic">Бедность — не порок. Порок — это отсутствие души.</p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"><BookOpen className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"><Heart className="w-4 h-4" /></a>
          </div>
          <p className="text-stone-400 text-xs">&copy; 2026 Хроники Достоинства. Все мысли свободны.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import { Brain, Users, Lightbulb, Target, ChevronRight, Bot, Cpu, Network, Shield, TrendingUp, Clock, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#011627] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Text Section */}
        <div className="container mx-auto px-4 sm:px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-cyan-400">AI-решения</span> для<br className="hidden sm:block" />
            будущего вашего бизнеса
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Трансформируйте свой бизнес с помощью передовых решений искусственного интеллекта.
            Откройте новые возможности с корпоративными AI-технологиями Cyber Lab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://t.me/Cyber_lab_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-[#011627] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition flex items-center justify-center gap-2"
            >
              Начать <ChevronRight size={20} />
            </a>
            <button 
              onClick={() => document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition"
            >
              Узнать больше
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-20">
          <div className="flex justify-center">
            <a
              href="https://t.me/Cyber_lab_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[200px] sm:w-[280px] aspect-square group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 scale-105"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden transform group-hover:scale-[1.02] transition-all duration-700 ease-out active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="https://i.ibb.co/W5FxtWs/main.png"
                  alt="AI Technology Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-[#011627]/90">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            <span className="text-cyan-400">Мощные возможности</span> для современного бизнеса
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Bot className="w-8 h-8 text-cyan-400" />, title: "AI-автоматизация", desc: "Оптимизация операций с помощью интеллектуальной автоматизации" },
              { icon: <Brain className="w-8 h-8 text-cyan-400" />, title: "Машинное обучение", desc: "Продвинутое распознавание паттернов и прогнозирование" },
              { icon: <Cpu className="w-8 h-8 text-cyan-400" />, title: "Глубокое обучение", desc: "Решение сложных задач с помощью нейронных сетей" },
              { icon: <Network className="w-8 h-8 text-cyan-400" />, title: "AI-интеграция", desc: "Безшовная интеграция с существующими системами" }
            ].map((feature, index) => (
              <div key={index} className="bg-[#012337] p-6 rounded-xl hover:bg-[#012d47] transition">
                {feature.icon}
                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-16 sm:py-24 bg-gradient-to-b from-[#011627] to-[#012337]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Выгоды от сотрудничества с <span className="text-cyan-400">Cyber Lab</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Партнерство с нами открывает новые горизонты развития и конкурентные преимущества
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />, title: "Рост эффективности", desc: "Увеличение производительности до 300%" },
              { icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />, title: "Быстрый результат", desc: "Внедрение решений за 2-4 недели" },
              { icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />, title: "Гарантия качества", desc: "99.9% точность AI-моделей" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-[#012337] rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-[#012337]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Готовы трансформировать свой бизнес?</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к AI-революции и опережайте конкурентов с нашими передовыми решениями
            </p>
            <a 
              href="https://t.me/Cyber_lab_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-[#011627] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              Запланировать демо
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#011627] py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xl sm:text-2xl font-bold">
              Cyber<span className="text-cyan-400">Lab</span>
            </div>
            <div className="text-sm sm:text-base text-gray-400">
              © 2024 Cyber Lab. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
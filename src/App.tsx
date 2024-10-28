import React from 'react';
import { Brain, Users, Lightbulb, Target, ChevronRight, Bot, Cpu, Network, Shield, TrendingUp, Clock, Award } from 'lucide-react';

function App() {
  const handleGetStarted = () => {
    // Здесь можно добавить логику для кнопки "Начать"
    console.log('Начать clicked');
    // Например, открыть форму регистрации или перенаправить на страницу начала работы
  };

  const handleLearnMore = () => {
    // Здесь можно добавить логику для кнопки "Узнать больше"
    console.log('Узнать больше clicked');
    // Например, плавная прокрутка к секции с подробной информацией
    document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleDemo = () => {
    // Здесь можно добавить логику для кнопки "Запланировать демо"
    console.log('Запланировать демо clicked');
    // Например, открыть модальное окно с формой заявки
  };

  return (
    <div className="min-h-screen bg-[#011627] text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#011627]/90 to-[#011627]/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-cyan-400">AI-решения</span> для будущего вашего бизнеса
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Трансформируйте свой бизнес с помощью передовых решений искусственного интеллекта.
              Откройте новые возможности с корпоративными AI-технологиями Cyber Lab.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleGetStarted}
                className="bg-cyan-400 text-[#011627] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition flex items-center gap-2"
              >
                Начать <ChevronRight size={20} />
              </button>
              <button 
                onClick={handleLearnMore}
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition"
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-[#011627]/90">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-cyan-400">Мощные возможности</span> для современного бизнеса
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Bot className="w-8 h-8 text-cyan-400" />, title: "AI-автоматизация", desc: "Оптимизация операций с помощью интеллектуальной автоматизации" },
              { icon: <Brain className="w-8 h-8 text-cyan-400" />, title: "Машинное обучение", desc: "Продвинутое распознавание паттернов и прогнозирование" },
              { icon: <Cpu className="w-8 h-8 text-cyan-400" />, title: "Глубокое обучение", desc: "Решение сложных задач с помощью нейронных сетей" },
              { icon: <Network className="w-8 h-8 text-cyan-400" />, title: "AI-интеграция", desc: "Безшовная интеграция с существующими системами" }
            ].map((feature, index) => (
              <div key={index} className="bg-[#012337] p-6 rounded-xl hover:bg-[#012d47] transition">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-24 bg-gradient-to-b from-[#011627] to-[#012337]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Выгоды от сотрудничества с <span className="text-cyan-400">Cyber Lab</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Партнерство с нами открывает новые горизонты развития и конкурентные преимущества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-12 h-12 text-cyan-400" />, title: "Рост эффективности", desc: "Увеличение производительности процессов от 100%" },
              { icon: <Clock className="w-12 h-12 text-cyan-400" />, title: "Быстрый результат", desc: "Внедрение решений за 2-4 недели" },
              { icon: <Award className="w-12 h-12 text-cyan-400" />, title: "Гарантия качества", desc: "99.9% точность AI-моделей" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-[#012337] rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-[#012337]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы трансформировать свой бизнес?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к AI-революции и опережайте конкурентов с нашими передовыми решениями
            </p>
            <button 
              onClick={handleScheduleDemo}
              className="bg-cyan-400 text-[#011627] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              Запланировать демо
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#011627] py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Cyber<span className="text-cyan-400">Lab</span>
            </div>
            <div className="text-gray-400">
              © 2024 Cyber Lab. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
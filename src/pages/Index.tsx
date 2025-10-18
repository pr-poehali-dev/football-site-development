import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const lokomotivLineup = {
    formation: '4-2-3-1',
    goalkeeper: { number: 1, name: 'Митрюшкин' },
    defenders: [
      { number: 3, name: 'Фассон' },
      { number: 45, name: 'Сильянов' },
      { number: 23, name: 'Монтес' },
      { number: 5, name: 'Ньямси' }
    ],
    midfielders: [
      { number: 6, name: 'Баринов', captain: true },
      { number: 93, name: 'Карпукас' }
    ],
    attackingMids: [
      { number: 25, name: 'Пруцев' },
      { number: 83, name: 'Батраков' },
      { number: 19, name: 'Руденко' }
    ],
    forward: { number: 10, name: 'Воробьёв' }
  };

  const cskaLineup = {
    formation: '3-4-3',
    goalkeeper: { number: 49, name: 'Тороп' },
    defenders: [
      { number: 3, name: 'Круговой' },
      { number: 4, name: 'Виктор' },
      { number: 78, name: 'Дивеев' }
    ],
    wingbacks: [
      { number: 90, name: 'Лукин' },
      { number: 31, name: 'Кисляк' }
    ],
    centralMids: [
      { number: 10, name: 'Обляков', captain: true },
      { number: 17, name: 'Глебов' }
    ],
    forwards: [
      { number: 22, name: 'Гайич' },
      { number: 37, name: 'Кармо' },
      { number: 9, name: 'Алеррандро' }
    ]
  };

  const goals = [
    { team: 'lokomotiv', player: 'Батраков', minute: "17'" },
    { team: 'lokomotiv', player: 'Воробьёв', minute: "45+3'" },
    { team: 'lokomotiv', player: 'Комличенко', minute: "88'" }
  ];

  const substitutions = [
    { 
      team: 'lokomotiv', 
      minute: "70'", 
      playerIn: { number: 11, name: 'Комличенко' },
      playerOut: { number: 93, name: 'Карпукас' }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Trophy" size={32} className="text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold">Футбол.Live</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => setActiveTab('main')}
                className={`text-sm md:text-base font-medium transition-colors ${
                  activeTab === 'main' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`text-sm md:text-base font-medium transition-colors ${
                  activeTab === 'matches' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Матчи
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'main' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="bg-accent text-accent-foreground">МАТЧ ОКОНЧЕН</Badge>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-accent font-bold">Победа «Локо»</span>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-muted-foreground text-sm">Сезон 2025/26</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Локомотив</h2>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="text-6xl md:text-7xl font-bold druk-wide">
                      <span className="text-primary">3</span>
                      <span className="text-muted-foreground mx-2">:</span>
                      <span className="text-secondary">0</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span>18 октября 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Icon name="MapPin" size={16} className="text-muted-foreground" />
                        <span>РЖД Арена</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span>19:45</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">ЦСКА</h2>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Target" size={20} />
                      Голы
                    </h3>
                    <div className="space-y-2">
                      {goals.map((goal, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <Badge variant="outline" className="border-primary text-primary">
                            {goal.minute}
                          </Badge>
                          <span className="font-medium">{goal.player}</span>
                          <span className="text-muted-foreground">(Локомотив)</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ArrowRightLeft" size={20} />
                      Замены
                    </h3>
                    <div className="space-y-2">
                      {substitutions.map((sub, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <Badge variant="outline" className="border-accent text-accent">
                            {sub.minute}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500 font-medium flex items-center gap-1">
                              <Icon name="ArrowUp" size={14} />
                              {sub.playerIn.name}
                            </span>
                            <Icon name="ArrowLeftRight" size={14} className="text-muted-foreground" />
                            <span className="text-red-500 font-medium flex items-center gap-1">
                              <Icon name="ArrowDown" size={14} />
                              {sub.playerOut.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur overflow-hidden">
                <div className="bg-primary/10 border-b border-primary/20 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                      <Icon name="Users" size={24} />
                      Локомотив
                    </h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {lokomotivLineup.formation}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="relative bg-accent/20 rounded-lg p-6 min-h-[400px] border-2 border-accent/30">
                    <div className="absolute inset-0 opacity-10">
                      <div className="h-full w-full border-2 border-white rounded-lg" />
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white -translate-y-1/2" />
                      <div className="absolute top-0 left-1/2 bottom-0 w-0.5 bg-white -translate-x-1/2" />
                    </div>

                    <div className="relative space-y-8">
                      <div className="flex justify-center">
                        <PlayerBadge player={lokomotivLineup.goalkeeper} color="primary" />
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2">
                        {lokomotivLineup.defenders.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="primary" />
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        {lokomotivLineup.midfielders.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="primary" />
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {lokomotivLineup.attackingMids.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="primary" />
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <PlayerBadge player={lokomotivLineup.forward} color="primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/80 backdrop-blur overflow-hidden">
                <div className="bg-secondary/10 border-b border-secondary/20 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                      <Icon name="Users" size={24} />
                      ЦСКА
                    </h3>
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {cskaLineup.formation}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="relative bg-accent/20 rounded-lg p-6 min-h-[400px] border-2 border-accent/30">
                    <div className="absolute inset-0 opacity-10">
                      <div className="h-full w-full border-2 border-white rounded-lg" />
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white -translate-y-1/2" />
                      <div className="absolute top-0 left-1/2 bottom-0 w-0.5 bg-white -translate-x-1/2" />
                    </div>

                    <div className="relative space-y-8">
                      <div className="flex justify-center">
                        <PlayerBadge player={cskaLineup.goalkeeper} color="secondary" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                        {cskaLineup.defenders.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="secondary" />
                        ))}
                      </div>

                      <div className="grid grid-cols-4 gap-2">
                        <PlayerBadge player={cskaLineup.wingbacks[0]} color="secondary" />
                        {cskaLineup.centralMids.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="secondary" />
                        ))}
                        <PlayerBadge player={cskaLineup.wingbacks[1]} color="secondary" />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {cskaLineup.forwards.map((player, i) => (
                          <PlayerBadge key={i} player={player} color="secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Icon name="Calendar" size={32} />
              Матчи
            </h2>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-1">Локомотив</h3>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">
                      <span className="text-primary">2</span>
                      <span className="text-muted-foreground mx-2">:</span>
                      <span className="text-secondary">0</span>
                    </div>
                    <Badge variant="destructive" className="bg-primary">LIVE</Badge>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary mb-1">ЦСКА</h3>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Стадион</p>
                      <p className="font-medium">РЖД Арена</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" size={24} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Дата</p>
                      <p className="font-medium">18 октября 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Время</p>
                      <p className="font-medium">19:45</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    События матча
                  </h4>
                  <div className="space-y-3">
                    {goals.map((goal, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <Icon name="CircleDot" size={24} className="text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">{goal.player}</p>
                          <p className="text-sm text-muted-foreground">Локомотив</p>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary">
                          {goal.minute}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Shield" size={20} className="text-primary" />
                      Схема Локомотив
                    </h4>
                    <div className="flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <Badge variant="outline" className="text-2xl py-2 px-6 border-primary text-primary">
                        {lokomotivLineup.formation}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Shield" size={20} className="text-secondary" />
                      Схема ЦСКА
                    </h4>
                    <div className="flex items-center justify-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                      <Badge variant="outline" className="text-2xl py-2 px-6 border-secondary text-secondary">
                        {cskaLineup.formation}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 Футбол.Live — Следите за футболом онлайн</p>
        </div>
      </footer>
    </div>
  );
};

const PlayerBadge = ({ player, color }: { player: any; color: 'primary' | 'secondary' }) => {
  const colorClasses = {
    primary: 'bg-primary/90 hover:bg-primary border-primary/20',
    secondary: 'bg-secondary/90 hover:bg-secondary border-secondary/20'
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`${colorClasses[color]} border-2 rounded-full w-12 h-12 flex items-center justify-center font-bold text-white shadow-lg transition-transform hover:scale-110`}>
        {player.number}
      </div>
      <span className="text-xs font-medium text-center leading-tight">
        {player.name}
        {player.captain && ' (К)'}
      </span>
    </div>
  );
};

export default Index;
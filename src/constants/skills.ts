export const abilities = {
    ballistaMaster: {
        description:
            'Вождь Огров управляет выстрелами баллист и поставляет дополнительные машины герою.',
        name: 'ballistaMaster.ability',
        title: 'Мастер баллист',
    },
    charm: {
        description:
            'Часть нейтральных войск присоединяется к армии Суккуба перед битвой. Максимальное количество существ = 20%.',
        name: 'charm.ability',
        title: 'Очарование',
    },
    combatSkills: {
        description:
            'Шаман увеличивает вторичные навыки Нападения и Доспехов героя на 50%.',
        name: 'combatSkills.ability',
        title: 'Высокие боевые навыки',
    },
    firstAid: {
        description:
            'Знахарь поставляет дополнительные Палатки первой помощи герою. Их количество численно = уровню командира.',
        name: 'firstAid.ability',
        title: 'Мастер первой помощи',
    },
    pacifist: {
        description:
            'Некоторое количество воинов вражеского героя покидают поле боя перед сражением (после битвы войска возвращаются)',
        name: 'pacifist.ability',
        title: 'Пацифист',
    },
    racialSkill: {
        description:
            'Набор качественных игровых параметров героя, определяющих его общую тактико - стратегическую эффективность в игре',
        name: 'racialSkill.ability',
        title: 'Расовое умение',
    },
    sorceressMana: {
        description:
            'Восстанавливает очки маны героя, потерянные со предыдущего хода. Восстановление маны - от 1 - 90% от потерянной маны.',
        name: 'sorceressMana.ability',
        title: 'Волшебница маны',
    },
    transformerSouls: {
        description:
            'Каждый раз при получении опыта, Зверь добавляет в казну героя золото. Количество золота = 50% от полученного опыта.',
        name: 'transformerSouls.ability',
        title: 'Трансформатор душ',
    },
    undead: {
        description:
            'Пожиратель душ обладает всеми свойствами существ Некрополиса',
        name: 'undead.ability',
        title: 'Нежить',
    },
    wisdom: {
        description:
            'Паладин очень легко обучаем и получает на 50% больше опыта, чем сам герой',
        name: 'wisdom.ability',
        title: 'Мудрость',
    },
} as const;

export const spells = {
    accuracy: {
        description:
            'Храмовница накладывает на дружественный стрелковый отряд заклинание "Точность".',
        name: 'accuracy.spell',
        title: 'Точность',
    },
    bloodlust: {
        description:
            'Зверь накладывает на дружественный отряд заклинание "Жажда крови".',
        name: 'bloodlust.spell',
        title: 'Жажда крови',
    },
    boost: {
        description:
            'Шаман накладывает на дружественный отряд заклинание "Ускорение", повышая его скорость на 5 единиц (длительность = Силе Шамана)',
        name: 'boost.spell',
        title: 'Ускорение',
    },
    counterAttack: {
        description:
            'Дух накладывает на дружественный отряд заклинание "Контрудар"',
        name: 'counterAttack.spell',
        title: 'Контрудар',
    },
    fireShield: {
        description:
            'Накладывает на дружественный отряд заклинание "Огненный щит" (длительность = Силе Суккуба).',
        name: 'fireShield.spell',
        title: 'Огненный щит',
    },
    revivingDead: {
        description:
            'Пожиратель душ может воскрешать нежить 1 - 5 уровня на определѐнное количество здоровья',
        name: 'revivingDead.spell',
        title: 'Оживление мертвецов',
    },
    shield: {
        description:
            'Накладывает на дружественный отряд заклинание Щит (длительность = силе Знахаря).',
        name: 'shield.spell',
        title: 'Щит',
    },
    spell: {
        description: 'Каждый командир обладает своим заклинанием',
        name: 'spell',
        title: 'Заклинание',
    },
    stoneSkin: {
        description:
            'Накладывает на дружественный отряд заклинание "Каменная кожа" (длительность = Силе Вождя огров).',
        name: 'stoneSkin.spell',
        title: 'Каменная кожа',
    },
    treatment: {
        description:
            'Паладин накладывает на дружественный отряд заклинание "Лечение".',
        name: 'treatment.spell',
        title: 'Лечение',
    },
} as const;

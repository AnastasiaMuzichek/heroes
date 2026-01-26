import imageAstralSpirit from './assets/images/imagesHeroes/astralSpirit.png';
import imageBeast from './assets/images/imagesHeroes/beast.png';
import imageHierophant from './assets/images/imagesHeroes/hierophant.png';
import imageOrc from './assets/images/imagesHeroes/orcChieftain.png';
import imagePaladin from './assets/images/imagesHeroes/paladin.png';
import imageSoulEater from './assets/images/imagesHeroes/soulEater.png';
import imageSuccubus from './assets/images/imagesHeroes/succubus.png';
import imageKeeperCastle from './assets/images/imagesHeroes/keeperCastle.png';
import imageShaman from './assets/images/imagesHeroes/shaman.png';
import imageMainPage from './assets/images/imagesHeroes/mainPage.png';
import imageMainPage2 from './assets/images/mainPage/mainPage2.jpg';
import mainPageAstralSpirit from './assets/images/mainPage/mainPageAstralSpirit.jpg';
import mainPageBeast from './assets/images/mainPage/mainPageBeast.jpg';
import mainPageHierophant from './assets/images/mainPage/mainPageHierophant.jpg';
import mainPageOrcChieftain from './assets/images/mainPage/mainPageOrcChieftain.jpg';
import mainPagePaladin from './assets/images/mainPage/mainPagePaladin.jpg';
import mainPageSoulEater from './assets/images/mainPage/mainPageSoulEater.jpg';
import mainPageSuccubus from './assets/images/mainPage/mainPageSuccubus.jpg';
import mainPageKeeperCastle from './assets/images/mainPage/mainPageKeeperCastle.jpg';
import mainPageShaman from './assets/images/mainPage/mainPageShaman.jpg';
import Pairing from './assets/images/city/Pairing.webp';
import Dungeon from './assets/images/city/Dungeon.webp';
import Stronghold from './assets/images/city/Stronghold.webp';
import Citadel from './assets/images/city/Citadel.webp';
import Castle from './assets/images/city/Castle.webp';
import Necropolis from './assets/images/city/Necropolis.webp';
import Inferno from './assets/images/city/Inferno.webp';
import Tower from './assets/images/city/Tower.webp';
import Fortress from './assets/images/city/Fortress.webp';
import city from './assets/images/city/city.webp';
import treatment from './assets/images/skill/spell/treatment.webp';
import shield from './assets/images/skill/spell/shield.webp';
import accuracy from './assets/images/skill/spell/accuracy.webp';
import fireShield from './assets/images/skill/spell/fireShield.webp';
import revivingDead from './assets/images/skill/spell/revivingDead.webp';
import bloodlust from './assets/images/skill/spell/bloodlust.webp';
import stoneSkin from './assets/images/skill/spell/stoneSkin.webp';
import boost from './assets/images/skill/spell/boost.webp';
import counterattack from './assets/images/skill/spell/counterattack.webp';
import spell from './assets/images/skill/spell/spell.webp';
import wisdom from './assets/images/skill/ability/wisdom.webp';
import firstAid from './assets/images/skill/ability/firstAid.webp';
import sorceressMana from './assets/images/skill/ability/sorceressMana.webp';
import charm from './assets/images/skill/ability/charm.webp';
import undead from './assets/images/skill/ability/undead.webp';
import transformerSouls from './assets/images/skill/ability/transformerSouls.webp';
import ballistaMaster from './assets/images/skill/ability/ballistaMaster.webp';
import combatSkills from './assets/images/skill/ability/combatSkills.webp';
import pacifist from './assets/images/skill/ability/pacifist.webp';
import racialSkill from './assets/images/skill/ability/racialSkill.webp';

export type Skill = {
    image: string;
    description: string;
};

type Hero = {
    name: string; // имя героя
    image: string; // маленькая картинка
    fullImage: string; // большая картинка
    description: string; // описание героя
    city: string; // город
    cityImage: string; // картинка города
    skill: Skill[]; // скиллы (Расовое умение и Заклинание)
};

export const heroes: Hero[] = [
    {
        name: 'Heroes of Might and Magic 3: In the Wake of Gods',
        image: imageMainPage,
        fullImage: imageMainPage2,
        description:
            'Это глобальный мод на третьих "Героев Меча и Магии".\
        Проект вносит столько изменений и добавляет так много контента, что его можно назвать полноценным, \
        пусть и неофициальным, дополнением. Тайтл добавляет в игру командиров с различными способностями.\
        Они принимают участие в бою в роли полноценных юнитов вместо самих полководцев, которые ранее могли \
        только оказывать своим войскам поддержку с помощью магии. ',
        city: 'У каждого города есть свой тип командира',
        cityImage: city,
        skill: [
            {
                image: racialSkill,
                description:
                    'Расовое умение - набор качественных игровых параметров героя, определяющих его общую \
                тактико-стратегическую эффективность в игре',
            },
            {
                image: spell,
                description: 'Каждый командир обладает своим заклинанием',
            },
        ],
    },
    {
        name: 'Астральный дух',
        image: imageAstralSpirit,
        fullImage: mainPageAstralSpirit,
        description:
            'Родом из астрального плана, способность этого командира показывать силу пустоты и \
        заброшенного мира ,часто снижает агрессивность вражеских отрядов, которые опускают оружие, \
        увидев тщетность войны. Астральный дух полностью потерял связь со своим бушующим пламенным прошлым, \
        ударившись в пацифизм: заставляет определённый процент армии вражеского героя сбежать с поля боя, \
        количество не может превышать 20%, но вопрос касается вражеской армии, и для финального сражения \
        это крайне ценно. ',
        city: 'Сопряжение',
        cityImage: Pairing,
        skill: [
            {
                image: pacifist,
                description:
                    'РАСОВОЕ УМЕНИЕ: Пацифист - некоторое количество воинов вражеского героя \
                покидают поле боя перед сражением(после битвы войска возвращаются)',
            },
            {
                image: counterattack,
                description:
                    'ЗАКЛИНАНИЕ: Контрудар - Дух накладывает на дружественный отряд \
            заклинание Контрудар',
            },
        ],
    },
    {
        name: 'Зверь',
        image: imageBeast,
        fullImage: mainPageBeast,
        description:
            'Бесстрашный боец и командир вселяет жажду крови в отряды, которыми он командует. \
        И после этого, Зверь направляет армию на своего врага. А уж в свежих трупах всегда есть \
        потребность в тѐмных и зловонных глубинах Темницы. Несмотря на свою внешность и брутальное название, \
        является отличным экономистом. Ещё один пример того, что внешность не определяет сущность. ',
        city: 'Темница',
        cityImage: Dungeon,
        skill: [
            {
                image: transformerSouls,
                description:
                    'РАСОВОЕ УМЕНИЕ: Трансформатор душ - каждый раз при получении опыта, \
                Зверь добавляет в казну героя золото. Количество золота = 50% от полученного опыта.',
            },
            {
                image: bloodlust,
                description:
                    'ЗАКЛИНАНИЕ: Жажда крови - Зверь накладывает на дружественный отряд заклинание \
            Жажда крови.',
            },
        ],
    },
    {
        name: 'Иерофант',
        image: imageHierophant,
        fullImage: mainPageHierophant,
        description:
            'Этот мистический воин - целитель природы. Он всегда помогает армии, которой он командует, \
        наладил массовое производство палаток первой помощи: каждый уровень Иерофанта прибавляет вам по одной \
        палатке. Это не означает, что у вас позади отряда будет стоять двадцать палаток в ряд, эффект лечения \
        будет суммироваться, затрагивая большее количество юнитов.. А в сражении, он защищает жизни своих отрядов, \
        колдуя волшебный Щит. Друид из Оплота, стремящийся передать волю природы окружающим.',
        city: 'Оплот',
        cityImage: Stronghold,
        skill: [
            {
                image: firstAid,
                description:
                    'РАСОВОЕ УМЕНИЕ: Мастер первой помощи - Знахарь поставляет дополнительные \
                Палатки первой помощи герою. Их количество численно = уровню командира.',
            },
            {
                image: shield,
                description:
                    'ЗАКЛИНАНИЕ: Щит - накладывает на дружественный отряд заклинание Щит \
            (длительность = силе Знахаря).',
            },
        ],
    },
    {
        name: 'Вождь Огров',
        image: imageOrc,
        fullImage: mainPageOrcChieftain,
        description:
            'Находчивый Вождь Огров gитает нездоровую страсть к баллистам... возможно, даже слишком \
        нездоровую, добавляет артиллерийскую мощь армии героя, увеличивая количество баллист.\
        Этот хитрый командир также освоил заклинание, которое делает кожу его отрядов прочной, как камень.',
        city: 'Цитадель',
        cityImage: Citadel,
        skill: [
            {
                image: ballistaMaster,
                description:
                    'РАСОВОЕ УМЕНИЕ: Мастер баллист - Вождь Огров управляет выстрелами баллист \
                и поставляет дополнительные машины герою.',
            },
            {
                image: stoneSkin,
                description:
                    'ЗАКЛИНАНИЕ: Каменная кожа - накладывает на дружественный отряд \
            заклинание Каменная кожа (длительность = Силе Вождя огров).',
            },
        ],
    },
    {
        name: 'Паладин',
        image: imagePaladin,
        fullImage: mainPagePaladin,
        description:
            'За его основу взят крестоносец, которому вручили второй меч. Благодаря "Мудрости", \
        получает в полтора раза больше опыта и растёт быстрее своих "сверстников", в результате чего намного \
        раньше становится полезным. Он божественный защитник правосудия, способности этого священного мстителя \
        крепчают с каждым боевым успехом. Паладин наделѐн волшебной способностью заживления ран, что помогает \
        сохранять его армию.',
        city: 'Замок',
        cityImage: Castle,
        skill: [
            {
                image: wisdom,
                description:
                    'РАСОВОЕ УМЕНИЕ: Мудрость - Паладин очень легко обучаем и получает на 50% \
                больше опыта, чем сам герой',
            },
            {
                image: treatment,
                description:
                    'ЗАКЛИНАНИЕ: Лечение - Паладин накладывает на дружественный отряд заклинание Лечение.',
            },
        ],
    },
    {
        name: 'Пожиратель душ',
        image: imageSoulEater,
        fullImage: mainPageSoulEater,
        description:
            'Выглядит как гибрид наги и лича. Существо является нежитью, получая все преимущества \
        данной "профессии"... в этом его главная уникальность: Этот бездушный командир поглощает духовную \
        сущность жертв - он убивает, чтобы поднять их в виде нежити. На поле боя Пожиратель душ использует \
        свои колдовские умения, чтобы воскресить своих мѐртвых воинов.',
        city: 'Некрополис',
        cityImage: Necropolis,
        skill: [
            {
                image: undead,
                description:
                    'РАСОВОЕ УМЕНИЕ: Нежить - Пожиратель душ обладает всеми свойствами существ Некрополиса',
            },
            {
                image: revivingDead,
                description:
                    'ЗАКЛИНАНИЕ: Оживление мертвецов - Пожиратель душ может воскрешать нежить 1-5 уровня \
            на определѐнное количество здоровья',
            },
        ],
    },
    {
        name: 'Суккуб',
        image: imageSuccubus,
        fullImage: mainPageSuccubus,
        description:
            'Будучи очарованными красотой Суккуба, вражеские отряды быстро придут в состояние \
        восторга и примкнут к рядам демонического командира (максимум 20% от их количества). Родство с \
        огнѐм позволяет Суккубу защищать войска аурой пламени. Переманивать нейтралов, обещая им \
        безудержную страсть, хорошо только в начале игры, а когда ваша армия станет могучей, всякие \
        гоблины и ящеры-воины не принесут вам радости, да и малый процент переманивания не позволит \
        сколотить огромный отряд из существ шестого-седьмого уровня.',
        city: 'Инферно',
        cityImage: Inferno,
        skill: [
            {
                image: charm,
                description:
                    'РАСОВОЕ УМЕНИЕ: Очарование - Часть нейтральных войск присоединяется к армии \
                Суккуба перед битвой.Максимальное количество существ = 20%.',
            },
            {
                image: fireShield,
                description:
                    'ЗАКЛИНАНИЕ: Огненный щит - накладывает на дружественный отряд заклинание \
            Огненный щит (длительность = Силе Суккуба).',
            },
        ],
    },
    {
        name: 'Хранитель замка',
        image: imageKeeperCastle,
        fullImage: mainPageKeeperCastle,
        description:
            'Сильная, волевая, умная и красивая Храмовница - отдалѐнная родственница титанов. Еѐ \
        присутствие на поле боя повышает точность Титанов и других отрядов, которыми она командует \
        (нужен герой-маг и стрелки в армии, ну или самой идти в стрельбу). Эта способность полезна также, \
        как и еѐ врожденная способность вытягивать ману противника в битве, что является уникальным свойством.',
        city: 'Башня',
        cityImage: Tower,
        skill: [
            {
                image: sorceressMana,
                description:
                    'РАСОВОЕ УМЕНИЕ: Волшебница маны - восстанавливает очки маны героя, \
                потерянные со предыдущего хода. Восстановление маны - от 1 - 90% от \
                потерянной маны.',
            },
            {
                image: accuracy,
                description:
                    'ЗАКЛИНАНИЕ: Точность. Храмовница накладывает на дружественный стрелковый отряд \
            заклинание Точность.',
            },
        ],
    },
    {
        name: 'Шаман',
        image: imageShaman,
        fullImage: mainPageShaman,
        description:
            'Гнолл, который получил высшее магическое образование, этот мудрый командир использует \
        простую магию, существо не забыло про свои боевые корни и поэтому обладает улучшенными боевыми \
        показателями, получая в полтора раза больше Атаки и Защиты от соответствующих характеристик героя, \
        следовательно, Шаман сходу сильнее и крепче остальных командиров, особенно если герой, в армии \
        которого он находится, - воин. Своим волшебством Шаман увеличивает манѐвренность армии.',
        city: 'Крепость',
        cityImage: Fortress,
        skill: [
            {
                image: combatSkills,
                description:
                    'РАСОВОЕ УМЕНИЕ: Высокие боевые навыки. Шаман увеличивает вторичные \
                навыки Нападения и Доспехов героя на 50%.',
            },
            {
                image: boost,
                description:
                    'ЗАКЛИНАНИЕ: Ускорение. Шаман накладывает на дружественный отряд заклинание Ускорение, \
            повышая его скорость на 5 единиц (длительность = Силе Шамана)',
            },
        ],
    },
];

export const imagesHeroes = [
    imageMainPage,
    imageAstralSpirit, // астральный дух
    imageBeast, // зверюга
    imageHierophant, // иерофант
    imageOrc, // орк-вождь
    imagePaladin, // паладин
    imageSoulEater, // пожиратель душ
    imageSuccubus, // суккуб
    imageKeeperCastle, // хранитель замка
    imageShaman, // шаман
];

export const imagesMain = [
    imageMainPage2,
    mainPageAstralSpirit, // астральный дух
    mainPageBeast, // зверюга
    mainPageHierophant, // иерофант
    mainPageOrcChieftain, // орк-вождь
    mainPagePaladin, //паладин
    mainPageSoulEater, // пожиратель душ
    mainPageSuccubus, // суккуб
    mainPageKeeperCastle, // хранитель замка
    mainPageShaman, // шаман
];

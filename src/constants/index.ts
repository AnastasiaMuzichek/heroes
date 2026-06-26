import imageAstralSpirit from '../assets/images/heroes/astralSpirit.png';
import imageBeast from '../assets/images/heroes/beast.png';
import imageHierophant from '../assets/images/heroes/hierophant.png';
import imageOrc from '../assets/images/heroes/orcChieftain.png';
import imagePaladin from '../assets/images/heroes/paladin.png';
import imageSoulEater from '../assets/images/heroes/soulEater.png';
import imageSuccubus from '../assets/images/heroes/succubus.png';
import imageKeeperCastle from '../assets/images/heroes/keeperCastle.png';
import imageShaman from '../assets/images/heroes/shaman.png';
import imageMainPage from '../assets/images/heroes/mainPage.png';
import imageMainPage2 from '../assets/images/pages/mainPage2.jpg';
import mainPageAstralSpirit from '../assets/images/pages/mainPageAstralSpirit.jpg';
import mainPageBeast from '../assets/images/pages/mainPageBeast.jpg';
import mainPageHierophant from '../assets/images/pages/mainPageHierophant.jpg';
import mainPageOrcChieftain from '../assets/images/pages/mainPageOrcChieftain.jpg';
import mainPagePaladin from '../assets/images/pages/mainPagePaladin.jpg';
import mainPageSoulEater from '../assets/images/pages/mainPageSoulEater.jpg';
import mainPageSuccubus from '../assets/images/pages/mainPageSuccubus.jpg';
import mainPageKeeperCastle from '../assets/images/pages/mainPageKeeperCastle.jpg';
import mainPageShaman from '../assets/images/pages/mainPageShaman.jpg';
import cities from './cities';
import { abilities, spells } from './skills';
import type { CityValue, SkillValue } from '../types';

type Hero = {
    name: string; // имя героя
    image: string; // маленькая картинка
    fullImage: string; // большая картинка
    description: string; // описание героя
    city: CityValue; // город
    skills: SkillValue[];
};

export const heroes: Hero[] = [
    {
        name: 'Heroes of Might and Magic 3: In the Wake of Gods',
        image: imageMainPage,
        fullImage: imageMainPage2,
        description:
            'Это глобальный мод на третьих "Героев Меча и Магии". \
        Проект вносит столько изменений и добавляет так много контента, что его можно назвать полноценным, \
        пусть и неофициальным, дополнением. Тайтл добавляет в игру командиров с различными способностями.\
        Они принимают участие в бою в роли полноценных юнитов вместо самих полководцев, которые ранее могли \
        только оказывать своим войскам поддержку с помощью магии. ',

        city: cities.city,
        skills: [abilities.racialSkill, spells.spell],
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
        city: cities.pairing,
        skills: [abilities.pacifist, spells.counterAttack],
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
        city: cities.dungeon,
        skills: [abilities.transformerSouls, spells.bloodlust],
    },
    {
        name: 'Иерофант',
        image: imageHierophant,
        fullImage: mainPageHierophant,
        description:
            'Этот мистический воин - целитель природы. Он всегда помогает армии, которой он командует, \
        наладил массовое производство палаток первой помощи: каждый уровень Иерофанта прибавляет вам по одной \
        палатке. Это не означает, что у вас позади отряда будет стоять двадцать палаток в ряд, эффект лечения \
        будет суммироваться, затрагивая большее количество юнитов. А в сражении, он защищает жизни своих отрядов, \
        колдуя волшебный Щит. Друид, стремящийся передать волю природы окружающим.',
        city: cities.stronghold,
        skills: [abilities.firstAid, spells.shield],
    },
    {
        name: 'Вождь Огров',
        image: imageOrc,
        fullImage: mainPageOrcChieftain,
        description:
            'Находчивый Вождь Огров gитает нездоровую страсть к баллистам... возможно, даже слишком \
        нездоровую, добавляет артиллерийскую мощь армии героя, увеличивая количество баллист.\
        Этот хитрый командир также освоил заклинание, которое делает кожу его отрядов прочной, как камень.',
        city: cities.citadel,
        skills: [abilities.ballistaMaster, spells.stoneSkin],
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
        city: cities.castle,
        skills: [abilities.wisdom, spells.treatment],
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
        city: cities.necropolis,
        skills: [abilities.undead, spells.revivingDead],
    },
    {
        name: 'Суккуб',
        image: imageSuccubus,
        fullImage: mainPageSuccubus,
        description:
            'Будучи очарованными красотой Суккуба, вражеские отряды быстро придут в состояние \
        восторга и примкнут к рядам демонического командира (максимум 20%). Родство с \
        огнѐм позволяет Суккубу защищать войска аурой пламени. Переманивать нейтралов,\
        хорошо только в начале игры, а когда ваша армия станет могучей, всякие \
        гоблины и ящеры-воины не принесут вам радости, да и малый процент переманивания не позволит \
        сколотить огромный отряд из существ шестого-седьмого уровня.',
        city: cities.inferno,
        skills: [abilities.charm, spells.fireShield],
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
        city: cities.tower,
        skills: [abilities.sorceressMana, spells.accuracy],
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
        city: cities.fortress,
        skills: [abilities.combatSkills, spells.boost],
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

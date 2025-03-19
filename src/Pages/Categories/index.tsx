import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/residente_img.png'
import fifa from '../../assets/images/fifa_img.png'
import zelda from '../../assets/images/zelda_img.png'
import starwars from '../../assets/images/starwars_img.png'
import diablo from '../../assets/images/diablo_img.png'
import street from '../../assets/images/street_img.png'

const rpg: Game[] = [
  {
    id: 1,
    category: 'Zombies',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..',
    title: 'Resident Evil 4',
    img: resident,
    infos: ['10%', 'R$250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    category: 'Zombies',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..',
    title: 'Resident Evil 4',
    img: resident,
    infos: ['10%', 'R$250,00'],
    system: 'Windows'
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'EA SPORTS™ FIFA 23',
    img: fifa,
    infos: ['50%', 'R$99,90'],
    system: 'PS5'
  },
  {
    id: 4,
    category: 'Zombies',
    description: 'FIFA 23',
    title: 'EA SPORTS™ FIFA 23',
    img: fifa,
    infos: ['50%', 'R$99,90'],
    system: 'PS5'
  }
]

const action: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'DIABLO IV',
    img: diablo,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    img: street,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi: Survivor',
    img: starwars,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',
    title: 'The Legend of Zelda - TOK',
    img: zelda,
    infos: ['05/04'],
    system: 'Switch'
  }
]

const aventure: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'DIABLO IV',
    img: diablo,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    img: street,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi: Survivor',
    img: starwars,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',
    title: 'The Legend of Zelda - TOK',
    img: zelda,
    infos: ['05/04'],
    system: 'Switch'
  }
]

const fps: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'DIABLO IV',
    img: diablo,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    img: street,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi: Survivor',
    img: starwars,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',
    title: 'The Legend of Zelda - TOK',
    img: zelda,
    infos: ['05/04'],
    system: 'Switch'
  }
]

const Categories = () => (
  <>
    <ProductsList games={rpg} title="RPG" background="gray" />
    <ProductsList games={action} title="Ação" background="black" />
    <ProductsList games={aventure} title="Aventura" background="gray" />
    <ProductsList games={fps} title="FPS" background="black" />
  </>
)

export default Categories

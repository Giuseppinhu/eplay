class Game {
  title: string
  category: string
  description: string
  img: string
  infos: string[]
  system: string
  id: number

  constructor(
    title: string,
    category: string,
    description: string,
    img: string,
    infos: string[],
    system: string,
    id: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.img = img
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game

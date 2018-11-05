export class Rocket {

  public visited = false;

  constructor(public id: number,
    public name: string,
    public origin: string,
    public LEO: number,
    public GTO: number) {
  }
}

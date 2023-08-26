import { Injectable } from '@angular/core';
import { Origami } from "./origami";

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  tsuru: Origami = { modelName: 'Tsuru', author: 'Unknown', year: null};
  fox: Origami = { modelName: 'Vixen', author: 'Román Diaz', year: 2009};
  wasp: Origami = { modelName: 'Avispa', author: 'Jose Anibal Voyer', year: 1997};

  origamis: Origami[] = [this.tsuru, this.fox, this.wasp];

  constructor() { }

  getOrigamis() {
    return this.origamis;
  }
}

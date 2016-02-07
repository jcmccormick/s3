import {Injectable} from 'angular2/core';
import {KINDS} from './kinds';

@Injectable()

export class KindService {

  getKinds() {

    return Promise.resolve(KINDS);

  }

  returnKind(id) {

    return KINDS.filter(kind => kind.id === id)
  
  }
}
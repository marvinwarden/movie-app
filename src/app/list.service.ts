import { Injectable } from '@angular/core';
import { Movies } from './find-movie';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: string[] = []


  constructor() { }

  addToList(listItem: string) {
    this.list.push(listItem)
  }
}

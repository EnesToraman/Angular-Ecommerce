import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  public searchQuerySubject$ = new ReplaySubject<string>();

  constructor() { }
}

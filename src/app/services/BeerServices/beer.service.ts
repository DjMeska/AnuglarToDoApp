import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  url: string = 'https://api.punkapi.com/v2/beers'

  constructor(private httpClient: HttpClient) {
  }

  getBeer(){
    return this.httpClient.get(this.url)
  }
}

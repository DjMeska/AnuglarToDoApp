import { AfterViewInit, Component } from '@angular/core';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/BeerServices/beer.service';


@Component({
  selector: 'app-beer-area',
  templateUrl: './beer-area.component.html',
  styleUrls: ['./beer-area.component.css']
})
export class BeerAreaComponent implements AfterViewInit{

  beers: Beer[];
  display: any[];
  selected: string = 'None';

  constructor(private beerService: BeerService) { }

  ngAfterViewInit(): void {
    this.beerService.getBeer()
      .subscribe(response => {
        this.beers = response as Beer[]
      })
  }

}

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/BeerServices/beer.service';


@Component({
  selector: 'app-beer-area',
  templateUrl: './beer-area.component.html',
  styleUrls: ['./beer-area.component.css']
})
export class BeerAreaComponent implements AfterViewInit, OnDestroy {

  beers: Beer[];
  display: any[];
  selected: any = 'None';
  properties: string[];
  subscription: Subscription
  propObj: Object

  constructor(private beerService: BeerService) {
  }

  ngAfterViewInit(): void {
    this.subscription = this.beerService.getBeer()
      .subscribe(response => {
        this.beers = response as Beer[]
        this.properties = Object.getOwnPropertyNames(this.beers[0])
        this.recursiveObjectGeneration(this.properties, 'a')
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  parseBeerSelection(beer: Beer): string {
    return beer[this.selected as keyof Beer] as string
  }

  recursiveObjectGeneration(obj: Object, stack: string): string {
      const props = Object.getOwnPropertyNames(obj)
      console.log('Props', props)
      console.log('stack', stack)
      this.propObj = this.generateObjectFromProps(props)
      console.log('propObj', this.propObj)
      for (const prop of props) {
        if(typeof obj[prop as keyof Object] === 'object') {
          stack = stack + 'a'
          console.log(prop)
          this.recursiveObjectGeneration(obj[prop as keyof Object], stack)
        }
      }
      //Object return key array
      //If object return its key array
      //Rinse and repeat
      return JSON.stringify(this.propObj)
  }

  generateObjPropertyList(obj: any) : any {
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }

  generateObjectFromProps(input: any) {
    const INITIAL_CHAR = 'a';
    const INITIAL_CHAR_CODE = INITIAL_CHAR.charCodeAt(0);

    const output = input.reduce((acc: { [x: string]: any; }, value: any, index: number) => {
      const key = String.fromCharCode(INITIAL_CHAR_CODE + index);
      acc[key] = value;
      return acc;
    }, {});
    return output;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel.model';

@Pipe({
  name: 'filterStars'
})
export class FilterStarsPipe implements PipeTransform {

  transform(hotels:Hotel[], stars: string): any {
    if (!hotels ) {
      return null
    }
    
    if (stars == undefined || stars == null){
      return hotels
    }
    if (stars=='1-2-3-4-5' || stars.length==0){
      return hotels
    }

    let arrStars = stars.split('-')

    let hotelsR: Hotel[]=[]
    for (let hotel of hotels){
      for (let star of arrStars){
        if (hotel.stars == parseInt(star)){
          hotelsR.push(hotel)
        }
      }
    }

    return hotelsR;
  }

}

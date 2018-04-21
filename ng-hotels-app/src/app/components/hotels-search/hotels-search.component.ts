import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../models/hotel.model'
import { HotelService } from '../../services/hotel.service'

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.css']
})
export class HotelsSearchComponent implements OnInit {
  hotels = []
  name:string
  stars:string
  constructor(private activadedRoute:ActivatedRoute,
    private router:Router,
    private hotelsServices:HotelService) { }

  ngOnInit() {
    this.activadedRoute.params.subscribe(params =>{
      this.name = params['name']
      this.stars = params['stars']
      this.getHotels(this.name)
    })
  }

  getHotels(name:string){
    this.hotelsServices.getHotelsFilter(name).subscribe(data => {
      if (data['status'] == 'success'){
        this.hotels = data['hotels']
      }else{
        this.hotels = []
      }
    });
  }

  getStars(stars:number):string{
    let icons:string = ''
    for (let i:number=0; i<stars; i++){
      icons = icons + 'star '
    }
    return icons
  }

  back(){
    this.router.navigate(['/hotels'])
  }

}

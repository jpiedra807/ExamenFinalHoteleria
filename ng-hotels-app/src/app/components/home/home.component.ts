import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model'
import { HotelService } from '../../services/hotel.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:Hotel[] = [] 
  
  stars:string
  constructor(private hotelsServices:HotelService) { }

  ngOnInit() {
    this.getAllHotels()
  }

  getAllHotels() {
    this.hotelsServices.getHotels().subscribe(data => {
      if (data['status'] == 'success'){
        this.hotels = data['hotels']
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

}

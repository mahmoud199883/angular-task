import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../../myservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  myData:any=[];


  constructor( _MyserviceService:MyserviceService) {
    _MyserviceService.getData().subscribe((data)=>{ // retrive all data from Myervice  and put all data in MyData array 
      this.myData=data;
    })
      
   }
  
  
  ngOnInit(): void {
  }

  //global  properties that i will use in in my condttios to display and hide code
  defaultSelectedname:any=[];
  selectedname:any;
  selectedid:any;
  selectedItemContainer:any=[];
  

  //this method to make the length of selectedItemContainer array that include only the slected bane object equal to zero
  setItem()
  {
    this.selectedItemContainer.length=0;
    console.log(this.selectedItemContainer)
  }

  // this is a method that is called when i select in dropdownlist any name
  mySelectHandler(event:any)
  {
    this.selectedname= event.name;
    this.selectedid=event.id;
    for (let i = 0; i < this.myData.length; i++) {
      if(this.myData[i].id == this.selectedid)
      {
        const element = this.myData[i];
        this.selectedItemContainer.pop()
        this.selectedItemContainer.push(element);
      }
    }
  }

      
      
    
  }



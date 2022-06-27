import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public _MyserviceService: MyserviceService, public _Router: Router) { }
  ArticleForm: FormGroup = new FormGroup({ // this a object from from
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'body': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'img': new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
  }
  getArticleData(FormData: any) {
    // this method that retrive all data from the form and send it to json file using post method
    FormData.value.img = "../../../assets/imgs/" + FormData.value.img.slice(12);
    this._MyserviceService.postData(FormData.value).subscribe((data) => {
      console.log(data);
      this._Router.navigate(['/']) // navigate to the main page after the add

    })
  }

}

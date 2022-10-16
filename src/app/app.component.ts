import { Component } from '@angular/core';
import { BackdataService } from './backdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angpro1';
  public message="x";
  constructor(private _backdataService:BackdataService){};
  ngOnInit(){
    this._backdataService.getData().subscribe(data => {
      this.message = data
      console.log(this.message);
    });
  }

}

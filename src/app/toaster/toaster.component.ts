import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() showToaster = false;
  title : String = ""
  message : String = ""
  viewing : any;
  value: String = "#00B412";
  isRed: boolean = false;



  showToasterx() {
    this.showToaster = !this.showToaster;
    setTimeout(() => {
      this.showToasterx();
    }, 5000);
  }


}

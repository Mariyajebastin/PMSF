import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-icons',
  templateUrl: './sidebar-icons.component.html',
  styleUrls: ['./sidebar-icons.component.css']
})
export class SidebarIconsComponent {
  @Input () searchBar : any;
  @Input() showNotification = false;
  @Input() showWish = false;
  @Input()showSearch = false;


  openWish(){
    if(this.showWish){
      this.showWish = false;
    }
    else {
      this.showWish = true;
    }
  }

  openSearch(){
    if(this.showSearch){
      this.showSearch = false;
    }
    else {
      this.showSearch = true;
    }
  }

  openNotification(){
    if(this.showNotification){
      this.showNotification = false;
    }
    else {
      this.showNotification = true;
    }
  }
}

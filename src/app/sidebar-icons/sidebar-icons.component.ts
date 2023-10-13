import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-icons',
  templateUrl: './sidebar-icons.component.html',
  styleUrls: ['./sidebar-icons.component.css']
})
export class SidebarIconsComponent {
  @Input () searchBar : any
}

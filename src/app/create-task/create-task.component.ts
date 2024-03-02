import {Component, Input, OnInit, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ToasterComponent } from '../toaster/toaster.component';
import { WebapiService } from '../webapi.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
 public createTaskfForm : FormGroup | any;
 public file : any;
  @ViewChild('toaster') toaster : ToasterComponent | any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};
  dropdownData: any = [];
  selectedNames : any =[];
  dropdownOptions = {}



  constructor(private router:Router, private http: WebapiService) {
    this.createTaskfForm = new FormGroup({
      id : new FormControl(''),
      task_name : new FormControl('',Validators.required),
      task_brief : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      priority : new FormControl('',Validators.required),
      attach_file : new FormControl('',Validators.required),
      }
    )
  }

  doCreate() {
    const formData = new FormData();
    formData.append("task_name",this.createTaskfForm.value.task_name)
    formData.append("task_brief",this.createTaskfForm.value.task_brief)
    formData.append("date",this.createTaskfForm.value.date);
    formData.append("priority",this.createTaskfForm.value.priority);
    formData.append("attach_file",this.file)
    this.http.postTask(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log("from 35",res)
        if (res.status){
          this.toaster.title = "Success";
          this.toaster.message = "Task created successfully";
          this.toaster.showToasterx();
          this.createTaskfForm.reset();
        }
      },error =>{
        console.log(error)
      }
    )
  }

  ngOnInit(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Kumar' },
      { item_id: 2, item_text: 'Mani' },
      { item_id: 3, item_text: 'Jebastin' },
      { item_id: 4, item_text: 'Kavi' },
      { item_id: 5, item_text: 'Abi' },
      { item_id: 6, item_text: 'Shobana' },
      { item_id: 7, item_text: 'Ajai' },
      { item_id: 8, item_text: 'Rokesh' },
      { item_id: 9, item_text: 'Gokul' },
      { item_id: 10, item_text: 'Akash' },
      { item_id: 11, item_text: 'Sakthi' }
    ];
    this.dropdownData = [
      { id: 3, name: 'Jebastin' },
      { id: 4, name: 'Kavi' },
      { id: 5, name: 'Abi' },
      { id: 6, name: 'Shobana' },
    ]
    this.selectedItems = [
      { item_id: 3, item_text: 'Kumar' },
      { item_id: 4, item_text: 'Mani' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      maxHeight: 100
    };
    this.dropdownOptions = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      maxHeight: 100,

    };
  }

  onItemSelect(item: any){
    console.log(item)
  }
  onSelectAll(event : any){

  }
  onNameSelect(event: any){

  }
  selectAll(event: any){

  }

  getFile(event: any){
    this.file = event.target.files[0];
  }
}

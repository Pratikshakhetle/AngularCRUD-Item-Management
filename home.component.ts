import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemService } from '../services/item.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var window:any;

@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  imports: [RouterOutlet,RouterModule,NgbModule,CommonModule,FormsModule],
  providers:[
  HttpClientModule,
    ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items:Items[]=[];
  deleteModal:any;
  idToDelete:number=0;
 
  constructor(private itemService:ItemService){}
  
  ngOnInit(): void {
    this.get();
    this.deleteModal=new window.bootstrap.Modal(
      document.getElementById('deleteModal')); 
  }
  get(){
    this.itemService.get().subscribe((data) => {
      this.items= data;
    })
  }
  openDeleteModal(id:number){
    this.idToDelete=id;
    this.deleteModal.show();
  }
  delete(){
    this.itemService.delete(this.idToDelete).subscribe({
      next: (data) => { 
        this.items=this.items.filter (_=>_.id!=this.idToDelete);
        this.deleteModal.hide();
      }
    })
  }
}

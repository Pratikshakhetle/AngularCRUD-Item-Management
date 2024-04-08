import { Component, NgModule, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Items } from '../items';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone:true,
  templateUrl: './add-item.component.html',
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit{
  itemForm: Items={
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0
  }
  constructor(private itemService:ItemService, private router:Router){}
  ngOnInit(): void {

  }
    create(){
      this.itemService.create(this.itemForm).subscribe({
        next:(data)=>{
          this.router.navigate(["/home"])
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
}

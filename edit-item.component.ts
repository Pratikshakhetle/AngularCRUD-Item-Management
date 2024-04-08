import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ItemService } from '../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Items } from '../items';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit{
  itemForm: any={
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0
  }
  constructor(private itemService:ItemService, private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
  this.route.paramMap.subscribe((param)=>{
    var id=Number(param.get('id'));
    this.getById(id)
  })
}
getById(id:number){
  this.itemService.getById(id).subscribe((data)=>{
    this.itemForm=data;
  })
}
update(){
  this.itemService.update(this.itemForm).subscribe({
    next:(data)=>{
      this.router.navigate(["./home"]);
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}

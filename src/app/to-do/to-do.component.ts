import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  optionValue = '';
  public title ='' ;
  public list = ['Lunch break and fun time', 'Learning a new technology', 'Exercising and eating healthy', 'Read novel',
                'Prepare for interviews','Day diary','Driving skills','Cooking practice','Others'];
  public arr:any = [];
  new_title :any;
  new_description :any;
  
 public displayData(){
  console.log('display data');
  if(this.title!='' || this.optionValue!='') {
    console.log("reqd")


  }
 } 
 public delete(i:any){
  //  console.log(i)
   this.arr.splice(i,1);
  // this.arr = this.arr.filter((x:any,z:any)=> z!=i )
 }
 edit(i:any){
   this.arr.map((elt:any, index:any) => {
     if(i==index) {
       this.new_title=elt.title;
       this.new_description=elt.description;
     }
     console.log(this.arr)

   })
   
 }
 close(i:any){
   console.log('close' +i)
   
   this.arr.map((elt:any, index:any) => {
    if(i==index) {
      elt.title= this.new_title;
      elt.description=this.new_description;
    }
    
    

  })
  console.log(this.arr)
  confirm('Successfully updated data')
 }
  constructor() { }
  add() {
    if(this.title!='' || this.optionValue!='') {
      confirm("Successfully added a task");
      console.log(this.title)
      console.log(this.optionValue)
    
        this.arr.push({
          title:this.title,
          description:this.optionValue
        });
        console.log(this.arr);
        this.optionValue=''
        this.title = '';
        this.displayData();
    }
    else{
      confirm('Fields can"t be empty');
    }
    // this.arr.push(this.title)
  }

  
  ngOnInit(): void {
  }
  

  updateData(){
    console.log(this.optionValue)
  }

}

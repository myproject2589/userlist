import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo';
  ages = [];
  userDetails={name:'',age:'1-25',gendar:'',hobbies:[],varified:false};
  hobbie={add:'',remove:''};
  userlist=[];
  searchlist=[];
  searchText='';
  searchlistvalue=false;
  norecords=true;
  constructor(){
    for(let i=18;i<99;i++){
      this.ages.push(JSON.parse(JSON.stringify(i)));
    }
  }

  onageSelected(value){
    this.userDetails.age=value;
  }
  radioChangHandler(event){
    this.userDetails.gendar=event.target.value
  }
  addhobbies(){
    this.userDetails.hobbies.push(JSON.parse(JSON.stringify(this.hobbie.add)));
    this.hobbie.add=''
  }
  removehobbies(){
    let temp=[];
    if(this.userDetails.hobbies.length>0){
      for(let i=0;i<this.userDetails.hobbies.length;i++){
        if(this.userDetails.hobbies[i]!=this.hobbie.remove){
          temp.push(this.userDetails.hobbies[i]);
        }
      }
      this.userDetails.hobbies=temp;
      this.hobbie.remove=''
    }
  }
  addUser(){
    console.log(this.userDetails.varified);
    this.norecords=false;
    this.searchlistvalue=false;
    this.userlist.push(JSON.parse(JSON.stringify(this.userDetails)));
    this.resetForm();
  }
  resetForm(){
    this.userDetails={name:'',age:'1-25',gendar:'',hobbies:[],varified:false};
  }
  openUserRemoveModale(data){
    let j = this.userlist.findIndex(x => x._id === data);
    this.userlist.splice(j, 1);
    let i = this.searchlist.findIndex(x => x._id === data);
    this.searchlist.splice(i, 1);
  }
  searchUser() {
    if (this.searchText != '') {
      this.searchlistvalue = true;
      this.searchlist = [];
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].name == this.searchText) {
          this.searchlist.push(JSON.parse(JSON.stringify(this.userlist[i])));
          this.norecords=false;
        }
      }
      if(this.searchlist.length>0){
        this.norecords=false;
      }
    } else {
      this.searchlistvalue = false;
    }
  }
}

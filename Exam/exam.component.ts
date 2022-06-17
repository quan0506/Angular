import {Component} from "@angular/core";
import{examServices} from "./Exam/exam.Services"

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class examComponent {
  mails: IMail[] = [];
  categories: ICategory[] = [];

  constructor(private examServices: examServices) {
  }

  ngOnInit(){
    this.examServices.mailList().subscribe(value=>{
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: IMail[] = [];
    this.examServices.mailList().subscribe(value=>{
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })
  }
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {RestService} from '../../services/rest/rest.service';
import {environment} from '../../../environments/environment';
import {ActivatedRoute,Router} from '@angular/router'
export interface newss {
  hr: string;
  name: string;
  time: string;
};
const news: newss[] = [
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
  {hr:"www.tjab.org/Content.aspx?ArticleId=22d17f30-e4a0-48c1-9ce8-c37b0b2a0717",name:"贯彻落实习近平视察讲话精神 研究院汇报“成绩单” 跑出新区创新“加速度”",time:"2019-5-15 "},
];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@ViewChild('content') content: ElementRef;
scontent = '';

newshuzu = news;
  constructor(
    // private http:HttpClient, private restHost = environment.REST_HOST
    private restservice:RestService,
    private myRouter:Router
) {}
// chazhao(url:string): Observable<any>{
//   this.scontent=this.content.nativeElement.value

//   return this.http.post(`${this.restHost}/${url}`, this.scontent,
//   {headers: new HttpHeaders().set('Authorization', `Token `)})

// }
chazhao() {
  this.scontent = this.content.nativeElement.value;
  // this.restservice.postData('search/', this.scontent).subscribe(data => {console.log(data)})
  this.myRouter.navigate(['/table/',this.scontent])
}
target(){
  this.scontent = this.content.nativeElement.value;
  this.myRouter.navigate(['/graph/',this.scontent])
}
  ngOnInit() {

  }

}

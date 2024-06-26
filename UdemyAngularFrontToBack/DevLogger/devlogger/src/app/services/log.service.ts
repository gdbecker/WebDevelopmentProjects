import { Injectable } from '@angular/core';
import { Log } from '../models/Log'
import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: '', text: '', date:null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs= [
    //   {id: '1', text: 'Generated Components', date: new Date('12/12/2017 12:00:00')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('12/13/2017 12:00:00')},
    //   {id: '3', text: 'Log component added', date: new Date('12/14/2017 12:00:00')}
    // ]
    this.logs = [];
   }

   getLogs(): Observable<Log[]>{
     if(localStorage.getItem('logs')=== null){
       this.logs = [];
     }
     else{
       this.logs = JSON.parse(localStorage.getItem('logs'));
     }

     return of(this.logs.sort((a,b)=> {
       return b.date = a.date;
     }))
   }

   setFormLog(log: Log){
     this.logSource.next(log);
   }

   addLog(log: Log){
     this.logs.unshift(log);
     localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   updateLog(log: Log){
     this.logs.forEach((cur, index)=> {
       if(log.id === cur.id){
         this.logs.splice(index, 1);
       }
     });
     this.logs.unshift(log);
     localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   deleteLog(log: Log){
    this.logs.forEach((cur, index)=> {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   clearState(){
    this.stateSource.next(true);
   }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import io from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:3000');

  sendMessage1() {
    let observable = new Observable<{user:string , message: String , userID : string }>(observer => {
      this.socket.on('new message', (data:any) => {
        console.log(data,"shi22");

        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  newUserJoined()
  {
      let observable = new Observable<{user:String, message:String , userID  :String}>(observer=>{
          this.socket.on('new user joined', (data:any)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }

  message(data:any){
    console.log(data,'lkwnewkjekfjkewbfbfjhewbfewb');

    this.socket.emit('message',data)
  }

  // public sendMessage(message:any) {
  //   this.socket.emit('message', message);
  // }

  // public getNewMessage = () => {
  //   this.socket.on('new message', (message:any) =>{
  //     this.message$.next(message);
  //   });

  //   return this.message$.asObservable();
  // };
  joinRoom(data:any){
    this.socket.emit('join',data);
  }
}

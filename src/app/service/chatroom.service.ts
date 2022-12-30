import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
userInfo:any={};

  constructor() { }

  setUserInfo(data:any){
    this.userInfo={
      userName:data.name,
      userEmail:data.email,
      userId:this.genarateId()
    }
  }

  get getUserInfo(){
    return this.userInfo;
  }

  genarateId(){
    const length = 5;
    const randomNo = Math.floor(
      Math.pow(10, length - 1 ) + Math.random() * 9 * Math.pow(10, length - 1)
    );
    return randomNo;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogueboxComponent } from 'src/app/dialoguebox/dialoguebox.component';
import { ChatService } from 'src/app/service/chat.service';
import { ChatroomService } from 'src/app/service/chatroom.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatMessageForm!: FormGroup;
  newMessage:any;
  userList:any=[]
  chatData:any
  messageList:any=[];
  messageArray: Array<{ user: String; message: String }> = [];
  constructor(private chatService:ChatService, private dialog:MatDialog, private fb:FormBuilder, private room:ChatroomService) { }

  ngOnInit() {
    this.chatService.newUserJoined().subscribe((data:any)=>{
      this.messageArray.push(data)
  })

  this.chatService.sendMessage1().subscribe((data:any)=>{
    this.messageArray.push(data)
  })




    // this.chatService.getNewMessage().subscribe((message: any) => {
    //   this.messageList.push(message);
    //   console.log("this is get new message ..... in ngoninit()",message);

    // })
    this.chatMessageForm = this.fb.group({
      message:['']
    })
  }
  sendMessage() {
    this.newMessage=this.chatMessageForm.controls.message.value;
    let info ={
      message:this.newMessage,
      userName:this.room.getUserInfo.userName,
      userId:this.room.getUserInfo.userId,
      roomName:this.chatData.roomName
    }
    this.chatService.message(info);
    console.log(info, 'hgfhgkfk');



  }
  openDialogue(){
    const dialogRef = this.dialog.open(DialogueboxComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res,'res');
      this.userList.push(res)
      console.log(this.userList,'gfwyuwfw');

    })

  }
  onSelect(data:any){
    this.chatData=data;
  }
}

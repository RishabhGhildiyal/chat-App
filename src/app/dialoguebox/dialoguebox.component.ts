import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChatService } from '../service/chat.service';
import { ChatroomService } from '../service/chatroom.service';

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.scss']
})
export class DialogueboxComponent implements OnInit {

  constructor(private fb:FormBuilder, private room:ChatroomService, private chatservice:ChatService, private dialog:MatDialogRef<DialogueboxComponent>) { }

  dialogForm!:FormGroup
  chatroom:any
  ngOnInit(): void {
    // this.form()
  }
  // form(){
  //   this.dialogForm = this.fb.group({
  //     roomName: []
  //   })
  // }
  onSubmit() {
    console.log("hiiiiiiiiiii");
    let data={
      userName:this.room.getUserInfo.userName,
      userid:this.room.getUserInfo.newUserId,
      roomName:this.chatroom
    }
    this.chatservice.joinRoom(data);
    this.dialog.close(data);
    // if (this.dialogForm.valid) {
    //   console.log(data,"hhihihihihi!",this.room.getUserInfo);

    // }
  }
}

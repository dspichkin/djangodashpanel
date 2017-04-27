import { Component, OnInit } from '@angular/core';


import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    loading: boolean = false;
    error_message;
    user;

    constructor (private dataService: DataService, private userService: UserService) {
        
    }


    ngOnInit() { 
        console.log("AppComponent");
    }
    

    getUser() {
        let self = this;
        self.loading = true;
        
        
    }
}

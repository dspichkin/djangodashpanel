import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from '../../../services/user.service';

declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
})

export class NavigationComponent {

	user = {
		username: ""
	};

    constructor(private router: Router, private userService: UserService) {}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    ngOnInit() { 
    	let self = this;
    	
    	this.userService.getUserFromServer(function(user) {
    		self.user = user;
    		console.log("!!!!", self.user)	
    	})
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }


}
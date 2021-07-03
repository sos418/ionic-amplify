import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  async signUp() {
    const username : string = 'Sam';
    const password : string = '1qaz!QAZ';
    const email : string = 'sos84418@gmail.com';
    const phone_number : string = '+886978822075';
      try {
          const { user } = await Auth.signUp({
              username,
              password,
              attributes: {
                  email,          // optional
                  phone_number,   // optional - E.164 number convention
                  // other custom attributes 
              }
          });
          console.log('!!! SignUp:',JSON.stringify(user));
      } catch (error) {
          console.log('error signing up:', JSON.stringify(error));
      }
  }

  async  confirmSignUp() {
    try {
      const username : string = 'sam';
      const code : string = '585496';
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', JSON.stringify(error));
    }
  }

  async signIn() {
    const username : string = 'sam';
    const password : string = '1qaz!QAZ';
    try {
        const user = await Auth.signIn(username, password);
        console.log('!!! success signing in', JSON.stringify(user));
    } catch (error) {
        console.log('error signing in', JSON.stringify(error));
    }
  }


}

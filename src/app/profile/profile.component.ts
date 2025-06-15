import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { GetUserInfo, User } from '../models/user';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule,  NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User();
  currentUserId?: number;

  userInfo: GetUserInfo | undefined;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.fetchUserInfo();

    this.currentUserId = Number(localStorage.getItem('id'));
    console.log(`Current User ID: ${this.currentUserId}`);

  }
  fetchUserInfo() {

    const userId = localStorage.getItem('id');
    if (!userId) return;

    this.userService.getCurrentUser().subscribe({
      next: (res: GetUserInfo) => {
        // alert('successfully retraive!');
        this.userInfo = res;
      },
      error: (err) => {
        console.error('Failed to load user info:', err);
      }
    });

  }


  onEditUserInfo(a: User) {
    this.router.navigate(['/edit'], { state: { a } });
  }

  onChangePassword(): void {
    // Navigate to the change password route
    this.router.navigate(['/changePassword']);
  }
  // admin = {
  //   name: 'Farzana Akter Nilu',
  //   id:1001,
  //   email: 'farzana@example.com',
  //   phone:'+880123456789',
  //   role: 'Administrator',
  //   profileImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhISExEPERAQEhUVEhAQEBIVEBMTFREYFhYSGBUYHSggGBomGxcVITEhJSktLi4uFyEzODMsQygtLisBCgoKDg0OGxAQGi0lICYvLSstLSsvKystLS0tLSs1LSsuLS0tLS0tLS0tLS4rLS0tLS0tLSsyLS0uLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAcDBQYCCAH/xABCEAACAQMABgYHBQYEBwAAAAAAAQIDBBEFEiExQVEGB2FxgZETIjJSobHBI0NigtEUM0KSsvBTY3KiNXODo7PC4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACQRAQEAAgICAgICAwAAAAAAAAABAhEDBBIxIUEiYVFxMkKB/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmdRLe0jBK9jwy/gNI3EkEGV8+CXjtPH7ZPs8idVHlGxBrv2yfZ5HpX0uKXxQ1TyieCLG9jxTXxM8KsZbmn8yNJ3HsABIAAAAAAAAAAAAAAAAAAAAAAES4u8bI7+fAIt0z1a0Y734cSFVu5PdsXx8zA3k/DuRxcqNgHmpUjFOUmoxisuUmlFLm29yJcvQOM0x1iW1JuNGMriS/iT1KX8zTb8FjtObuOsa9k/VjbwXLUlJ+bl9CjLsYY/a/Hq8mX0tcFS0+sS/W9W8uyVKX0kjdaO6y4tpV7dxXv0Zay79SWNnixOzx1OXU5J9LABD0ZpShcw16NSNSPHHtRfKUXti+9Ewull9M9ll1WeldSXau39SbRuIy7HyZqwLEzKxuQQbe74S8/wBScmc6WS7AAQkAAAAAAAAAAAAAACJe18eqt/H9Ai3Txd3OfVW7i+ZEAO5FVuwA81JqKcpNRjFNyk9ySWW32YJELTel6NpSdWq8LdGK9ucuEYri/kVD0k6TV72XrvUpJ+rQi/UXJy9+Xa/BI89KtOyva7qbVSjmNGD/AIYZ3te9Le/BcDTnm83Nc7qenq9frzCbvsABnaQAASLC+q0JqpSnKnUjulHlya3Ndj2Ft9D+lUL2OrJKFzBZnBezJbvSQzw5rhnuZThnsbupRqQq03q1KcsxfbyfNNZTXJsu4uW4X9KebhnJP2+gAQdCaThdUKdeOxTW2PuyWyUfBpk49OXc3Hj2WXVCRa3Grsfs/Ijgkl03KYINlXx6r3Pd+hOOKtl2AAhIAAAAAAAAAAMdepqpvy7zVt5M97UzLHCPz4kc7kV5X5AAS5DjOs7S3oreNCLxO5b1scKUcOXm3Fdq1jsymenukPTXtXDzGjijH8ntf73Mo7Gfjh/bR1cPLk/pzwAPMesAAAAfkpJLL3ID9BNtdE1JzhSSfp6mJSi91KGMrW5PHrPlmK35RBTySLC6qNI+tXt29jSqwXasQn86fkyxijOjGkf2a6o1W8RjPE+WpP1ZN9yefAvM9Dq5bw1/Dy+3hrPf8gANLKGytausu1b/ANTWmW2qaslyexkWJxuq2gAOFoAAAAAAAAeas8Jvkj0Rr+Xq45v5CIt+GvbABYqAABjuKyhCU3uhGUn3RWX8j59nUcm5S2yk3KT5tvLfmXh0snq2V0/8iovOLX1KOMPbvzI9DpT4tAD1Spyk1GMZSk90YpuT7kjG3PIN1Z9Fb2p9y4L3qrUEvD2vgdJo3oJTjh16jqP3KeYQ7nL2n4YGxxFlZ1a0tSlCVSfKK3dre6K7Xg6W36Pfs8oJqNxfy20qC20KH+fUb344Zws7k9529O1VKKp0IU6UeaisLt1f4pd/x3P3Z2UKSerlym8zqSeak5c5S4925bkkRtOkLQOhI20ZNv0lartq1nvk28tLsz57yqrm3dKc6b305OL/ACvBdRwvWBobD/aoLY8RrLk90Z+OyPlzIlHFsvPovdutaW9RvMpUoqT5yitWT80yjC5Orz/h9D/q/wDnmbepfysYu7Pwl/bowAb3mgAA2ltPMVz3PwMpC0fLevH+/gTTirZfgABCQAAAAAIOkHtS7Pm//hONdfe14Ime3OXpHAB2rAABp+mCzY3X/Im/JZKQL36Q09a1uY+9b1V/25FEGDtz8o9Hpf416oUZ1JwpQWalSSjFcMt732cfAtrQWhaVpTUILM2vtKrXrzfbyXJcDhurm1U7qpUe1Uab1eyU3qp+Sn5llmTL+G2AAOHQAABr+kFt6W2rQWE5U3hvcmtqfmjYGG9/d1P9Ev6WEKg0hZSozcJYbSTTW5qSymXN0Po6llarnRjL+f1//YpzTVZ1K1Rra86kV/oSgviviXxQpKEYwW6EVFd0Vj6G/qT5tYe9fiR7ABuecAACRYv1+9P9TYmrtfbj3/Q2hxksw9AAIdAAAAAAa6+9rwRsSBpBbU+z6kz25y9IoAO1YAAMdxT1oSj70ZLzTR89Q3LuPoiU1FOT2KKy3yS2tnz02nlpYTeUuS5GLufTf0f9v+Ou6rGs3S44peWah35VnQG89FeqD2RrxlDs1vbj/S1+YtMw5+2/H0AA5dAAAEPTFdU6FWb3Rg8kw43rG0uqdONvH95WWZfhp5xt73leDJk3UWuL0OnOtQT2udekn+arHPzL/Z880ZuDjKOyUGnF8pReU/NF/aPu41qVOrH2asIzXZrLOO9bvA39Sz5jzu7L+NSAAbWEAAGW19uPf9DaGtsl667M/I2Rxksw9AAIdAAAAAARdIR2J8n8yUeK0Mxa5r4iIvpqQAWKgAAct1i6XVC1lTT+0uc04riofeS7tV475IqEu/SWibRTneV4+kdKGU6r1oU4QWtiMPZ35eWm8veUpc13UnOo1h1Jym0tyc5OTXmzz+1L5br0unZ46jBOUouM4vEoSUk+TTyn4MuHQWlYXVGFWOE2sTj7k17Uf07GmVCdR1Z1nGpcR26rjB44ZUpLPftMt9Nk9rGB+RknuP04dAAbwBhvbuFGnOpUerCCzJ/Rc29yXNlNaSv53VedaWzWeyPuxWyMfBfHL4ne9YtfNrjg6sF839CvKccI7x9bc5T5099+7iW30It7q1UrWtDWpbZ29xTevSae2UM74+8tZLe+wqQuDq90sq9pGDf2ltinJcdVL7OX8uzvizT1debL29+DpwAei8sAAEzR8d78CaYbSGIrt2mY4q2egAEJAAAAAAAAa28p4l2Pb+pgNpc0tZdq3GrO5VWU1QGG8u6dGEqlWcKdOPtTnJKK8X8jgdL9adJNxtqTqY++rZhDdscaeNaXjqi2SGONt1GXrP06lFWcH608SrY4RW2EO9vEu5LmVuKl7KtOc5SlOcnrTnLe5Ng8vlyuWW69jhwxxw1A6vq3obLipwlKEF3xTk/6onI1pYXfsO+6BSX7Nq8YVJZ7cpPPxx4Fdl8bVuNnnI6WMmtxmVw+KMAKNrrIzu57PiYpzb3nkDZJGh6b0da0l+CdOXhrqL/qK+LK6U1VG1rN8YqK75SS+pWpbjL47VZ2eWg73oVoi5oqjeW8oVqVWLjXoZ1KmFJxko59WTTTaba5ccnBE6x6T3tnhUazVPLbpSjGVNt9jWVnsaL+DXn8s/Y34fC+QVjofrW2qN1b4XGrbt+bpye7uk+4sPRek6FzBVKFSNWD4xe1P3ZJ7Yvse09PbybLEsyUKetJLz7jGbGypYWXvfyFpjN1IABwtAAAAAAAAAAANL0lu4WtGpczUnTpR1pqEcyfBYXfja9i3vG03R5qQUk4ySlGSacWspp7GmnvQRZt8x9Jukdxf1Neq8Qi36OjF/Z012c5Y3ye19i2LUHd9ZHQKVjJ16EXKym9qWW7eTfsy/Byl4Pg3w1OGWlzFuvmpk38RNtIYj37TK3gxVK8Y9vYiBdV5PjhckYJx5cmW3oXlx48dNgll5fgjsOr+v61anzip92q8N/7onIwllJ81k6LoBpD0F/bybxGcnSl3VFqpfzavkarwy4eDLjzWZ+dWADta+i6E99OOecfVfwIsuj1B/4i7pL6oxXqZ/TdO7hfcrlAdVHo9Q51H3yX0RJo6IoR3U03+LMvmJ1M/vRe7h9bVJ0+r4pUof4k2+9QW34yRw6Z2nW1fqpeqmsattTjDC4Sl60vg4eRxRsx4ZMPCsWXPbyecejHcQzF+fkQ6F68vO2OXjmtpOhNPc8mTLDLju2vHkx5MdNYTtC6Yr2dVVaE9Se6Se2E4+7OP8S+K4NbyJXhiTXl3HTdA+hlXSVXL1qdpTf2tbn/AJUOc3z3RW18E/Ql3Nx51mrqrl6F6WhpChG4UJQWXGcJJ4VSPtJS/ij2ru2PKXTmCxs6dCnClShGnSpxUYQjuSX97zOTtzJoAASAAAAAAAAAAAAAPNWnGScZJSjJNSjJJxaaw0096wU1086r50nO4sYyqUt87VZdSnzdPjOP4d64Z3K5wB8lfT+8Hioth9FdL+r6zv8ANTHoLl/f0kvWePvIbp8Nux7N5T3SToJf2WXOk6tFff0E5wxzkvah4rG3ewNJYSzBdmUSYyaaaeJJppremtqZrtH1Um452S3PgbAD6R6O6RVzbUay+8pxbXKWNsfB5XgbErPqb0xmFW1k9sH6SmvwyfrJd0tv50WYAMV1XjThKcmlGEW23uSSzkynD9bGmPQ2noU/XuXqY46m+b7ser+dAU9pO9detVrSzmrOU8Pek3sj4LC8CFczxGT7PnsMhC0hVWyK35ywItJbDIpY25x2m76OdEb6+x6CjL0b+/qZhQXbrv2u6KbLf6I9WNpaONWs1dXCw05xxRg9+Y0+L/FLO7KwBwnQnq6r3zhWudaharak1q1665RX8EH7z2tbt+srvsbOnQpwpUoRp0qaxCEViKRnBEmvSbbfmgAJQAAAAAAAAAAAAAAAAAAAAAOa090D0beNyq28Y1Ht9LRbpVG+bccKf5kzkr7qix+4u5PG6NxTTfjOGP6S0gBUGhuhGlbG4p14Qo1VCWJKlWScqb2SX2ijtxtXakW7BvCysPij0APxlW9L+iek9IXUpqnTp0oLUpelrRw1vc8Q1msvszhItMAVTYdUc3+/uox5xoU3J+E54/pOp0J1caMtWpKh6eovvLl+leVx1X6ifaoo60AfiWNnBH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='  // Replace with actual image URL or base64
  // };

  // ngOnInit(): void {
  //   // Load admin data if needed from a service
  // }

  // editProfile(): void {
  //   alert('Navigate to profile edit page or open modal');
  // }
}

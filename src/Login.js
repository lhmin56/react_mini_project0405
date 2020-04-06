import React from 'react';
import './Login.css';

export default class Login extends React.Component{ 
    constructor(props) { //이거 생성자
        super(props); 
        this.state = { 
            id: "", 
            pwd: ""
        };
    }; 

    handleChange(){
        if(this.state.id != "admin"){
            alert("test")
            return false;
        }
    } //이거 함수는 생성자 안에 쓰면안됭 오류나영 웅웅

 render(){
     return ( 
        <div class="inner_login">
            <div class="login_1">
                <form className="LoginForm" method="post" action=""> 
                <legend class="screen_out">로그인 정보 입력폼</legend>
                    <div class="box_login">
                        <div class="inp_text">
                            <label for="loginid">아이디</label>
                            <input type="text" className="form-control" id="id" placeholder="ID"></input>
                        </div>
                        <div class="inp_text">
                            <label for="loginid">비밀번호</label>
                            <input type="text" className="form-control" id="pwd" placeholder="PASSWORD"></input>
                        </div>
                    </div>       
                    <button type="submit" class="btn_login" onClick={this.handleChange}>로그인</button>
                    <div class="login_append">
                        <div class="inp_chk">       
                            <input type="checkbox" id="keepLogin" name="keepLogin"></input>
                            <label for="keepLogin"><span>로그인 상태 유지</span></label>
                        </div>
                        <span class="txt_find">
                            <a href="/loginId" class="link_find">아이디</a>
                                / 
                            <a href="/loginpwd" class="link_find">비밀번호 찾기</a>
                        </span>
                    </div>
                </form> 
            </div>
          </div>

         );
    }; 
} 


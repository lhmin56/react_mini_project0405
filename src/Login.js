import React from 'react';
import './Login.css';

export default class Login extends React.Component{ 
    constructor(props) {  //이거 생성자
        super(props);
        this.state = {
            id : '',
            password: ''
        }

    }; 
        appChange = e => {     //넹 글고 파라미터가 하나면 가로생략가능 두개면 ()해줘야됨
            this.setState({
                id : e.target.value
            });
        }

        /*
        appChange = function(e){
            // " => "  화살표가 function생략
        }
        */

        appClick = (e) => {
            if(this.state.id !== "admin"){
                alert("[" + this.state.id + "] 아이디를 다시 입력하세요.");
                e.preventDefault(); //이 함수에서 이벤트 발생하지 않도록 지정
            }
        }


 render(){
    // this를 쓰면 변수 안 만들어도 한번에 사용 할 수있다.
    // setState = 유동적인 값을 저장하는 것
    // props는 반환하지 않는 값을 저장하는 것
    //  const { id } = this.state;
    //  const { appChange, appClick } = this;
     return ( 
        <div class="inner_login">
            <div class="login_1">
                <form className="LoginForm" method="post" action=""> 
                <legend class="screen_out">로그인 정보 입력폼</legend>
                    <div class="box_login">
                        <div class="inp_text">
                            <label for="loginid">아이디</label>
                            <input type="text" className="form-control"  value={this.state.id} placeholder="ID" onChange={this.appChange}/>
                        </div>
                        <div class="inp_text">
                            <label for="loginid">비밀번호</label>
                            <input type="text" className="form-control" placeholder="PASSWORD"></input>
                        </div>
                    </div>       
                    <button type="submit" class="btn_login" onClick={this.appClick}>로그인</button>
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
    }
}


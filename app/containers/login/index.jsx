import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {EventUtil,hasClass} from '../../util/jsfunction';
import { Tooltip } from 'antd/dist/antd.js';
import {getLoginData} from '../../fetch/login/login';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoAction from '../../action/login/login';
import 'antd/dist/antd.less';
import '../../static/css/login/login.less';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            nameObj:{
                nameError:false,
                tooltipShow:false,
                msg:""
            },
            passObj:{
                passError:false,
                tooltipShow:false,
                msg:""
            }
        }
        
    };
    render(){
        return (
            <div className="login-page">
                <header>京东云服务器后台管理系统</header>
                <form id="login">
                    <div className="login-identify">
                        <i className="username-icon"></i>
                        <Tooltip title={this.state.nameObj.msg} visible={this.state.nameObj.tooltipShow} placement="right" >
                            <input type="text" onKeyPress={this.dealTextInput.bind(this)} name="username"  className={"username " +(this.state.nameObj.nameError?'error':'')}  placeholder="请输入用户名" autoComplete="off" />
                        </Tooltip>
                    </div>
                    <div className="login-identify">
                        <i className="password-icon"></i>
                        <Tooltip title={this.state.passObj.msg} visible={this.state.passObj.tooltipShow} placement="right" >
                            <input type="password" onKeyPress={this.dealTextInput.bind(this)} name="password" className={'password ' +(this.state.passObj.passError?'error':'')} placeholder="请输入密码" autoComplete="off" />
                        </Tooltip>
                    </div>
                    <div className="login-btn" onClick={this.loginOperator.bind(this)}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>

                </form>

            </div>
            
        )
    };
    loginOperator(){
        let usernameValue=document.querySelector('.username').value||'';
        let passwordValue=document.querySelector('.password').value||'';
        usernameValue=='' ? this.setState({nameObj:{nameError:true,msg:"用户名不能为空！",tooltipShow:true}}) :'';
        passwordValue=='' ? this.setState({passObj:{passError:true,msg:"密码不能为空！",tooltipShow:true}}) :'';  
        var params={
            username:usernameValue,
            password:passwordValue
        } 
        const result=getLoginData(params);
        result.then((res)=>{
            return res.json();
        }).then((json)=>{
            if(json.meta.status==1){
                this.setState({
                    nameObj:{nameError:true,msg:"您输入的用户名有误",tooltipShow:true},
                    passObj:{passError:true,msg:"您输入的密码有误",tooltipShow:true} 
                })
            }else{
                this.props.userInfoActions.saveLoginData(json);
                hashHistory.push('/index');

            }
            const stringifyData=JSON.stringify(json.data);
            localStorage.setItem("userInfo",stringifyData);
        });
        
    };
    dealTextInput(event){
        let target=event.target;
        console.log(hasClass(target,"username"))
        if(hasClass(target,"username")){
            hasClass(target,"error")?this.setState({nameObj:{nameError:false,tooltipShow:false}}) :'';
          
        }else if(hasClass(target,"password")){
            hasClass(target,"error")?this.setState({passObj:{passError:false,tooltipShow:false}}) :'';
          
        }      
    }
    componentDidMount(){

    }
}
function mapStateToProps(state){
    return {
       
    }
}
function mapDispatchToProps(dispatcher){
    return {
        userInfoActions:bindActionCreators(userInfoAction,dispatcher)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
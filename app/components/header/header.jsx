import React from 'react';
import PureRenderMinxin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {EventUtil,hasClass} from '../../util/jsfunction';
import {bindActionCreators} from 'redux';
import ProductDetail from './subpage/productDetail';
import './header.less';
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMinxin
        .shouldComponentUpdate
        .bind(this);
        this.state = {
            collapsed: false,
            workSheetStatus:{
                isShow:'hidden',
                hasChose:''
            },
            productStatus:{
                isShow:'hidden',
                hasChose:'' 
            },
            costStatus:{
                isShow:'hidden',
                hasChose:''  
            }
        }
    };
    render() {
        return (
            <div className='list-header clearfix'>
                <p className="header-logo-wrapper"><i className="header-logo"></i></p>
                <ul className='list-menu'>
                    <li className="left-menu"><Link to="">概览</Link></li>
                    <li className={"hasSelect left-menu "+this.state.productStatus.hasChose} ref="product" onClick={this.dealDropDown.bind(this)}>
                        <span>产品</span>
                        <i className={"drop-down-icon "+this.state.productStatus.hasChose}></i>
                         <div className={"work-sheet-select product-sheet "+this.state.productStatus.isShow}>
                            <ProductDetail></ProductDetail>
                        </div>
                    </li>
                    <li className ={"hasSelect right-menu"}><Link to="">jd_1582702454</Link><i className="drop-down-icon"></i></li>
                    <li className="right-menu"><Link to="">帮助中心</Link></li>
                    <li className="right-menu"><Link to="">备案</Link></li>
                    <li className = {"hasSelect right-menu "+this.state.workSheetStatus.hasChose} ref="workSheet" onClick={this.dealDropDown.bind(this)}>
                        <span>工单</span>
                        <i className={"drop-down-icon "+this.state.workSheetStatus.hasChose}></i>
                        <ul className={"work-sheet-select "+this.state.workSheetStatus.isShow}>
                            <li>提交工单</li>
                            <li>我的工单</li>
                        </ul>
                    </li>
                    <li className = {"hasSelect right-menu "+this.state.costStatus.hasChose} ref="cost" onClick={this.dealDropDown.bind(this)}>
                        <span>费用</span>
                        <i className={"drop-down-icon "+this.state.costStatus.hasChose}></i>
                        <ul className={"work-sheet-select "+this.state.costStatus.isShow}>
                            <li>充值</li>
                            <li>订单</li>
                            <li>发票</li>
                            <li>代金券</li>
                            <li>消费记录</li>
                            <li>续费管理</li>
                        </ul>
                    </li>
                    <li className="right-menu"><Link to="">消息</Link><span className='total'>24</span></li>


                </ul>
            </div>
        );
    };
    dealDropDown(event){
        console.log("进入下拉")
        // var target = EventUtil.getTarget(event);
        const target=event.currentTarget;
        // 因为React委托的document 和原生document不是同一个事物
        EventUtil.stopPropagation(event);
        event.nativeEvent.stopImmediatePropagation();
        if(this.refs.product==target){
            if( this.state.productStatus.isShow == "hidden"){
                this.setState({
                    productStatus:{isShow:'',hasChose:'select'}, 
                    workSheetStatus:{isShow:'hidden',hasChose:''},
                    costStatus:{isShow:'hidden',hasChose:''  }
                })
            }else{
                this.setState({
                    productStatus: {isShow:'hidden',hasChose:""},
                    workSheetStatus:{isShow:'hidden',hasChose:''},
                    costStatus:{isShow:'hidden',hasChose:''  }
                })
            }       
        }else if(this.refs.workSheet==target){
            if( this.state.workSheetStatus.isShow == "hidden"){
                this.setState({
                    workSheetStatus:{isShow:'',hasChose:'select'},
                    productStatus:{isShow:'hidden',hasChose:''},
                    costStatus:{isShow:'hidden',hasChose:''},
                })
            }else{
                this.setState({
                    workSheetStatus: {isShow:'hidden',hasChose:""},
                    productStatus:{isShow:'hidden',hasChose:''},
                    costStatus:{isShow:'hidden',hasChose:''},
                })
            }       
        }else if(this.refs.cost==target){
             if( this.state.costStatus.isShow == "hidden"){
                this.setState({
                    costStatus:{isShow:'',hasChose:'select'},
                    workSheetStatus:{isShow:'hidden',hasChose:''},
                    productStatus:{isShow:'hidden',hasChose:''},
                })
            }else{
                this.setState({
                    costStatus: {isShow:'hidden',hasChose:""},
                    workSheetStatus:{isShow:'hidden',hasChose:''},
                    productStatus:{isShow:'hidden',hasChose:''},
                })
            }       
        }
       
    };
    docClick(event){
        const target=EventUtil.getTarget(event);
        if(hasClass(target,"hacSelect")){
            return ;
        }
        console.log("进入docment点击事件")
        this.setState( {
            collapsed: false,
            workSheetStatus:{
                isShow:'hidden',
                hasChose:''
            },
            productStatus:{
                isShow:'hidden',
                hasChose:'' 
            },
            costStatus:{
                isShow:'hidden',
                hasChose:''  
            }
        })
    };
    componentDidMount(){
        console.log(this.props.userInfo,"userinfo");
        EventUtil.addHandler(document,"click",this.docClick.bind(this))
    }
}
function mapStateToProps(state) {
    return {
         userInfo:state.userInfo.data|| JSON.parse(localStorage.getItem("userInfo"))
    }
}
function mapDispatchToProps(dispatcher) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React from 'react';
import PureRenderMinxin from 'react-addons-pure-render-mixin';
import './productDetail.less';
class ProductDetail extends React.Component{
    constructor(props){
         super(props);
         this.shouldComponentUpdate=PureRenderMinxin.shouldComponentUpdate.bind(this);
         this.state={

         }
    };
    render(){
        return (
            <div className="product-list">
                <ul>
                    <li className="table-head">
                        <span>弹性计算</span>
                        <span>网络</span>
                        <span>数据库与缓存</span>
                        <span>存储与CDN</span>
                        <span>云安全</span>
                    </li>
                    <li>
                        <span>云主机</span>
                        <span>私有网络</span>
                        <span>云数据库</span>
                        <span>对象存储</span>
                        <span>DDos基础防护</span>
                    </li>
                    <li>
                        <span> </span>
                        <span>负载均衡</span>
                        <span>缓存Redis</span>
                        <span></span>
                        <span>IP高防</span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>网站高防</span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>主机安全</span>
                        
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><span>SSL数字证书</span></span>
                        
                    </li>

                </ul>
                <ul>
                    <li className="table-head">
                        <span>管理<hr/></span>
                        <span>域名服务器<hr/></span>
                        <span>备案服务<hr/></span>
                        <span>大数据分析<hr/></span>
                        <span>人工智能<hr/></span>
                    </li>
                    <li>
                        <span>续费管理</span>
                        <span>域名服务</span>
                        <span>备案服务</span>
                        <span>数据工厂</span>
                        <span>认知服务</span>
                    </li>
                    <li>
                        <span>云监控</span>
                        <span></span>
                        <span></span>
                        <span>数据计算服务</span>
                        <span>登月机器学习</span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>BI报表</span>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>数据大屏</span>
                        <span></span>        
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>JMR</span>
                        <span></span>                      
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>流数据总线</span>
                        <span></span>
                        
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>流计算</span>
                        <span></span>    
                    </li>
                </ul>
                <ul>
                    <li className="table-head">
                        <span>云市场<hr/></span>
                    </li>
                    <li>
                        <span>云市场</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </div>
        )
    };
    componentDidMount(){

    }
 }
 export default ProductDetail;
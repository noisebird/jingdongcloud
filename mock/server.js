const koa = require('koa');
const app = new koa();
var router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
router.get('/', async(ctx, next) => {
    this.body = 'hello koa !'
});

router.get('/api', async(ctx, next) => {
    this.body = 'test data'
});
// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', async(ctx, next) => {
    console.log('首页 —— 广告（超值特惠）')

    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', async(ctx, next) => {
    console.log('首页 —— 推荐列表（猜你喜欢）')

    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', async(ctx, next) => {
        console.log('搜索结果页 - 搜索结果')

        // 参数
        const params = this.params
        const paramsPage = params.page
        const paramsCity = params.city
        const paramsCategory = params.category
        const paramsKeyword = params.keyword

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)
        console.log('关键字：' + paramsKeyword)

        this.body = searchListData
    })
    // 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', async(ctx, next) => {
    console.log('搜索结果页 - 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', async(ctx, next) => {
        console.log('详情页 - 商户信息')

        const params = this.params
        const id = params.id

        console.log('商户id: ' + id)

        this.body = detailInfo
    })
    // 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', async(ctx, next) => {
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    this.body = detailComment
});
const loginData = require('./login/login.js');
router.post('/api/v1/login', async(ctx, next) => {
    const params = ctx.request.body;
    let data = loginData.data;
    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].username == params.username && data[i].password == params.password) {
            index = i;
        }
    }
    let obj = {
        data: index == -1 ? [] : data[index],
        meta: {
            status: index == -1 ? 1 : 0
        }
    };
    ctx.response.body = obj;
})
app.use(koaBody());
app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
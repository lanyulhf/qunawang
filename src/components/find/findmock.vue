<template>
    <div id="box">
        <div class="panel" v-for="d in data">
            <img :src="d.url" alt="">
            <div class="shadow">
                <i class="iconfont icon-location"></i>
                <span class="shadowTop">{{d.name}}</span>
            </div>
            <div class="shadowBottom">
                <div class="dis">
                    <div class="head">
                        <img :src="d.uRl" alt="">
                        <span>{{d.title}}</span>
                    </div>
                    <div class="bot">
                        <i class="iconfont icon-aixin1"></i>
                        <span>{{d.number}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "findmock",
        data(){
            return{
                data:[]
            }
        },
        created(){
            this.GETJSON()
            this.finddata()
        },
        methods:{
            GETJSON(){
                // 根据number判断获取那个Api
                /*let url = ''
                if(this.number == 0){
                  url = '../../static/json/mock.json'
                }else{
                  url = '../../static/json/mockOne.json'
                }*/
                fetch('../../../static/json/mock.json').then((res)=>{
                    res.json().then((data)=>{
                        this.data = data
                    })
                })
            },
            finddata(){
                window.onload = function () {
                    let oBox   	   = document.getElementById('box');
                    let aPanel 	   = Array.from(oBox.children);
                    const iPanelW  = aPanel[0].offsetWidth; // 记录列的宽度

                    // 计算最多容纳列数
                    let iWinW   = oBox.clientWidth;
                    let iMaxCol = Math.floor(iWinW / iPanelW);

                    // 指定box的宽度
                    oBox.style.width = iMaxCol * iPanelW + 'px';


                    // 记录每一列的高度
                    let aColH = [];

                    // 遍历指定位置
                    aPanel.forEach((v, k) => {
                        // 如果当前panel为第一排，则top为0
                        if(k < iMaxCol) {
                            v.style.top = 0;
                            v.style.left = k * iPanelW + 'px';

                            // 记录每一列的高度
                            aColH.push(v.offsetHeight);
                        } else {
                            // 寻找最矮列的高度值和下标
                            var iMinH = Math.min(...aColH);
                            var iMinK = aColH.indexOf(iMinH);


                            // 指定位置
                            v.style.left = iMinK * iPanelW + 'px';
                            v.style.top  = iMinH + 'px';

                            // 更新列的高度
                            aColH[iMinK] += v.offsetHeight;
                        }
                    });
                //     // 滚动加载新的数据
                //     var loadOK = true; // 可以加载新的数据
                //     window.onscroll = function () {
                //         let iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
                //         let oLastPanel = aPanel[aPanel.length - 1];
                //         if(loadOK && (iWinH + iScrollT > oLastPanel.offsetTop + oLastPanel.offsetHeight / 2)) {
                //             loadOK = false;
                //             // 加载新的数据
                //             data.forEach(v => {
                //                 let oNewPanel = document.createElement('div');
                //                 oNewPanel.className = 'panel';
                //
                //                 // 创建IMG
                //                 let oNewImg = document.createElement('img');
                //                 oNewImg.src = v.url;
                //
                //                 // 计算图片等比缩放后实际的高度
                //                 // 公式：iActualW / iActualH = iScaleW / iScaleH
                //                 let iImgH = v.height * iImgW / v.width;
                //                 oNewImg.style.height = iMinH + 'px';
                //
                //                 oNewPanel.appendChild(oNewImg);
                //                 oBox.appendChild(oNewPanel);
                //
                //                 // 寻找最矮列的高度值和下标
                //                 var iMinH = Math.min(...aColH);
                //                 var iMinK = aColH.indexOf(iMinH);
                //
                //                 oNewPanel.style.left = iMinK * iPanelW + 'px';
                //                 oNewPanel.style.top = iMinH + 'px';
                //
                //                 // 更新列的高度
                //                 aColH[iMinK] += oNewPanel.offsetHeight;
                //             });
                //             // 更新最后的列
                //             aPanel = Array.from(oBox.children);
                //             // 打开开关
                //             loadOK = true;
                //         }
                //     };
                //
                //     window.onresize = function () {
                //         // 更新视窗的宽度和高度
                //         iWinW   = document.documentElement.clientWidth;
                //         iWinH   = document.documentElement.clientHeight;
                //
                //         // 更新列数
                //         iMaxCol = Math.floor(iWinW / iPanelW);
                //
                //         // 更新box的宽度
                //         oBox.style.width = iMaxCol * iPanelW + 'px';
                //
                //         // 重新排版
                //         aColH = [];
                //
                //         // 遍历指定位置
                //         aPanel.forEach((v, k) => {
                //             // 如果当前panel为第一排，则top为0
                //             if(k < iMaxCol) {
                //                 v.style.top = 0;
                //                 v.style.left = k * iPanelW + 'px';
                //
                //                 // 记录每一列的高度
                //                 aColH.push(v.offsetHeight);
                //             } else {
                //                 // 寻找最矮列的高度值和下标
                //                 var iMinH = Math.min(...aColH);
                //                 var iMinK = aColH.indexOf(iMinH);
                //
                //                 // 指定位置
                //                 v.style.left = iMinK * iPanelW + 'px';
                //                 v.style.top  = iMinH + 'px';
                //
                //                 // 更新列的高度
                //                 aColH[iMinK] += v.offsetHeight;
                //             }
                //         });
                //     };
                };
            }
        },
        // 监听number的变化
        watch:{
            /**
             * 这个方法名称就是data里number
             * 当data中的number发生改变的时候再次调用Api重新渲染页面
             * */
            number(){
                this.GETJSON()
            }
        }
    }
</script>

<style scoped>
    #box {
        position: relative;
        margin: 0 auto;
    }
    #box .panel {
        width: 49%;
        overflow: hidden;
        position: absolute;
    }
    .shadow .iconfont{
        padding: 0 0.05rem 0 0.1rem;
        line-height: 0.28rem;
    }
    .shadow span{
        /*line-height: 0.26rem;*/
    }
    #box .shadow{
        width: 95%;
        font-size: 13px;
        color:#ffffff;
        height: 0.26rem;
        background: rgba(158,182,182,.7);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        position: absolute;
        left: 6px;
        top: 4px;
    }
    .dis{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #box img {
        position: relative;
        border-radius: 8px;
        margin:4px 8px 4px 6px;
        width:95%;
        background: #fff;
    }
    .shadowBottom{
        width: 95%;
        height: 0.24rem;
        /*background:red;*/
        position: absolute;
        left: 6px;
        bottom: 18px;
    }
    #box .panel .shadowBottom  img{
        width: 0.2rem;
        height: 0.2rem;
        margin-bottom:0.03rem ;
    }
    #box .panel .shadowBottom .bot {
        color:#fff;
        font-size: 13px;
    }
    #box .panel .shadowBottom .bot .iconfont{
        font-size: 12px;
    }
    .head{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .head span{
        font-size: 10px;
        color: #fff;
    }
    .bot span{
        margin-bottom: 0.02rem;
        margin-right: 0.05rem;
    }
</style>

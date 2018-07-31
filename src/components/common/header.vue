<template>
<div>
  <div class="pub-header">
    <div class="pub-header-left">
      <strong class="font-Strong">MINMAL</strong>
      <svg class="icon menu" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <div class="pub-header-center">
      <svg class="icon i-shuaxin" aria-hidden="true">
        <use xlink:href="#icon-shuaxin"></use>
      </svg>
      <div class="pub-header-search">|
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-soushuo"></use>
        </svg>
        <input type="text" placeholder="Search..." class="search"/>
      </div>
    </div>

    <div class="pub-header-right">
      <ul>
        <li class="licli">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shujia"></use>
          </svg>
          <a href="#">2</a>
        </li>
        <li class="licli">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huaban"></use>
          </svg>
          <a href="#">2</a>
        </li>
        <li class="licli">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon--3"></use>
          </svg>
          <a href="#">2</a>
        </li>
        <li class="licli l1">
          <img src="../../assets/img/public-person.jpg"/>
          <a href="#">
            John Douey
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-control-arr-copy-copy"></use>
            </svg>
          </a>
        </li>
        <li class="licli">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huaban"></use>
            </svg>
          </a>

        </li>
      </ul>
    </div>
    <!--侧边栏部分-->
    <ul class="pub-fixleft">
      <li class="list">
        <a href="#" class="toggle-a">
          <span>Navigation</span>
          <svg class="icon downjt" aria-hidden="true">
            <use xlink:href="#icon-jiantou0101-copy"></use>
          </svg>
        </a>
        <ul class="fixleft-toggle">
          <li class="lih">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dashboard"></use>
            </svg>
            <router-link to="indexIn">
            <a href="#">
              <span>首页</span>
            </a>
            </router-link>
            <div class="bgli"></div>
          </li>
          <li class="lih">
            <svg class="icon ichover" aria-hidden="true">
              <use xlink:href="#icon-menu"></use>
            </svg>
            <router-link to="/Purchase">
            <a href="#">
              <span>购片信息</span>
            </a>
            </router-link>
            <div class="bgli"></div>

          </li>
          <li class="lih">
            <svg class="icon ichover" aria-hidden="true">
              <use xlink:href="#icon-play"></use>
            </svg>
            <a href="#">
              <span>用户信息</span>

            </a>
            <div class="bgli"></div>
          </li>
          <li class="lih">
            <svg class="icon ichover" aria-hidden="true">
              <use xlink:href="#icon-dianshi"></use>
            </svg>
            <a href="#">
              <span>ssss</span>
            </a>
            <div class="bgli"></div>
          </li>
          <li class="lih">
            <svg class="icon ichover" aria-hidden="true">
              <use xlink:href="#icon-jiugongge1"></use>
            </svg>
            <a href="#">
              <span>sssss</span>

              <div class="bgli"></div>
            </a>
          </li>
        </ul>
      </li>

      <li class="list">
        <a href="#" class="toggle-a">
          <span>ORDERS SUMMARY</span>
          <svg class="icon downjt" aria-hidden="true">
            <use xlink:href="#icon-jiantou0101-copy"></use>
          </svg>
        </a>
        <ul class="fixleft-toggle">
          <li class="lih litwo">
            <div class="media">
              <div class="media-left">
                THIS WEEK SALES
                <h3>26,149</h3>
              </div>
              <div id="chars"></div>
            </div>
            <div class="media">
              <div class="media-left">
                THIS WEEK BALANCE
                <h3>318,651</h3>
              </div>
              <div id="chars2"></div>
            </div>
          </li>

        </ul>
      </li>
      <li class="list">

        <a href="#" class="toggle-a">
          <span>GENERAL SETTINGS</span>
          <svg class="icon downjt" aria-hidden="true">
            <use xlink:href="#icon-jiantou0101-copy"></use>
          </svg>
        </a>
        <ul class="fixleft-toggle">
          <li class="lih litwo">
            <div class="media">
              <div class="media-left">
                <h3>SWITCH ON</h3>
              </div>
              <div class="pub-on"><span class="ball"></span></div>
            </div>
            <div class="media">
              <div class="media-left">
                <h3>SWITCH OFF</h3>
              </div>
              <div class="pub-on"><span class="ball"></span></div>
            </div>
          </li>

        </ul>

      </li>
    </ul>

  </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden; }

  * {
    margin: 0;
    padding: 0; }

  body {
    font-family: "Microsoft Yahei",Arial;
    width: 100%;

    /* background:url(../img/bg.jpg) no-repeat ;  */
    /* background-size:100% 100%;  */
  }

  a {
    text-decoration: none; }

  ul, ol {
    list-style: none; }

  .pub-header {
    width: 100%;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.1);
    position: relative; }

  .pub-header-left {
    width:10%;
    height: 45px;
    box-sizing: border-box;
    padding: 0 15px;
    color: white;
    float: left;
    line-height: 45px; }
  .pub-header-left svg {
    color: white; }
  .pub-header-left strong {
    font-size: 20px;
    margin-right: 108px; }

  .pub-header-center {
    float: left;
    height: 45px;
    line-height: 45px; }
  .pub-header-center svg {
    margin-left: 10px; }
  .pub-header-center .i-shuaxin {
    margin-right: 10px; }
  .pub-header-center .pub-header-search {
    float: right; }
  .pub-header-center .pub-header-search .search {
    width: 177px;
    height: 24px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #a27d75;
    margin-right: 20px;
    font-size: 16px; }

  .pub-header-right {
    float: right;
    height: 45px; }
  .pub-header-right ul {
    list-style: none; }
  .pub-header-right ul li {
    float: left; }
  .pub-header-right ul li a {
    margin: 0 10px;
    line-height: 45px;
    font-size: 14px; }
  .pub-header-right ul li img {
    vertical-align: middle;
    float: left; }

  .clickmenu {
    width: 50px !important;
    background: rgba(0, 0, 0, 0.1); }

  .draw {
    display: none !important; }

  .pub-fixleft {
    position: absolute;
    left: 0;
    top: 45px;
    width: 20%;
    background: rgba(0, 0, 0, 0.1); }

  .pub-fixleft .toggle-a {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    font-size: 12px;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    color: #AA7764; }

  .fixleft-toggle li {
    box-sizing: border-box;
    padding: 0 15px;
    line-height: 40px;
    position: relative;
    z-index: 666; }
  .fixleft-toggle li a svg {
    color: #AF836E; }

  .fixleft-toggle li:first-child {
    background: rgba(0, 0, 0, 0.2); }

  .fixleft-toggle .toggle-ul-hover {
    position: absolute;
    left: 100%;
    top: 0;
    display: none; }

  .bgli {
    width: 80%;
    height: 41px;
    position: absolute;
    left: -100%;
    top: 0;
    background: linear-gradient(to right, #533B58 0%, transparent 100%);
    opacity: 0.2;
    z-index: 1; }

  .fixleft-toggle span {
    font-size: 12px;
    color: white;
    margin-left: 5px;
    font-weight: 600; }

  .fixleft-toggle .jia {
    position: absolute;
    right: 15px;
    margin-top: 10px; }

  .toggle-ul {
    width: 100%;
    display: none;
    font-size: 12px; }

  .toggle-ul a {
    color: white;
    font-size: 12px; }

  .fixleft-toggle .litwo .media {
    margin-top: 10px; }

  .fixleft-toggle .litwo .media .media-left {
    width: 141px;
    height: 46px;
    line-height: 22px;
    font-size: 12px;
    float: left;
    color: white; }
  .fixleft-toggle .litwo .media .media-left h3 {
    font-size: 16px; }

  .fixleft-toggle .litwo .media #chars {
    width: 69px;
    height: 46px;
    float: right; }

  .fixleft-toggle .litwo .media #chars2 {
    width: 69px;
    height: 46px;
    float: right; }

  .litwo .pub-off {
    width: 40px;
    height: 25px;
    float: right;
    position: relative;
    background: #16A085;
    border-radius: 15px; }
  .litwo .pub-off span {
    display: block;
    width: 21px;
    height: 21px;
    background: white;
    border-radius: 50%;
    vertical-align: middle;
    position: absolute;
    right: 0;
    top: 2px; }

  .litwo .pub-on {
    width: 40px;
    height: 25px;
    position: relative;
    float: right;
    background: #16A085;
    border-radius: 15px; }
  .litwo .pub-on span {
    display: block;
    width: 21px;
    height: 21px;
    background: white;
    border-radius: 50%;
    vertical-align: middle;
    position: absolute;
    right: 0;
    top: 2px; }

  @media screen and (max-width: 1000px) {
    .pub-header-left {
      width: 50px;
      background: rgba(0, 0, 0, 0.1); }
    .font-Strong {
      display: none;
      float: left; }
    .fixleft-toggle {
      width: 50px; }
    .fixleft-toggle a {
      display: none; }
    .list .toggle-a {
      display: none; }
    .list .toggle-a span {
      display: none; }
    .list .toggle-a svg {
      display: none; }
    .litwo {
      display: none; }
    .pub-fixleft {
      width: 50px !important; }
    .pub-fixleft .list {
      width: 50px !important; } }

  @media screen and (max-width: 740px) {
    .search {
      display: none; }
    .l1 {
      display: none; } }

</style>

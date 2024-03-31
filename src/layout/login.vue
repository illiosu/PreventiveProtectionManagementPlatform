<template>
    <div class="page ">
        <div class="block_1 flex-row">
            <div class="box_3 ">
                <div class="group_1 ">
                    <input class="name" v-model="name" type="text" placeholder="请输入账号" />
                    <img class="names" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd37f1f02a9c2eb4d494325b0adb13a7c9b40e9b03b829de5664901d1372c6e7" />
                    <img class="image_1" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd37f1f02a9c2eb4d494325b0adb13a7c9b40e9b03b829de5664901d1372c6e7" />
                    <input class="password" v-model="password" type="password" placeholder="请输入密码">
                    <img class="image_2" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd37f1f02a9c2eb4d494325b0adb13a7c9b40e9b03b829de5664901d1372c6e7" />
                    <div class="box_2 ">
                        <span class="text_4" @click="myFunction">登&nbsp;录</span>
                    </div>
                    <div class="image_5 ">
                        <div class="box_1 "></div>
                        <span
                            class="text_1">Preventive&nbsp;Protection&nbsp;Management&nbsp;Platform&nbsp;for&nbsp;Historical&nbsp;Buildings</span>
                        <span class="text_5">游客登录</span>
                    </div>
                </div>
                <img class="image_7" referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngae2cbaaa35c70b50ce45504548d7a76ebc600c696158df76a5c99e78ffd87241" />
            </div>
            <div class="block_3 flex-row">
                <img class="image_6" referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0ba11552281477647b40dd8212632cccffe71c77d2693156b9516eadb72fc573" />
                <span class="text_6">Copyright&nbsp;&nbsp;©&nbsp;上海建工四建集团有限公司&nbsp;All&nbsp;rights&nbsp;reserved</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { login } from '../api/loginapi/loginApi'
const route = useRouter()

const name = ref('')
const password = ref('')

const myFunction = () => {
    var data = {
        "userNumber": name.value,
        "userPassword": password.value
    }
    if (name.value != '' && password.value != '') {
        // fullscreenLoading.value = true
        login(data).then(res => {
            console.log(res);
            if (res.code == 200) {
                localStorage.setItem('token', res.data.token)
                route.push('/map')
                // route.push('/gis')

                // fullscreenLoading.value = false

            }
        })
    } else {
        ElMessage.error("用户名或密码不能为空")
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // 在这里执行按下回车键后需要执行的操作
        // console.log('回车键被按下了！');
        myFunction()

    }
});


</script>


<style scoped>
input:focus {
    outline: none;
}

.name {
    position: relative;
    top: 282px;
    left: 350px;
    width: 400px;
    height: 30px;
    border: 1px solid transparent;
    background-color: rgba(49, 47, 38, 0.3) !important;
    z-index: 99;
    color: #999;
}

.names {
    position: relative;
    top: 300px;
    left: -57px;
    height: 1px;
    width: 407px;
}

.password {
    position: absolute;
    top: 350px;
    left: 350px;
    background-color: rgba(49, 47, 38, 0.3);
    width: 396px;
    border: none;
    height: 30px;
    z-index: 99;
    border: 1px solid transparent;
    color: #999;
}

.page {
    position: relative;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    background: url(../static/img/beijing.png) no-repeat;
}



.group_1 {
    position: relative;
    width: 1100px;
    height: 647px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng948af378764f46777dbee364a6625f945780c33abd54ab4465b1a3f37235ed99) 100% no-repeat;
    background-size: 100% 100%;
    margin: 133px 0 0 410px;
}

.text_2 {
    width: 105px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.45);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
    margin: 299px 0 0 356px;
}

.image_1 {
    width: 0px;
    height: 0px;
    margin: 0px 0 0 350px;
}

.text_3 {
    width: 105px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.45);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
    margin: 49px 0 0 356px;
}

.image_2 {
    width: 400px;
    height: 1px;
    margin: 355px 0 0 0px;
}

.box_2 {
    width: 232px;
    height: 41px;
    /* 一点点黄色的 */
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc2c9375a460f40f1f45041fb83dc01fe4d00abf1a5b3685e2539fb7c7911b696) 9px 0px no-repeat;
    background-size: 213px 42px;
    margin: 43px 0 0 434px;
    z-index: 999;
}


.text_4 {
    width: 47px;
    height: 28px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 28px;
    position: absolute;
    left: 525px;
    bottom: 176px;
    z-index: 99999;
}

.image_4 {
    width: 232px;
    height: 1px;
    margin: 0 0 133px 434px;
}

.image_5 {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 1068px;
    height: 615px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng30f6b4b0eeed6db7c073380c95f8b813e9760360272a665801c4ada063d2b985) -1px -1px no-repeat;
    background-size: 1070px 617px;
}

.box_1 {
    width: 515px;
    height: 38px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6c270957c2618314f6e6fa571e57d131afe460d3ef6ffc5ffa26ff2a438f7109) 100% no-repeat;
    background-size: 100% 100%;
    margin: 129px 0 0 276px;
}

.text_1 {
    width: 439px;
    height: 10px;
    overflow-wrap: break-word;
    color: rgba(248, 235, 203, 1);
    font-size: 10px;
    letter-spacing: 0.9726112484931946px;
    text-transform: uppercase;
    font-family: SourceHanSansCN-Normal;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 15px;
    margin: 16px 0 0 314px;
}

.text_5 {
    width: 60px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(248, 235, 203, 0.9);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
    margin: 327px 0 74px 504px;
    position: absolute;
    left: 0px;
    bottom: 40px;
}

.image_7 {
    position: absolute;
    left: 879px;
    top: 56px;
    width: 162px;
    height: 147px;
}

.block_3 {
    width: 1920px;
    height: 91px;
    /* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc9ba53a0b516f82c1f5c523549b15104a8bb667c03a29b563f0a4907cf8abc31) 100% no-repeat; */
    background-size: 100% 100%;
    margin: 0px 0 0 180px;
}

.image_6 {
    width: 182px;
    height: 24px;
    margin: 75px 0 0 411px;
}

.text_6 {
    width: 352px;
    height: 18px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 18px;
    margin-left: 60px;
    margin-top: -20px;
    position: absolute;
    left: 750px;
    bottom: 40px;
}
</style>
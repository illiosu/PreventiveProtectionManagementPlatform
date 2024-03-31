<template>
    <!-- 主页面 -->
    <div class="index_home">
        <div class="index_home_img">
            <img src="../../static/img/leftLogo.png" alt="" />
        </div>

        <!-- 这里放导航栏 -->
        <div class="menu">
            <img src="../../static/img/left.png" class="img_left" alt="" />
            <img src="../../static/img/left.png" class="img_right" alt="" />
            <div style="padding: 10px 20px; margin-left: 30px" :class="{ active: index == 1 }" @click="btnIndex({
                index: 1,
                path: '/weibaoguanli'
            })">
                <div>
                    <img v-if="index != 1" src="../../static/img/维保管理.png" class="imgsClass" alt="" />
                    <img v-else src="../../static/img/维保管理-选中.png" class="imgsClass" alt="" />
                </div>
                <div>维保管理</div>
            </div>
            <div style="padding: 10px 20px"
                :class="{ active: index == 2 || index == '2_1' || index == '2_2' || index == '2_3' || index == '2_4' }"
                @click="
                    btnIndex({
                        index: 2,
                        path: '/biaoguansunshang',
                    })
                    ">
                <div>
                    <img v-if="index == 2 || index == '2_1' || index == '2_2' || index == '2_3' || index == '2_4'"
                        src="../../static/img/表观损伤-选中.png" class="imgsClass" alt="" />
                    <img v-else src="../../static/img/表观损伤.png" class="imgsClass" alt="" />
                </div>
                <div>表观损伤</div>
            </div>
            <div style="
            display: flex;
            background-color: rgba(58, 58, 58, 0.8);
            border-radius: 14px;
          " v-if="indesNum">
                <div style="padding: 10px 20px" :class="{ active: index == '2' }" @click="btnIndex({
                    index: '2',
                })">
                    <div>
                        <img v-if="index != '2'" src="../../static/img/首页.png" class="imgsClass" alt="" />
                        <img v-else src="../../static/img/首页-选中.png" class="imgsClass" alt="" />
                    </div>
                    <div>首页</div>
                </div>
                <div style="padding: 10px 20px" :class="{ active: index == '2_2' }" @click="btnIndex({
                    index: '2_2'
                })">
                    <div>
                        <img v-if="index != '2_2'" src="../../static/img/基础信息.png" class="imgsClass" alt="" />
                        <img v-else src="../../static/img/基础信息-选中.png" class="imgsClass" alt="" />
                    </div>
                    <div>基础信息</div>
                </div>
                <div style="padding: 10px 20px" :class="{ active: index == '2_3' }" @click="btnIndex({
                    index: '2_3'
                })">
                    <div>
                        <img v-if="index != '2_3'" src="../../static/img/损伤详情.png" class="imgsClass" alt="" />
                        <img v-else src="../../static/img/损伤详情-选中.png" class="imgsClass" alt="" />
                    </div>
                    <div>损伤详情</div>
                </div>
                <div v-if="menuS" style="
              display: flex;
              background-color: rgba(58, 58, 58, 1);
              border-radius: 14px;
            ">
                    <div style="padding: 10px 20px" :class="{ active: index == '2_3_1' }" @click="btnIndex({
                        index: '2_3_1',
                        path: '/sunshangxiangqing'
                    })">
                        <div>
                            <img v-if="index != '2_3_1'" src="../../static/img/表格模式.png" class="imgsClass" alt="" />
                            <img v-else src="../../static/img/表格模式-选中.png" class="imgsClass" alt="" />
                        </div>
                        <div>表格模式</div>
                    </div>
                    <div style="padding: 10px 20px" :class="{ active: index == '2_3_2' }" @click="btnIndex({
                        index: '2_3_2'
                    })">
                        <div>
                            <img v-if="index != '2_3_2'" src="../../static/img/模型模式.png" class="imgsClass" alt="" />
                            <img v-else src="../../static/img/模型模式-选中.png" class="imgsClass" alt="" />
                        </div>
                        <div>模型模式</div>
                    </div>
                </div>
                <div style="padding: 10px 20px" :class="{ active: index == '2_4' }" @click="btnIndex({
                    index: '2_4'
                })">
                    <div>
                        <img v-if="index != '2_4'" src="../../static/img/解决方案.png" class="imgsClass" alt="" />
                        <img v-else src="../../static/img/解决方案-选中.png" class="imgsClass" alt="" />
                    </div>
                    <div>解决方案</div>
                </div>
            </div>
            <div style="padding: 10px 20px" :class="{ active: index == 3 }" @click="btnIndex({
                index: 3
            })">
                <div>
                    <img v-if="index != 3" src="../../static/img/结构安全.png" class="imgsClass" alt="" />
                    <img v-else src="../../static/img/结构安全-选中.png" class="imgsClass" alt="" />
                </div>
                <div>结构安全</div>
            </div>
            <div style="padding: 10px 20px" :class="{ active: index == 4 }" @click="btnIndex({
                index: 4
            })">
                <div>
                    <img v-if="index != 4" src="../../static/img/机电管理.png" class="imgsClass" alt="" />
                    <img v-else src="../../static/img/机电管理-选中.png" class="imgsClass" alt="" />
                </div>
                <div>机电管理</div>
            </div>
            <div style="padding: 10px 20px" :class="{ active: index == 5 }" @click="btnIndex({
                index: 5
            })">
                <div>
                    <img v-if="index != 5" src="../../static/img/物业管理.png" class="imgsClass" alt="" />
                    <img v-else src="../../static/img/物业管理-选中.png" class="imgsClass" alt="" />
                </div>
                <div>物业管理</div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
  
<script setup>
import { ref, onMounted, defineComponent } from "vue";
import * as Cesium from "cesium";
import * as echarts from "echarts";
import { useRouter } from "vue-router";
const route = useRouter();
const myChartStyle = ref({ width: "100%", height: "270px" }); //图表样式
const initMain = () => {
    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // Use axis to trigger tooltip
                type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
            },
        },
        legend: {
            textStyle: {
                color: "#fff", // 将图例文本颜色修改为红色
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        yAxis: {
            type: "value",
        },
        xAxis: {
            type: "category",
            data: ["类别1", "类别2", "类别3", "类别4", "类别5"],
        },
        series: [
            {
                name: "整体",
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                    color: "white", // 设置字体颜色为白色
                },
                emphasis: {
                    focus: "series",
                    color: "#fff",
                },
                data: [320, 302, 301, 334, 390],
            },
            {
                name: "空间1",
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                },
                emphasis: {
                    focus: "series",
                },
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "空间2",
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                },
                emphasis: {
                    focus: "series",
                },
                data: [220, 182, 191, 234, 290, 330, 310],
            },
        ],
    };
    // main.value = echarts.init(document.getElementById("main"));
    // main.value.setOption(option);
};

const viewer = ref(null);

const indesNum = ref(false);
const menuS = ref(false);
const index = ref(1);
const btnIndex = (val) => {
    if (
        val.index == 2 ||
        val.index == "2_1" ||
        val.index == "2_2" ||
        val.index == "2_3" ||
        val.index == "2_4" ||
        val.index == "2_3_1" ||
        val.index == "2_3_2"
    ) {
        indesNum.value = true;
    } else {
        indesNum.value = false;
    }
    if (val.index == "2_3" || val.index == "2_3_1" || val.index == "2_3_2") {
        menuS.value = true;
    } else {
        menuS.value = false;
    }

    if (val) {
        index.value = val.index;
        route.push(val.path);
    }
};

onMounted(() => {
    initMain();
});
</script>
  
<style scoped>
.home_p {
    color: aliceblue;
    margin-top: -10px;
    font-size: 14px;
}

.image_14 {
    height: 1px;
    position: absolute;
    bottom: 0%;
    width: 100%;
}

.right_text_span {
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 40px;
}

.right_text_div {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 40px;
}

.right_text {
    width: 96%;
    /* border-bottom: 1px solid #fff; */
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    padding-bottom: 5px;
    position: relative;
    margin: 0px 0 5px 0;
    height: 40px;
}

.home_right {
    position: absolute;
    right: 50px;
    top: 150px;
    width: 408px;
    height: 702px;
    /* border: 1px solid red; */
    background-color: rgba(34, 34, 34, 0.9);
    border-radius: 4px;

    .home-content_left_text {
        background-color: rgba(34, 34, 34, 0.9);
        width: 95%;
        height: 10%;
        margin: auto;
        margin-top: 25px;
    }

    .home-content_left_ecaher {
        background-color: rgba(50, 50, 50, 1);
        width: 95%;
        height: 42%;
        margin: auto;
        border-radius: 10px;
        padding: 20px 0 0px 15px;
    }
}

.context_txt {
    overflow-wrap: break-word;
    color: rgba(248, 235, 203, 1);
    font-size: 20px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    line-height: 21px;
}

.home_text {
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    line-height: 21px;
}

.img_right {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0%;
    transform: rotate(180deg);
}

.img_left {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0%;
}

.home-content_left {
    position: absolute;
    left: 50px;
    top: 200px;
    width: 408px;
    height: 482px;
    /* border: 1px solid red; */
    background-color: rgba(34, 34, 34, 0.9);
    border-radius: 4px;

    .home-content_left_text {
        background-color: rgba(34, 34, 34, 0.9);
        width: 95%;
        height: 10%;
        margin: auto;
        margin-top: 25px;
    }

    .home-content_left_ecaher {
        background-color: rgba(50, 50, 50, 1);
        width: 95%;
        height: 80%;
        margin: auto;
        border-radius: 20px;
        padding: 20px 0 50px 15px;
    }
}

.imgsClass {
    width: 20px;
    height: 20px;
}

.active {
    color: bisque;
}

.menu div {
    cursor: pointer;
}

.menu {
    position: absolute;
    top: 0px;
    left: 700px;
    display: flex;
    background-color: rgba(34, 34, 34, 0.9);
    text-align: center;
    color: aliceblue;
    z-index: 10;
    font-size: 14px;
    padding: 0 30px 0 0;
}

.heder_img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 350px;
    height: 60px;
    z-index: 9;
}

.index_home {
    position: relative;
    background-color: #000;
    height: 100%;

    .index_home_img {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 10;
    }
}

#cesiumContainer {
    height: 100vh;
}
</style>
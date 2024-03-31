<template>
    <div style="position: relative;color: aliceblue;width: 100%;height: 100%;  background-color: rgba(34, 34, 34, 0.9);">
        损伤详情
        <div class="div1">
            <div class="div1_1">【当前空间损伤同级板】</div>
            <div class="div1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前当前空间共有表观损伤 <span class="context_txt">3</span> 处,已处理
                <span class="context_txt">2</span> 处,待处理 <span class="context_txt">1</span> 处，表观损伤总体处于良好状态。
            </div>
            <div style="margin-top: 20px;">
                <img src="../../../static/img/20.png" style="width: 20px;position: absolute;top: 136px;" alt="">
                <span style="margin-left: 25px;font-size: 16px;">
                    现存损伤类型统计
                </span>
                <div style="width: 100%;height: 200px;margin-top: -40px;">
                    <div id="axis" :style="myChartStyle"></div>
                </div>
            </div>
            <div style="margin-top: 80px;">
                <img src="../../../static/img/20.png" style="width: 20px;position: absolute;top: 400px;" alt="">
                <span style="margin-left: 25px;font-size: 16px;">
                    现存损伤分级情况
                </span>
                <div style="width: 100%;height: 200px;">
                    <div id="main" :style="myChartStyle"></div>
                </div>
            </div>
            <div style="margin-top: 75px;">
                <img src="../../../static/img/20.png" style="width: 20px;position: absolute;top: 700px;" alt="">
                <span style="margin-left: 25px;font-size: 16px;">
                    损伤修复历史统计
                </span>
                <div style="width: 100%;height: 200px;">
                    <div id="main" :style="myChartStyle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
const myChartStyle = ref({ width: "100%", height: "270px" })
const initAxis = () => {
    var option = {
        color: ['#F8EBCB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 8, 7, 4, 9, 6, 2],
                label: { //柱体上显示数值
                    show: true,//开启显示
                    position: 'top',//在上方显示
                    textStyle: {//数值样式
                        fontSize: '9px',
                        color: '#FFF'
                    },
                    formatter: '{c}',
                }
            },
        ]
    }
    axis.value = echarts.init(document.getElementById("axis"));
    axis.value.setOption(option);
}
const initMain = () => {
    var option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#fff' // 将图例文本颜色修改为红色
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['类别1', '类别2', '类别3', '类别4', '类别5']
        },
        series: [
            {
                name: '整体',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    color: 'white' // 设置字体颜色为白色
                },
                emphasis: {
                    focus: 'series',
                    color: '#fff'
                },
                data: [320, 302, 301, 334, 390],
            },
            {
                name: '空间1',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                },
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '空间2',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },

        ]
    };
    main.value = echarts.init(document.getElementById("main"));
    main.value.setOption(option);
}

onMounted(() => {
    initAxis()
    initMain()
})
</script>


<style scoped>
.div1 {
    position: absolute;
    top: 100px;
    right: 40px;
    width: 350px;
    height: 80%;
    border: 1px solid red;
    padding: 5px 0 0 10px;
    overflow: auto;

    .div1_1 {
        font-family: '微软雅黑 Bold', '微软雅黑';
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        color: #AF8E5C;
    }

    .div1_2 {
        font-size: 18px;
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
}
</style>
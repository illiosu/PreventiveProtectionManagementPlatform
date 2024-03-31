<template>
    <div class="index">
        <img src="../static/img/编组 3.png" class="heder_img" alt="">
        <!-- <button type="primary" @click="drawRectangle" style="margin-right: 80px;z-index: 999;position: absolute;left: 60%;">绘制多边形</button>
      <button type="primary" @click="endRectangle" style="margin-right: 20px;z-index: 999;position:absolute; top: 0;left: 40%;">完成</button>
      <button type="primary" @click="setMap"  style="margin-right: 50px;z-index: 999;position:absolute;">删除</button> -->
        <!-- <img class="label_1" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga32029cb0ce144e2290d1c02076b2d9ea82fb8e063c90165d0b5e4a1bcb31aca" /> -->
        <div id="amapContainer">
            <!-- 地图左边内容 -->
            <div class="left" style="display: flex;">
                <div class="my_map" style="height: 100%;padding-top: 20px;margin-left: 20px;">
                    <div v-for="(item, index) in list" :key="index" style="border-left: 1px solid #333;position: relative;">
                        <div class="group_8"></div>
                        <img :src='item.previewPri' :class="{ 'enlarge': enlargeIndex === index }"
                            style="margin-left: 10px;" @mouseover="enlargeImage(index, item)" @mouseout="resetImage"
                            @click="addMap(item)">
                        <img class="thumbnail_1" v-if="enlargeIndex === index" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng086b4366fa07bb9082199e2fdf90ad95097f7dfc52513b772346c66922fda1bb" />
                    </div>
                </div>
            </div>
            <div class="group_21 ">
                <div class="box_3">
                    <img class="thumbnail_2" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af" />
                    <div class="text_7">查找项目</div>
                    <img class="thumbnail_3" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72" />
                </div>
                <div class="block_2 ">
                    <div class="box_4 ">
                        <span class="text_8">行政区</span>
                        <span class="text_16">:</span>
                        <!-- <span class="text_9">请选择行政区</span> -->
                        <div class="dark-select">
                            <el-select v-model="areaName" placeholder="请选择" :popper-append-to-body="false">
                                <el-option v-for="item in optionsThre" :key="item.astiveId" :label="item.astiveName"
                                    :value="item.astiveId" class="provinces_select">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="image-wrapper_7 ">
                        <img class="image_1" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc3f81613af2d3cf68e2acb6a88dd7caea5eb62fd20594afe109fb387e2974179" />
                    </div>
                    <div class="text-wrapper_17  ">
                        <span class="text_10">建筑名称：</span>
                        <input class="text_11" type="text" v-model="projectName" placeholder="请输入项目名称">
                    </div>
                    <div class="image-wrapper_8 ">
                        <img class="image_2" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc3f81613af2d3cf68e2acb6a88dd7caea5eb62fd20594afe109fb387e2974179" />
                    </div>
                    <div class="text-wrapper_18  ">
                        <span class="text_20">所属区域：</span>
                        <span class="text_15">无所属建筑群</span>
                    </div>
                </div>
                <div class="box_3">
                    <img class="thumbnail_2" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af" />
                    <div class="text_7">筛选建筑</div>
                    <img class="thumbnail_3" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72" />
                </div>
                <div class="block_4">
                    <el-radio-group v-model="radio" @change="radioChange" class="el_radel">
                        <el-radio :label="1">单幢建筑</el-radio>
                        <el-radio :label="2">区域建筑</el-radio>
                    </el-radio-group>
                </div>
            </div>
        </div>

        <!-- 编辑模块 -->

    </div>
</template>
  
<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import {
    adminaegionList, //行政区域列表
    selectByAll,
    updatelist,
} from '../api/mapapi/mapApi'
const route = useRouter();
const projectName = ref('') //建筑名称输入框
const radio = ref(0) //单选
const pageNum = ref(1) //初始化页码
const pageSize = ref(999999) //初始化条数
const areaName = ref('')//行政区域名称
const optionsThre = ref([])//行政区域列表
const enlargeIndex = ref(-1) //图片大小
const list = ref([])//区域列表
const projectList = ref([])//项目列表
const arrs = ref([])
const map = ref(null);
const polyEditor = ref(null);
const target = ref(null);


const radioChange = (e) => {
    console.log('单选框改变了', e);
    // radio.value = e.target.value
}

const addMap = (item) => {
    arrs.value.forEach((item, index) => {
        // if (index != arrs.value.length - 1) {
        //     item.setMap(null);
        // } else {
        //     map.value.add(item)
        //     // target.value = item
        // }
        map.value.remove(item)
    })
    arrs.value = []
    console.log(item, JSON.parse(item.areaCoord));
    var arr = JSON.parse(item.areaCoord);
    console.log(arr);
    arrs.value.push(new AMap.Polygon({
        path: JSON.parse(item.areaCoord),
        strokeColor: "red", // 线条颜色
        strokeWeight: 2, // 线条宽度
        strokeOpacity: 0.2, // 线条透明度
        fillOpacity: 0.4, // 填充透明度
        fillColor: '#95F204', // 填充颜色
        strokeStyle: 'solid',
        ids: item.areaId
    }))
    map.value.add(arrs.value)
    console.log(arrs.value);
    // var marker = new AMap.Marker({
    //     position: new AMap.LngLat(item.longitude, item.latitude),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    //     icon: new AMap.Icon({
    //         size: new AMap.Size(30, 30), // 设置标记图片尺寸
    //         image: 'http://weibao.lingbtech.com/assets/20231201143739.png', // 设置标记图片路径
    //     }),
    //     map: map.value
    // });
    // 设置标记样式
    // marker.setLabel({
    //     content: item.projectName, // 设置标记的文本内容
    //     offset: new AMap.Pixel(-10, -20), // 设置标记文本相对于标记位置的偏移量
    //     style: {
    //         color: 'red', // 设置标记文本颜色
    //         fontSize: '16px', // 设置标记文本字体大小
    //         fontWeight: 'bold', // 设置标记文本字体粗细
    //     },
    // });
    // map.value.add(marker)
    // map.value.setCenter([item.longitude, item.latitude])//地图定位
    map.value.setFitView()
    // 添加点击事件监听器
    arrs.value.forEach((polygon) => {
        polygon.on('click', () => {
            // polyEditor.setTarget(polygon);
            // polyEditor.open();
            console.log('触发没有', polygon.w.ids);
            // location.href = '/cesium/gis.html'
            route.push('/home1')


        })
    })
}
const enlargeImage = (index, item) => {
    enlargeIndex.value = index;
    target.value = new AMap.Polygon({
        path: JSON.parse(item.areaCoord),
        strokeColor: "#d00bb0", // 线条颜色
        strokeWeight: 2, // 线条宽度
        strokeOpacity: 0.2, // 线条透明度
        fillOpacity: 0.4, // 填充透明度
        fillColor: '#95F204', // 填充颜色
        strokeStyle: 'solid',
        id: item.areaId
    })
    // map.value.setCenter([item.longitude, item.latitude])
    // map.value.add([target.value])

}
const resetImage = () => {
    enlargeIndex.value = -1;
    // target.value.setMap(null)
}

const initMap = () => {
    AMapLoader.load({

        key: 'fd330b871ca2d5033b2f286ad8ed0372', // 申请好的Web端开发者Key，首次调用 load 时必填

        version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15

        // plugins: ['AMap.PolygonEditor', 'AMap.Polygon', 'AMap.InfoWindow', 'AMap.Pixel', 'AMap.MouseTool'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等

    }).then((AMap) => {

        map.value = new AMap.Map('amapContainer', { // 设置地图容器id

            viewMode: '3D', // 是否为3D地图模式

            zoom: 16.8, // 初始化地图级别

            center: [116.475334, 39.997534], // 初始化地图中心点位置
            mapStyle: "amap://styles/whitesmoke"

        })
        polyEditor.value = new AMap.PolygonEditor(map)  //多边形编辑

        // var fence = new AMap.Polygon({
        //     path: [
        //         [116.475334, 39.997534], [116.476627, 39.998315], [116.478603, 39.99879], [116.478529, 40.000296], [116.475082, 40.000151], [116.473421, 39.998717]
        //     ],
        //     map: map.value
        // });
        // AMap.event.addListener(fence, 'click', function (e) {
        //     console.log('您点击了电子围栏，围栏信息：', fence.getPath());
        // });

        // 等待地图完全加载后执行
        // 等待地图完全加载后执行
        // map.value.on('complete', function () {
        //     // 创建电子围栏
        //     var fence = new AMap.Polygon({
        //         path: [
        //             [116.475334, 39.997534], [116.476627, 39.998315], [116.478603, 39.99879], [116.478529, 40.000296], [116.475082, 40.000151], [116.473421, 39.998717]
        //         ],
        //         map: map.value
        //     });

        //     // 添加点击事件监听器
        //     fence.on('click', function (e) {
        //         console.log('您点击了电子围栏，围栏信息：', fence.getPath());
        //     });
        // });
        // polygon.on('dblclick', (event) => {
        //     console.log(event);
        // })
        map.value.setFitView()

    }).catch(e => {

        console.log(e)

    })

}
// 行政区域列表
const regionList = () => {
    adminaegionList().then((res) => {
        console.log('有多少个行政区', res);
        if (res.code == 200) {
            optionsThre.value = res.data;
        }
    });
}
//区域表格数据
const selectByAllList = () => {
    var data = {

        "pageNum": pageNum.value,
        "pageSize": pageSize.value,
    }
    selectByAll(data).then(res => {
        console.log('区域列表数据', res);
        if (res.code == 200) {
            list.value = res.data.list
            // total.value = res.data.total
        }
    })
}
//项目列表
const projectListFn = () => {
    const data = {

    }
    updatelist(data).then(res => {
        console.log('项目列表数据', res);
        if (res.code == 200) {
            projectList.value = res.data
        }
    })
}
onMounted(() => {
    // DOM初始化完成进行地图初始化
    setTimeout(() => {
        initMap()
    }, 1000)
    regionList()// 行政区域列表
    selectByAllList()// 区域表格数据
    projectListFn()// 项目列表
})





</script>
  
<style scoped>
.block_4 :deep(.el_radel .el-radio__label) {
    color: rgba(255, 255, 255, 0.9);

}

.block_4 :deep(.el-radio__input.is-checked .el-radio__inner) {
    background-color: #28D4C1;
    border-color: #28D4C1;
}

.el_radel {
    margin-left: 50px;
    margin-top: 10px;
}

.block_4 {

    background-color: rgba(58, 58, 58, 1);
    border-radius: 6px;
    position: relative;
    width: 328px;
    height: 59px;
    margin: 10px 0 24px 15px;
    margin-top: 30px;
}

.dark-select {
    position: absolute;
    top: 53px;
    right: 30px;
}

.dark-select :deep(.el-select) {
    background-color: rgba(58, 58, 58, 1);
    border: 1px solid rgba(58, 58, 58, 1) !important;
    color: rgba(255, 255, 255, 0.9);
    outline: none;

}

.dark-select :deep(.el-select .el-input__inner) {
    background-color: rgba(58, 58, 58, 1);
    border: none;
    color: rgba(255, 255, 255, 0.9);
    outline: none;
    box-shadow: none !important
}

.dark-select :deep(.el-select .el-input__wrapper) {
    background-color: rgba(58, 58, 58, 1);
    border: 1px solid rgba(58, 58, 58, 1) !important;
    color: rgba(255, 255, 255, 0.9);
    outline: none;
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset
}

.dark-select :deep(.el-input .el-input__wrapper.is-focus) {
    box-shadow: none !important;
}


.dark-select :deep(.el-select .el-input.is-focus .el-input_wrapper) {
    border: 1px solid rgba(58, 58, 58, 1) !important;
    border: 1px solid rgba(58, 58, 58, 1) !important;
    outline: none;
    box-shadow: none !important;
    border-color: #DCDFE6 !important;

}

/* .index{
    background: url(../static/img/地图bg.png) 100% no-repeat;
    background-size: 100% 100%;
    z-index: 999;
} */
.heder_img {
    position: fixed;
    top: 0px;
    left: 50%;
    width: 600px;
    height: 100px;
    z-index: 9;
    top: calc(5% + 3px);
    /* 元素高度为100px */
    left: calc(50% - 50px);
    /* 元素宽度为100px */
    transform: translate(-50%, -50%);
}

.my_map::-webkit-scrollbar {
    display: none;
}


.text_20 {
    width: 75px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
}

.text_15 {
    width: 90px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
}


.group_8 {
    background-color: rgba(34, 34, 34, 1);
    border-radius: 50%;
    position: absolute;
    left: -5px;
    top: 66px;
    width: 8px;
    height: 8px;
}

.thumbnail_1 {
    position: absolute;
    left: -9px;
    top: 62px;
    width: 17px;
    height: 17px;
}


.group_21 {
    background-color: rgba(34, 34, 34, 0.8);
    border-radius: 6px;
    width: 358px;
    height: 360px;
    justify-content: flex-center;
    /* margin: 100px 40px 0 282px; */
    z-index: 99;
    position: sticky;
    top: 100px;
    left: 82%;

}

.box_3 {
    display: flex;
    /* width: 114px; */
    height: 28px;
    /* margin: 24px 0 0 20px; */
    padding: 12px 0 0 5px;
}

.thumbnail_2 {
    width: 11px;
    height: 19px;
    margin-top: 4px;
}

.text_7 {

    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin-left: -55px;
    margin-top: 1px;
    font-family: STSongti-SC-Black;
    font-weight: NaN;
}

.thumbnail_3 {
    width: 11px;
    height: 19px;
    margin: 4px 0 0 6px;
}

.block_2 {
    background-color: rgba(58, 58, 58, 1);
    border-radius: 6px;
    height: 155px;
    width: 328px;
    margin: 12px 0 0 15px;
    padding-top: 1px;
}

.box_4 {
    width: 292px;
    height: 23px;
    margin: 18px 0 0 14px;
}

.text_8 {
    width: 68px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);
    font-size: 15px;
    letter-spacing: 7.400000095367432px;
    font-weight: NaN;
    text-align: center;
    white-space: nowrap;
    line-height: 21px;
    margin-top: 2px;
}

.text_16 {
    width: 12px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);
    font-size: 15px;
    letter-spacing: 7.400000095367432px;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 21px;
    margin-left: -6px;
}


.image-wrapper_7 {
    width: 225px;
    height: 1px;
    margin: 7px 0 0 89px;
}

.image_1 {
    width: 225px;
    height: 1px;
}

.text-wrapper_17 {
    width: 182px;
    height: 21px;
    margin: 18px 0 0 14px;
}

.text_10 {
    width: 75px;
    height: 21px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);
    font-size: 15px;
    font-weight: NaN;
    text-align: center;
    white-space: nowrap;
    line-height: 21px;
}

.text_11 {
    position: absolute;
    top: 105px;
    right: 30px;
    width: 220px;
    background-color: rgba(58, 58, 58, 1);
    border: none;
    color: aliceblue;
    box-shadow: none !important
}

input {
    border: 0px;
    outline: none !important;
    background: none;
}

.image-wrapper_8 {
    width: 225px;
    height: 1px;
    margin: 8px 0 0 89px;
}

.image_2 {
    width: 225px;
    height: 1px;
}

.text-wrapper_18 {
    width: 167px;
    height: 21px;
    margin: 17px 0 20px 14px;
}

.enlarge {
    /* transform: scale(2.1); */
    width: 300px;
    height: 200px;
}

img {
    width: 238px;
    height: 145px;
    margin-bottom: 30px;
    margin-right: 60px;
    transition: transform 0.3s;
}

.left {
    position: absolute;
    top: 0;
    left: 10px;
    z-index: 10;
    width: 20%;
    height: 96%;
    overflow: auto;

}

#amapContainer {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100vh;

    width: 100%;

}
</style>
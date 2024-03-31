<template>
  <!-- 主页面 -->
  <div class="index_home">
    <!-- 这里放倾斜摄影 -->
    <div id="cesiumContainer"></div>

    <div class="home-content_left">
      <div class="home-content_left_text">
        <div
          style="
            background-color: rgba(34, 34, 34, 0.6);
            padding: 5px 0;
            width: 80%;
          "
        >
          <img
            class="thumbnail_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af"
          />
          <span
            style="
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-left: 10px;
              line-height: 20px;
              margin-top: -14px;
              margin-right: 10px;
            "
            >表观损伤情况</span
          >
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72"
          />
        </div>
      </div>
      <div class="home-content_left_ecaher">
        <div class="home_text">
          目前建筑共有表观损伤<span class="context_txt">3</span>处,已处理<span
            class="context_txt"
            >2</span
          >处,待处理<span class="context_txt">1</span>处
        </div>
        <div class="home_text">
          表观损伤总体处于 <span class="context_txt">良好</span> 状态
        </div>
        <div>
          <div class="home_text" style="position: relative; margin-top: 30px">
            <img
              style="width: 20px; position: absolute; top: 0"
              src="../../../static/img/20.png"
              alt=""
            />
            <span style="margin-left: 20px"> 表观损伤分布情况 </span>
          </div>
          <div>
            <div id="main" :style="myChartStyle"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="home_right">
      <div class="home-content_left_text">
        <div
          style="
            background-color: rgba(34, 34, 34, 0.6);
            padding: 5px 0;
            width: 80%;
          "
        >
          <img
            class="thumbnail_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af"
          />
          <span
            style="
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-left: 10px;
              line-height: 20px;
              margin-top: -14px;
              margin-right: 10px;
            "
            >项目基本信息</span
          >
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72"
          />
        </div>
      </div>
      <div class="home-content_left_ecaher" style="margin-top: -20px">
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">建筑名称:</span>上海音乐厅
          </div>
          <div class="right_text_div">
            <span class="right_text_span"
              >建&nbsp;&nbsp;筑&nbsp;&nbsp;别&nbsp;&nbsp;称:&nbsp;&nbsp;</span
            >音乐厅
          </div>
          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng974b683e0444e0a4bbedf6c7443a6e97f25fd00d9ff0d3873bf2072c46d27530"
          />
        </div>
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">建筑面积:</span>241㎡
          </div>
          <div class="right_text_div">
            <span class="right_text_span"
              >现&nbsp;使&nbsp;用&nbsp;性&nbsp;质:</span
            >公共建筑
          </div>
          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng974b683e0444e0a4bbedf6c7443a6e97f25fd00d9ff0d3873bf2072c46d27530"
          />
        </div>
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">建筑面积:</span>1985
          </div>
          <div class="right_text_div">
            <span class="right_text_span">历保评定年份:</span>1992
          </div>
          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng974b683e0444e0a4bbedf6c7443a6e97f25fd00d9ff0d3873bf2072c46d27530"
          />
        </div>
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">保护类别:</span>二类
          </div>
          <div class="right_text_div">
            <span class="right_text_span"
              >保&nbsp;&nbsp;护&nbsp;&nbsp;编&nbsp;&nbsp;号:</span
            >4G006
          </div>
          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng974b683e0444e0a4bbedf6c7443a6e97f25fd00d9ff0d3873bf2072c46d27530"
          />
        </div>
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">文保等级:</span
            >&nbsp;&nbsp;&nbsp;&nbsp;全国重点文物保护单位
          </div>

          <img
            class="image_14"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng974b683e0444e0a4bbedf6c7443a6e97f25fd00d9ff0d3873bf2072c46d27530"
          />
        </div>
        <div class="right_text">
          <div class="right_text_div" style="width: 170px">
            <span class="right_text_span">建筑地址:</span
            >&nbsp;&nbsp;&nbsp;&nbsp;上海市黄浦区延安东路523号
          </div>
        </div>
      </div>
      <div class="home-content_left_text">
        <div
          style="
            background-color: rgba(34, 34, 34, 0.6);
            padding: 5px 0;
            width: 80%;
          "
        >
          <img
            class="thumbnail_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af"
          />
          <span
            style="
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-left: 10px;
              line-height: 20px;
              margin-top: -14px;
              margin-right: 10px;
            "
            >维保概况</span
          >
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72"
          />
        </div>
      </div>
      <div
        class="home-content_left_ecaher"
        style="margin-top: -20px; height: 10%"
      >
        <p class="home_p">
          上海音乐厅由XX专业单位负责维保,根据三项维保内容数据及分项评价,目前建筑总体处于<span
            class="context_txt"
            >良好</span
          >状态
        </p>
      </div>
      <div class="home-content_left_text">
        <div
          style="
            background-color: rgba(34, 34, 34, 0.6);
            padding: 5px 0;
            width: 80%;
          "
        >
          <img
            class="thumbnail_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngba661ab8f61a9fc3bfa791fe636ca87fc1fa01b47456a96aa25d3596d1ccc6af"
          />
          <span
            style="
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-left: 10px;
              line-height: 20px;
              margin-top: -14px;
              margin-right: 10px;
            "
            >维保人员配置</span
          >
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4cdff0eb10557ede38cbe517ebf0fed5dc5b9c39f13f8ca3d9020f4e413c6a72"
          />
        </div>
      </div>
      <div
        class="home-content_left_ecaher"
        style="margin-top: -20px; height: 15%"
      >
        <div>
          <div>暂离</div>
          <div>在岗</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as Cesium from "cesium";
import * as echarts from "echarts";
// import json from '../../../static/model2/tileset.json'
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
  main.value = echarts.init(document.getElementById("main"));
  main.value.setOption(option);
};

const viewer = ref(null);

const indesNum = ref(false);
const menuS = ref(false);
const index = ref(1);

const btnIndex = (val) => {
  if (
    val == 2 ||
    val == "2_1" ||
    val == "2_2" ||
    val == "2_3" ||
    val == "2_4" ||
    val == "2_3_1" ||
    val == "2_3_2"
  ) {
    indesNum.value = true;
  } else {
    indesNum.value = false;
  }
  if (val == "2_3" || val == "2_3_1" || val == "2_3_2") {
    menuS.value = true;
  } else {
    menuS.value = false;
  }
  index.value = val;
};

async function showPhotogrammetry() {
  // Common setting for the skipLevelOfDetail optimization
  const tileset = await Cesium.Cesium3DTileset.fromUrl("/model2/tileset.json", {
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 1,
    immediatelyLoadDesiredLevelOfDetail: false,
    loadSiblings: false,
    cullWithChildrenBounds: true,
  });
//   const customShader = new CustomShader({});
//   console.log(customShader);
  // console.log(url)
  // const tileset = new Cesium.Cesium3DTileset({
  //     // url:Cesium.buildModuleUrl("../../../static/model2/tileset.json"),

  //     url: "../../../static/model2/tileset.json",
  //     baseScreenSpaceError: 1024,
  //     //【重要】数值加大，能让最终成像变模糊
  //     skipScreenSpaceErrorFactor: 16,
  //     skipLevels: 1,
  //     immediatelyLoadDesiredLevelOfDetail: false,
  //     loadSiblings: false,
  //     cullWithChildrenBounds: true,
  //     pickEnabled: true,
  //     skipLevelOfDetail: true, //开启跳级加载
  //     //这个参数默认是false，同等条件下，叶子节点会优先加载。但是Cesium的tile加载优先级有很多考虑条件，
  //     //这个只是其中之一，如果skipLevelOfDetail=false，这个参数几乎无意义。所以要配合skipLevelOfDetail=true来使用，
  //     //此时设置preferLeaves=true。这样我们就能最快的看见符合当前视觉精度的块，对于提升大数据以及网络环境不好的前提下有一点点改善意义。
  //     preferLeaves: true,
  //     //【重要】内存建议显存大小的50%左右，内存分配变小有利于倾斜摄影数据回收，提升性能体验
  //     maximumMemoryUsage: 1024
  //     //控制切片视角显示的数量，可调整性能
  //     // maximumScreenSpaceError: 2,//最大的屏幕空间误差
  //     // maximumNumberOfLoadedTiles: 100000, //最大加载瓦片个数
  // });

  console.log(tileset);
  //     console.log(111)
  //     let boundingSphere = tileset.boundingSphere;

  //     console.log(boundingSphere)
  // // viewer.camera.flyToBoundingSphere(boundingSphere);
  //     // viewer.value.flyTo(tileset);

  // viewer.value.scene.primitives.add(tileset);
  // viewer.zoomTo(tileset);
  //将Cesium3DTileset实例添加到场景中
  viewer.value.scene.primitives.add(tileset);

  //调整相机视角
  // viewer.value.zoomTo(tileset);
  viewer.value.zoomTo(tileset);
}

onMounted(() => {
  viewer.value = new Cesium.Viewer("cesiumContainer", {
    animation: false, //是否显示左下角的仪表盘
    baseLayerPicker: false, //是否显示图层选择器按钮，右上角那个地图图标
    geocoder: false, //是否显示搜索按钮
    vrButton: false, //是否显示VR按钮
    sceneModePicker: false, //是否显示右上角的模式切换按钮
    selectionIndicator: true, //是否显示选取指示器组件
    timeline: false, //是否显示下边的时间轴
    navigationHelpButton: false, //是否显示右上角的帮助按钮
    homeButton: false, //是否显示主页按钮
    infoBox: false, //是否显示点击要素之后显示的信息
  });
  viewer.value._cesiumWidget._creditContainer.style.display = "none"; //右下角的icon显不显示
  showPhotogrammetry();
  initMain();

  //   viewer.value.scene.primitives.add(tileset);
  //   viewer.value.zoomTo(tileset);
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

<template>
    <div>
        <div>
            <baidu-map class="map" :center="center" :zoom="18" :scroll-wheel-zoom="true" :double-click-zoom="false">
                <bm-point-collection
                        :points="points"
                        shape="BMAP_POINT_SHAPE_CIRCLE"
                        color="BLUE"
                        size="BMAP_POINT_SIZE_BIG"
                        @click="showMessage">
                </bm-point-collection>
            </baidu-map>
        </div>
        <div>
            <el-table
                    :data="tableData"
                    height="100vh"
                    style="width: 100%"
                    max-height="220"
                    :row-class-name="tableRowClassName">

                <el-table-column
                        prop="area"
                        label="地区"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="节点ID"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="lng"
                        label="横坐标"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="lat"
                        label="纵坐标"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="db"
                        label="信号强度(db)"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="运行状态"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="useTime"
                        label="使用时间(h)"
                        width="100">
                </el-table-column>
                <!---这里功能还未开发-->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="text" @click="showPosition(scope.row)">查看定位</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                colorIndex:2,
                center:{
                    lng: 118.82648, lat: 31.893974
                },
                points: [
                    {lng: 118.824865, lat: 31.893234},
                    {lng: 118.824596, lat: 31.893361},
                    {lng: 118.825317, lat: 31.893415},
                    {lng: 118.824317, lat: 31.893515},
                    {lng: 118.825317, lat: 31.895617},
                    {lng: 118.825317, lat: 31.893719},
                    {lng: 118.825317, lat: 31.894621},
                ],
                tableData:[
                    {
                        area:"南京",
                        id:"025",
                        lng:"118.824865",
                        lat:"31.893234",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },
                    {
                        area:"南京",
                        id:"025",
                        lng:"118.824596",
                        lat:"31.893361",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },{
                        area:"南京",
                        id:"025",
                        lng:"118.825317",
                        lat:"31.893415",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },{
                        area:"南京",
                        id:"025",
                        lng:"118.824317",
                        lat:"31.893515",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },                    {
                        area:"南京",
                        id:"025",
                        lng:"118.825317",
                        lat:"31.895617",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },                    {
                        area:"南京",
                        id:"025",
                        lng:"118.825317",
                        lat:"31.893419",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },{
                        area:"南京",
                        id:"025",
                        lng:"118.825317",
                        lat:"31.894621",
                        db:"5",
                        state:"running",
                        useTime:"10",
                    },

                ]
            }
        },
        methods: {
            showMessage(e){
                alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
                this.tableData.forEach((item,index)=>{
                    if(item.lat===(e.point.lat+"")&&item.lng===(e.point.lng+"")){
                        //console.log("equal");
                        this.colorIndex=index;
                    }
                })
            },
            tableRowClassName({rowIndex}) {
                if (rowIndex === this.colorIndex) {
                    return 'warning-row';
                }
                return '';
            },
        }
    }
</script>



<style>

    .map{
        height: 350px;
        width: 100%;
    }
    .el-table .warning-row {
        background: greenyellow;
    }



</style>
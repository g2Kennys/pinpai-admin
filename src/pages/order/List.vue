<template>
  <div class="order">
     <el-row>
      <!-- 搜索 -->
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="searchInput"
            size="small"
            style="display: inline-block;width: 20%;"
            clearable>
          </el-input>
          <el-button @click="toSearch" size="small" type="primary" disabled>搜索</el-button>
        </div>
      </el-col>
      
    </el-row>
    <!-- 订单分类 -->
    <el-tabs v-model="activeName">
      <!-- 全部订单开始 -->
      <el-tab-pane label="全部订单" name="all">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 全部订单结束 -->
      <!-- 代付款订单开始 -->
      <el-tab-pane label="待付款" name="待付款">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 代付款订单结束 -->
      <!-- 待派单订单开始 -->
      <el-tab-pane label="待派单" name="待派单">
          <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <!-- <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp; -->
                  <a href="" @click.prevent="toSendOrder(record.row)">派单</a>
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 待派订单结束 -->
      <!-- 待接订单开始 -->
      <el-tab-pane label="待接单" name="待接单">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 待接订单结束 -->
      <!-- 未服务订单开始 -->
      <el-tab-pane label="待服务" name="待服务">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 未服务订单结束 -->
      <!-- 待评价订单开始 -->
      <el-tab-pane label="待评价" name="待评价">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 待评价订单结束 -->
      <!-- 已完成订单开始 -->
      <el-tab-pane label="已完成" name="已完成">
        <div v-loading="loading">
            <el-table :data="filterOrderStatus(activeName)" size="mini" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column prop="id" label="编号" />
              <el-table-column prop="customerId" label="顾客" />
              <el-table-column prop="total" label="订单价值" />
              <el-table-column prop="orderTime" label="下单时间" />
              <el-table-column prop="addressId" label="地址" />
              <el-table-column prop="status" label="状态" />
              <el-table-column label="操作">
                <template #default="record">
                  <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)" /> &nbsp;
                  <i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)" /> &nbsp;
                  <a href="" @click.prevent="toDetailsHandler(record.row)">详情</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </el-tab-pane>
      <!-- 已完成订单结束 -->
    </el-tabs>
    <!-- 订单分类结束 -->
    <!-- 分页开始 -->
    <div class="block">
      <!-- page-size当前页显示数，current-page当前页数, current-change:当currentPage 改变时会触发 -->
      <el-pagination
        layout= "prev, pager, next"
        :page-size= "pageSize"
        :current-page= "currentPages"
        @current-change= "changeCurrent"
        :total= "orders.length">
      </el-pagination>
    </div>
    <!-- 分页结束 -->
    <!-- 修改模态框 -->
    <el-dialog :title="title" :visible="visible" @close="dialogCloseHandler">
      <el-form ref="orderForm" :model="order" :rules="rules">
        <el-form-item label="顾客" label-width="100px" prop="customerId">
          <el-input v-model="order.customerId" auto-complete="off" />
        </el-form-item>
        <el-form-item label="数量" label-width="100px" prop="total">
          <el-input v-model="order.total" auto-complete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeModal">取 消</el-button>
        <el-button size="small" type="primary" @click="submitHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- /修改模态框 -->
    <!-- 派单模态框开始 -->
    <el-dialog
      title="派单"
      :visible="pdVisible"
      width="30%"
      :model="order"
      @close="pCloseHandler">{{value}}订单{{order.id}}
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in waiters"
          :key="item.id"
          :label="item.realname"
          :value="item.id">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeSendOrder">取 消</el-button>
        <el-button type="primary" @click="toSubmitSendOrder(value,order.id)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 派单模态框结束 -->
  </div>
</template>
<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      // 单选员工
      value: '',
      // 初始选择显示那个表格
      activeName: 'all',
      // 搜索框的值
      searchInput: '',
      // 模态框的值
      order: {},
      ids: [],
      rules: {
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState('order', ['orders', 'visible', 'title', 'loading','pdVisible','pageSize','currentPages']),
    ...mapState('waiter',['waiters']),
    ...mapGetters('order', ['orderOrder', 'orderSize','filterOrderStatus'])
  },
  created() {
    // 查询全部订单
    this.findAllOrders()
    // 查询全部员工
    this.findAllWaiters()
  },
  methods: {
    ...mapMutations('order', ['showModal', 'closeModal', 'setTitle','showSendOrder','closeSendOrder','changeCurrent']),
    ...mapActions('order', ['findAllOrders', 'saveOrUpdateOrder', 'deleteOrderById', 'batchDeleteOrder','sendOrder']),
    ...mapActions('waiter',['findAllWaiters']),
    toSearch() {
      alert(1);
    },
    // 提交派单方法
    toSubmitSendOrder(waiterId,orderId) {
      this.closeSendOrder();
      this.sendOrder({waiterId,orderId});
      // console.log("发送的数据",{waiterId,orderId});
    },
    // 派单显示模态框方法
    toSendOrder(row) {
      this.order = row;
      this.showSendOrder();
      console.log("order",this.order);
    },
    // 普通方法
    toDetailsHandler(order) {
      // 跳转到详情页面
      // this.$router.push("/orderDetails")
      this.$router.push({
        path: '/order/details',
        query: { order: order }
      })
    },
    handleSelectionChange(val) {
      this.ids = val.map(item => item.id)
    },
    toAddHandler() {
      // 1. 重置表单
      this.order = {}
      this.setTitle('添加订单信息')
      // 2. 显示模态框
      this.showModal()
    },
    submitHandler() {
      // 校验
      this.$refs.orderForm.validate((valid) => {
        // 如果校验通过
        if (valid) {
          const promise = this.saveOrUpdateOrder(this.order)
          promise.then((response) => {
            // promise为action函数的返回值，异步函数的返回值就是promise的then回调函数的参数
            this.$message({ type: 'success', message: response.statusText })
          })
        } else {
          return false
        }
      })
    },
    // 派单模态框退出触发方法
    pCloseHandler() {
      this.closeSendOrder();
    },
    // 修改模态框退出触发方法
    dialogCloseHandler() {
      this.closeModal();
      // this.$refs.orderForm.resetFields()
    },
    editHandler(row) {
      this.order = row
      this.setTitle('修改订单信息')
      this.showModal()
    },
    deleteHandler(id) {
      this.deleteOrderById(id)
        .then((response) => {
          this.$message({ type: 'success', message: response.statusText })
        })
    },
    batchDeleteHandler() {
      this.batchDeleteOrder(this.ids)
        .then((response) => {
          this.$message({ type: 'success', message: response.statusText })
        })
    }

  }

}
</script>
<style scoped>
.block > .el-pagination {
  text-align: center;
}
.el-tabs--top {
  height: 275px;
}
</style>

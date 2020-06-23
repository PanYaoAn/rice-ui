<template>
  <!-- 对话框遮罩层  self 代表只有点击自己猜触发-->
  <transition name="dialog-fade">
    <div class="re-dialog-wrapper" v-show="visible" @click.self="handleClose">
      <div class="re-dialog" :style="{width,marginTop:top}">
        <div class="re-dialog-header">
          <slot name="title">
            <span class="re-dialog-title">{{title}}</span>
          </slot>
          <button class="re-dialog-headerbtn" @click="handleClose">
            <i class="re-icon-close"></i>
          </button>i
          <div class="re-dialog-body">
            <!-- 默认插槽 -->
            <slot></slot>
          </div>
          <div class="re-dialog-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "re-dialog",
  methods: {
    handleClose() {
      console.log("111");
      // 子传父传值
      this.$emit("update:visible", false);
    }
  },
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "1vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script> 
<style lang="scss">
.re-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .re-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &-header {
      padding: 20px 20px 10px;
      .re-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .re-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close {
          color: 909399;
        }
      }
    }
    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // ::v-deep 深度选择器
       .re-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);

  }
}
</style>
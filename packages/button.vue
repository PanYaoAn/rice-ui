<template>
  <button
    class="re-button"
    :class="[`re-button-${type}`,{
      'is-plain' : plain,
      'is-round' : round,
      'is-circle': circle,
      'is-disabled' : disabled
  }]"
  :disabled="disabled"
    @click="handleClick"
  >
  <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
// import "./assets/iconfont.sass"
export default {
  name: "re-button",
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  // 封装一个通用`组件 会对props做约束 props进行校验 vue官网搜props 校验
  props: {
    type: {
      // 数据类型 字符串
      type: String,
      default: "default"
    },
    // 镂空样式
    plain: {
      type: Boolean,
      default: false
    },
    // 圆角
    round: {
      type: Boolean,
      default: false
    },
    // 圆角
    circle: {
      type: Boolean,
      default: false
    },
    disabled:{
      type:Boolean,
      default: false

    },
    icon:{
      type:String,
      default:''
    }
  },
  created() {
    // console.log(props)
  }
};
</script>
<style lang="scss" scoped>
// import ""

// @import "../assets/iconfont.css";
.re-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.re-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.re-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.re-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.re-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.re-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.re-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.re-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.re-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.re-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.re-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.re-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round属性
.re-button.is-round {
  border-radius: 20px;
  padding: 10px 20px;
}
// circle属性
.re-button.is-circle {
  border-radius: 50%;
  padding: 8px;
}
// icon配套样式
.re-button [class*="re-icon"] + span {
  margin-left: 5px;
}
// disabled属性
.re-button.is-disabled {

    opacity: 0.6;
  cursor: no-drop;
 

}
</style>
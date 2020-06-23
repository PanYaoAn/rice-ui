<template>
  <label class="re-radio " :class="{'is-checked' : label === model}">
    <span class="re-radio-input">
      <span class="re-radio-inner"></span>
      <input 
      :value="label" 
      v-model="model"
      type="radio"
       class="re-radio-original"
      />
    </span>
    <span class="re-radio-label">
      <slot></slot>
      <!-- 如果没有传内容,就把label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "re-radio",
  inject:{
    RadioGroup:{
      default:''
    }
  },
  //需要提供一个计算属性
  computed:{
    model:{
      get(){
        // 判断是否被radio-group 包裹,是就返回 radio-ground的value,否则返回当前value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value){
        //触发父组件给当前组件触发的input事件
        // this.$emit('input',value)
         // 判断是否被radio-group 包裹,是就返回 radio-ground的value,否则返回当前value
        this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
      }
    },
    isGroup(){
      // 用于判断radio是否被radioGroup所包裹 !!改为布尔值
      return !!this.RadioGroup
    }
  },
  data() {
    return {};
  },
  props:{
    label:{
      type:[String,Number,Boolean],
      default:''
    },
    value:null,
    name:{
      type:String,
      default:''
    }
  },
  created(){

  }
};
</script>

<style lang="scss">
.re-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .re-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .re-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      line-height: 14px;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .re-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .re-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.re-radio.is-checked {
  .re-radio-input {
    .re-radio-inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .re-radio-label {
    color: #409eff;
  }
}
</style>
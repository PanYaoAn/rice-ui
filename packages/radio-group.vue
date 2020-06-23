<template>
 <div class="re-radio-group">
     <slot></slot>
 </div>
</template>

<script>
export default {
    name:'re-radio-group',
    provide(){
        return{
            RadioGroup:this

        }
    },
  data() {
    return {};
  },
  props:{
    //   re-radio-group 接收到了value值
    // 将来还需要触发当前组件的input事件
    // provide 与 inject 子孙之间组件通讯
      value:{
          value:null
      }
  }
};
</script>

<style>
</style>
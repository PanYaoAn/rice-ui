<template>
  <div class="re-input" :class="{'re-input--suffix' : showSuffix} ">
    <input
      :type="showpassword ? (passwordVisible ? 'text' : 'password') : type"
      class="re-input-inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handeInput"
    />
    <span v-if="showSuffix" class="re-input-suffix">
      <i class="re-input-icon re-icon-delete" v-if="clearable" @click="clear"></i>
      <i class="re-input-icon re-icon-course " 
      :class="{'re-input-icon-active' : passwordVisible}" 
      v-if="showpassword" @click="handlePassword">
      </i>
    </span>
  </div>
</template>
<script>
export default {
  name: "re-input",
  data() {
    return {
        // 控制是否显示密码
        passwordVisible:false
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showpassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handeInput(e) {
      //   this.value = e.target.value
      this.$emit("input", e.target.value);
    },
    // 清空文本框内容
    clear() {
    
        this.$emit('input','')
    },
     handlePassword(){
       this.passwordVisible = !this.passwordVisible
         console.log( this.passwordVisible )
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showpassword;
    },
   
  }
};
</script>
<style lang="scss">
.re-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .re-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 40px;
    outline: none;
    padding: 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.re-input--suffix {
  .re-input-inner {
    padding: right 30px;
  }
  .re-input-suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transform-style: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
     .re-input-icon-active{
      color: red;
  }
  }
  
}
</style>
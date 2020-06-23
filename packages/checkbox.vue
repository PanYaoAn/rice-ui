<template>
  <label class="re-checkbox" :class="{' is-checked':isChecked}">
    <span class="re-checkbox-input">
      <span class="re-checkbox-inner"></span>
      <input
        type="checkbox"
        class="re-checkbox-original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="re-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "re-checkbox",
  inject: {
    CheckboxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        console.log(value);
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      //   如果是group包裹 判断label 是否在model中
      // 如果没有group包裹 直接使用model
    //   includes() 数组方法,查询数组是有有值
     
      return this.isGroup ? this.model.includes(this.label) : this.model;

    },
    
  },
  wathch: {
    value(val, oldval) {
      console.log(val);
      console.log(oldval);
    }
  },
  created() {
    //   console.log(this.value)
  
  }
};
</script>

<style lang="scss">
.re-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: nre;
  margin-right: 30px;
  .re-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: nre;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .re-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .re-checkbox-original {
      opacity: 0;
      outline: nre;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .re-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.re-checkbox.is-checked {
  .re-checkbox-input {
    .re-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .re-checkbox-label {
    color: #409eff;
  }
}
</style>
<template>
  <svg :class="svgClass" v-on="$listeners">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon${this.className}`;
      }
      return 'svg-icon';
    },
  },
};
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

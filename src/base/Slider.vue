<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-scroll" ref="slide">
        <div class="slide-banner-wrapper">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);

export default {
  data() {
    return {
      slide: null,
      currentPageIndex: 0,
      playTimer: 0
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    clearTimeout(this.playTimer);
    this.slide.destroy();
  },
  methods: {
    init() {
      clearTimeout(this.playTimer);
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true
      });
      this.slide.on("scrollEnd", this._onScrollEnd);

      // user touches the slide area
      this.slide.on("beforeScrollStart", () => {
        clearTimeout(this.playTimer);
      });
      // user touched the slide done
      this.slide.on("scrollEnd", () => {
        this.autoGoNext();
      });
      window.bs = this.slide;
      this.autoGoNext();
    },
    nextPage() {
      this.slide.next();
    },
    prePage() {
      this.slide.prev();
    },
    _onScrollEnd() {
      let pageIndex = this.slide.getCurrentPage().pageX;
      this.currentPageIndex = pageIndex;
      this.autoGoNext();
    },
    autoGoNext() {
      clearTimeout(this.playTimer);
      this.playTimer = setTimeout(() => {
        this.nextPage();
      }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
.slide-banner {
  .banner-wrapper {
    position: relative;
  }
  .slide-banner-scroll {
    min-height: 1px;
    overflow: hidden;
  }
  .slide-banner-wrapper {
    white-space: nowrap;
    font-size: 0;
    .slide-item {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 26px;
      .item-img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
}
</style>

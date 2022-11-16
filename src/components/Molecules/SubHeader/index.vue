<template>
  <h2 class="sub-header">
    <slot />
    <picture class="sub-header__image">
      <source srcset="~assets/images/bg-header_sp.jpg" media="(max-width: 767px)">
      <img src="~assets/images/bg-header_pc.jpg" alt="">
    </picture>
  </h2>
</template>

<style lang="scss" scoped>
.sub-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
  color: var(--color-white);
  font-size: 40px;
  line-height: 1.17;
  font-weight: 500;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 160px;
    font-size: 28px;
  }

  &__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: var(--color-primary);
      position: absolute;
      top: 0;
      left: 0;
      mix-blend-mode: darken;
    }

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      object-fit: cover;
    }
  }
}
</style>

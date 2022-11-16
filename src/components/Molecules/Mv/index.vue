<template>
  <div class="mv">
    <h1 class="mv__catch">
      <p class="mv__title">START</p>
      <p class="mv__subtitle">仕事に最高のスタートを。</p>
    </h1>
    <picture class="mv__image">
      <source srcset="~assets/images/bg-header_sp.jpg" media="(max-width: 767px)">
      <img src="~assets/images/bg-header_pc.jpg" alt="">
    </picture>
  </div>
</template>

<style lang="scss" scoped>
.mv {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 767px) {
    height: 460px;
  }

  &__catch {
    color: var(--color-white);
    text-align: center;
  }

  &__title {
    margin: 0;
    font-size: 160px;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 767px) {
      font-size: 80px;
    }
  }

  &__subtitle {
    margin: 0;
    font-size: 24px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.41);
    letter-spacing: 0.1em;

    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
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

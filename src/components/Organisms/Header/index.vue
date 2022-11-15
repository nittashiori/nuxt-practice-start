<template>
  <header class="header">
    <div class="header__logo"><Logo /></div>
    <div class="header__body">
      <div class="header--pc">
        <HeaderNav />
      </div>
      <div class="header__humburger header--sp">
        <Humburger
          :active="trigger"
          @click="trigger = !trigger"
        />
      </div>
    </div>
    <div class="header__slide-menu header--sp">
      <HeaderNavSp
        :active="trigger"
        @click.native="trigger = !trigger"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      trigger: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 70px;
  background: var(--color-white);
  box-sizing: border-box;
  position: fixed;
  z-index: 0;

  @media screen and (max-width: 767px) {
    padding: 20px 0 20px 20px;
  }

  &--pc {
    display: block;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &--sp {
    display: none;

    @media screen and (max-width: 767px) {
      display: block;
    }
  }

  &__logo {
    .logo {
      width: 167px;
      height: auto;

      @media screen and (max-width: 767px) {
        width: 82px;
      }
    }
  }

  &__humburger {
    width: 60px;
    aspect-ratio: 1 / 1;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__slide-menu {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
}
</style>

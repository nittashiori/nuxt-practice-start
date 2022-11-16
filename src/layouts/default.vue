<template>
  <div class="wrapper">
    <Header />
    <div class="contents">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.contents {
  padding-top: 90px;

  @media screen and (max-width: 767px) {
    padding-top: 60px;
  }
}
</style>

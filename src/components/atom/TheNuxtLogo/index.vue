<template lang="pug">
  div(:class="$style.logo")
    div(:class="$style.two")
    div(:class="$style.one")
    div(:class="$style.three")
    div(:class="$style.four")
</template>

<style lang="scss" module>
.logo {
  position: relative;
  display: block;
  width: 245px;
  height: 180px;
  overflow: hidden;
  transform: rotateX(180deg);
  animation: turn 2s linear forwards 1s;

  @mixin triangle($top, $left) {
    position: absolute;
    top: #{$top}px;
    left: #{$left}px;
    width: 0;
    height: 0;
  }

  .one {
    @include triangle(0, 0);

    border-right: 105px solid transparent;
    border-bottom: 180px solid rgb(65, 184, 131);
    border-left: 105px solid transparent;
  }

  .two {
    @include triangle(30, 35);

    border-right: 87.5px solid transparent;
    border-bottom: 150px solid rgb(59, 128, 112);
    border-left: 87.5px solid transparent;
    animation: go-right 0.5s linear forwards 3.5s;
  }

  .three {
    @include triangle(60, 35);

    border-right: 70px solid transparent;
    border-bottom: 120px solid rgba(#35495e, 1);
    border-left: 70px solid transparent;
    animation: go-right 0.5s linear forwards 3.5s;
  }

  .four {
    @include triangle(120, 70);

    border-right: 35px solid transparent;
    border-bottom: 60px solid rgba(whitesmoke, 1);
    border-left: 35px solid transparent;
    animation: go-down 0.5s linear forwards 3s;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes go-down {
  100% {
    top: 180px;
  }
}

@keyframes go-right {
  100% {
    left: 70px;
  }
}
</style>

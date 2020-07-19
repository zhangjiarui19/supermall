<template>
  <div id="cls">
    <div id="test" @touchstar="TouchStar" @techmove="TouchMove" @touchend="TouchEnd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Test",
    data: function () {
      return {
        count: 0,
        currt: 1,
        wwidth: 0,
        wstyle: {},
        shifou: false,
      }
    },
    mounted() {
      setTimeout(()=>{
        this.handle()

        this.startime()
      }, 100)
    },
    methods: {
      TouchStar() {},
      TouchMove() {},
      TouchEnd() {},
      handle(){
        let WaiA = document.getElementById('test')
        let nei = WaiA.getElementsByClassName("slide")
        this.count = nei.length
        if (this.count>1){
          let frist = nei[0].cloneNode(true)
          let last = nei[this.count-1].cloneNode(true)
          WaiA.insertBefore(last, nei[0])
          WaiA.appendChild(frist)
        }
        this.wwidth = WaiA.offsetWidth
        this.wstyle = WaiA.style

        this.set_trans(-this.wwidth)
      },
      set_trans(num){
        this.wstyle.transform = `translate3d(${num}px, 0, 0)`;
        this.wstyle['-webkit-transform'] = `translate3d(${num}px), 0, 0`;
        this.wstyle['-ms-transform'] = `translate3d(${num}px), 0, 0`;
      },
      startime(){
        let ntl = window.setInterval(()=>{
          this.currt++;
          this.move_pos(-this.currt*this.wwidth)
        }, 3000)
      },
      move_pos(num){
        this.shifou = true;
        this.set_trans(num)
        this.cheak()
        this.shifou=false
      },
      cheak(){
        if (this.currt<=0) {
          this.currt= this.count
          this.set_trans(-this.currt*this.wwidth)
        }
        if (this.currt>=this.count+1) {
          this.currt = 1
          this.set_trans(-this.currt*this.wwidth)
        }
      }
    },
  }
</script>

<style scoped>
  #cls {
    overflow: hidden;
    position: relative;
  }

  #test {
    display: flex;
  }

</style>
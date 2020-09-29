<template>
  <div class="about" >
    <h1>This is an about page</h1>
<!--    <hello-world msg="Welcome to Your asdasdadadsadasda App"/>-->
    <z-hello-world msg="Welcome to Your asdasdadadsadasda App"/>
<!--    <hello-world></hello-world>-->
  </div>
</template>
<script>
// import { HelloWorld } from 'zoom'

export default {
  name: 'about',
  components: {
    // HelloWorld
  },
  mounted () {
    // deviceEnquire(deviceType => {
    //   console.log(deviceType)
    // })
  },
  methods : {
    abc (){
      console.log("12312")
    }
  }
}

</script>

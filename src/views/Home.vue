<template>
  <b-container id="home">
    <b-row id="about-me">
      <b-col class="col-12 col-md-6">
        <b-img id="headshot" alt="Headshot" rounded="circle" fluid src="../assets/bald-pose.jpg"/>
      </b-col>
      <b-col class="col-12 col-md-6">
        <b-row id="greeting">
          Hello, hello!
        </b-row>
        <b-row>
          <p>
            My name is Zach Long. I am a senior at Virginia Tech studying computer science.
          </p>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  computed: {
  }
};
</script>

<style scoped>
#home {
  max-width: 1200px;
}

#headshot {
  max-width: 50%;
}

#greeting {
    font-size: 40px;
    font-weight: bold;
}
</style>

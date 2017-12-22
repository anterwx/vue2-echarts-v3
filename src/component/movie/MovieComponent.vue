<template>
  <div id="secondcomponent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <el-table :data="articles" style="width: 100%">
        <el-table-column
          prop="title"
          label="电影名称">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      apiUrl: "https://api.douban.com/v2/movie/top250?count=20"
    };
  },
  methods: {
    getMovies: function() {
      var vm = this;
      vm.$http
        .jsonp(
          vm.apiUrl,
          {},
          {
            headers: {},
            emulateJSON: true
          }
        )
        .then(
          response => {
            vm.articles = response.data.subjects;
            // vm.articles = response.data["subjects"];
          },
          error => {
            console.log(error);
          }
        );
      //使用axios
      // vm.$http.get(vm.apiUrl).then(
      //   response => {
      //     vm.articles = response.data.subjects;
      //     // vm.articles = response.data["subjects"];
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
    }
  },
  mounted: function() {
    this.getMovies();
  }
};
</script>
<style>


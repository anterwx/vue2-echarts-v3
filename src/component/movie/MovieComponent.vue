<template>
 <el-container>
    <el-header>
      <h1 style='color:#ffffff;'>豆瓣电影排行榜</h1>
    </el-header>
    <el-main>
      <el-card>
        <el-table :data='articles'>
          <el-table-column
            prop='title'
            label='电影名称'>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
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
            // vm.articles = response.data['subjects'];
          },
          error => {
            console.log(error);
          }
        );
      // 使用axios
      // vm.$http.get(vm.apiUrl).then(
      //   response => {
      //     vm.articles = response.data.subjects;
      //     // vm.articles = response.data['subjects'];
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
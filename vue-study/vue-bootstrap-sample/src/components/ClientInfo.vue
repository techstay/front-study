<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2>客户端信息</h2>
      <div class="alert alert-success alert-dismissible fade show" role="alert" hidden>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        获取IP地址成功
      </div>
      <table class="table table-striped table-bordered table-hover table-responsive">
        <thead class="thead-default">
        <th>项目</th>
        <th>值</th>
        </thead>
        <tbody>
        <tr>
          <td>操作系统</td>
          <td>{{clientInfo.os}}</td>
        </tr>
        <tr>
          <td>浏览器</td>
          <td>{{clientInfo.browser}}</td>
        </tr>
        <tr>
          <td>IP地址</td>
          <td>{{clientInfo.ip}}</td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>
<script>
  import platform from 'platform'
  import axios from 'axios'

  export default {
    data() {
      return {}
    },
    computed: {
      clientInfo: function () {
        let info = {
          ip: '正在检测',
          os: `${platform.os}`,
          browser: `${platform.name} ${platform.version}`
        }
        axios.get('http://httpbin.org/ip')
          .then(function (response) {
            info.ip = response.data.origin
          })
          .catch(function (error) {
            alert(error)
          })
        return info
      }
    }
  }
</script>

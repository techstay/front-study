<template>
  <b-row align-h="center">
    <b-col cols="6" md="6">
      <h2>客户端信息</h2>
      <b-button @click="onClick" variant="primary">添加项目</b-button>
      <b-button @click="seen = !seen" variant="primary">是否显示项目</b-button>
      <b-table striped bordered hover responsive :fields="fields" :items="items"></b-table>
    </b-col>
  </b-row>

</template>
<script>
  import platform from 'platform'
  import axios from 'axios'

  let tableItems = []

  function initTableItems() {
    tableItems.push({key: '操作系统', value: `${platform.os}`})
    tableItems.push({key: '浏览器', value: `${platform.name} ${platform.version}`})
    axios.get('http://httpbin.org/ip')
      .then(function (response) {
        let ip = response.data.origin
        tableItems.push({key: 'IP地址', value: ip})
      })
      .catch(function (error) {
        alert(error)
      })
    return tableItems
  }

  export default {
    data() {
      return {
        fields: [
          {
            key: 'key', label: '属性'
          }, {
            key: 'value', label: '值'
          }],
        items: initTableItems()
      }
    },
    computed: {},
    methods: {}
  }
</script>

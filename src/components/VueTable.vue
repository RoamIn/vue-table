<template>
  <table>
    <thead>
      <tr>
        <th v-for="th in list.head" :key="th.key">{{ th.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, index) in list.data" :key="index">
        <td v-for="col in list.head" :key="col.key" v-html="ouput(tr[col.key], tr, col.render)"></td>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    let i = 10

    while (i--) {
      this.list.data.push({
        id: this.list.data.length + 1,
        des: '测试 ' + this.list.data.length + 1,
        creator: 'Titan',
        members: ['张三', '李四', '王五'],
        department: 'OC ' + this.list.data.length + 1,
        status: Math.random() > 0.5,
        createTimestamp: (new Date()).getTime()
      })
    }
  },
  data () {
    return {
      list: {
        head: [
          {
            title: '编号',
            key: 'id'
          },
          {
            title: '描述',
            key: 'des'
          },
          {
            title: '创建者',
            key: 'creator'
          },
          {
            title: '部门',
            key: 'department'
          },
          {
            title: '成员',
            key: 'members',
            render (val, row) {
              const list = []

              val.forEach(val => {
                list.push(`<li>${val}</li>`)
              })

              return `<ul>${list.join('')}</ul>`
            }
          },
          {
            title: '状态',
            key: 'status',
            render (val, row) {
              return this.getStatusName(val)
            }
          },
          {
            title: '创建时间',
            key: 'createTimestamp',
            render (val, row) {
              return this.formatDate(val)
            }
          }
        ],
        data: []
      },
      statusMap: {
        true: '成功',
        false: '失败'
      }
    }
  },
  methods: {
    ouput (val, row, render) {
      if (typeof render !== 'undefined') {
        return render.call(this, val, row)
      }

      return val
    },
    getStatusName (status) {
      return this.statusMap[status]
    },
    formatDate (timeStamp) {
      const date = new Date(timeStamp)
      const Y = date.getFullYear()
      const M = date.getMonth() + 1
      const D = date.getDate()
      const H = date.getHours()
      const m = date.getMinutes()
      const s = date.getSeconds()

      return `${Y}-${M}-${D} ${H}:${m}:${s}`
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  #app {
    padding: 20px;
  }

  table {
    width: 100%;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #e8e8e8;
    border-right: 0;
    border-bottom: 0;

    thead>tr>th, tbody>tr>td {
      padding: 16px;
      word-break: break-all;
      border-right: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
    }
  }

  ul {
    list-style: none;
  }
</style>

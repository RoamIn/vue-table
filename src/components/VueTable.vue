<template>
  <table>
    <thead>
      <tr>
        <th v-for="th in list.head" :key="th.key">{{ th.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, index) in list.data" :key="index">
        <td v-for="col in list.head" :key="col.key">{{ tr[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      list: {
        head: [
          {
            title: '编号',
            key: 'id'
          },
          {
            title: '部门',
            key: 'department'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '创建时间',
            key: 'createTimestamp'
          }
        ],
        data: [
          {
            id: 1,
            department: 'OC',
            status: 1,
            createTimestamp: 1522835868516
          },
          {
            id: 2,
            department: 'OA',
            status: 1,
            createTimestamp: 1522835368516
          },
          {
            id: 3,
            department: 'ERP',
            status: 0,
            createTimestamp: 1522836868516
          }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

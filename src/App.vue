<template>
  <div id="app">
    <vue-table :columns="table.columns"
               :data="table.data"></vue-table>
  </div>
</template>

<script>
import VueTable from '@/components/vue-table'

const TYPE_MAP = {
  0: 'USB',
  1: 'Type-C',
  2: 'Lighting'
}

const STATUS_MAP = {
  0: 'NORMAL',
  1: 'DISABLED'
}

const USER_LIST = ['张三', '李四', '王老五', '赵六']

export default {
  name: 'App',
  components: {
    VueTable
  },
  data () {
    return {
      table: {
        columns: [
          {
            title: '#',
            key: 'id'
          },
          {
            title: 'Title',
            key: 'title'
          },
          {
            title: 'Type',
            key: 'type'
          },
          {
            title: 'Status',
            key: 'status'
          },
          {
            title: 'Applicant',
            key: 'applicant'
          },
          {
            title: 'Applied Time',
            key: 'createTime'
          },
          {
            title: 'Actions',
            key: '',
            render: (h, {row}) => {
              return h('div', {}, [
                h('button', {
                  style: {
                    padding: '5px 15px',
                    border: '1px solid #dcdee2',
                    borderRadius: '4px',
                    backgroundColor: '#fff'
                  },
                  on: {
                    click: () => {
                      this.preview(row)
                    }
                  }
                }, 'Preview')
              ])
            }
          }
        ],
        data: []
      }
    }
  },
  methods: {
    getRandomType (i) {
      return TYPE_MAP[i]
    },
    getRandomStatus (i) {
      return STATUS_MAP[i]
    },
    getRandomUserName () {
      return USER_LIST[parseInt(Math.random() * USER_LIST.length)]
    },
    mock () {
      const data = []

      for (let i = 1; i < 10000; i++) {
        data.push({
          id: i,
          title: 'Title' + i,
          type: this.getRandomType(i % 3),
          status: this.getRandomStatus(i % 2),
          applicant: this.getRandomUserName(),
          createTime: new Date().getTime() + parseInt(1000 * 60 * 24 * Math.random())
        })
      }

      this.table.data = data
    },
    preview (item) {
      alert(JSON.stringify(item, null, 4))
    }
  },
  mounted () {
    this.mock()
  }
}
</script>

<style>
  #app {
    padding: 20px;
  }
</style>

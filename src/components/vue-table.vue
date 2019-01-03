<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns"
            :key="col.key">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data"
          :key="rowIndex">
        <td v-for="(col, colIndex) in columns"
            :key="col.key">
          <template v-if="typeof col.render === 'function'">
            <render-cell :row="row"
                         :column="col"
                         :render="col.render"
                         :index="colIndex"></render-cell>
          </template>
          <template v-else>{{ row[col.key] }}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/ecmascript-6">
import RenderCell from './render-cell'

export default {
  name: 'VueTable',
  components: {RenderCell},
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  table {
    width: 100%;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #e8eaec;
    border-right: 0;
    border-bottom: 0;

    th,
    td {
      word-break: break-all;
      border-right: 1px solid #e8eaec;
      border-bottom: 1px solid #e8eaec;
      vertical-align: middle;
    }

    th {
      overflow: hidden;
      height: 40px;
      white-space: nowrap;
      background-color: #f8f8f9;
    }

    td {
      overflow: hidden;
      padding-left: 18px;
      padding-right: 18px;
      height: 48px;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
    }
  }
</style>
